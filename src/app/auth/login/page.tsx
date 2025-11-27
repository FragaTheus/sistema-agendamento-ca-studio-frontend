"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AppForm } from "@/components/form/Form";
import { AuthCard } from "@/components/authcard/AuthCard";

const inputs = [
  {
    name: "email",
    label: "E-mail",
    placeholder: "meuemail@exemplo.com",
    type: "email",
  },
  {
    name: "password",
    label: "Senha",
    placeholder: "Senha@123",
    type: "password",
  },
];

const navigateProps = [
  {
    labelBtn: "Ainda não possui cadastro?",
    btnText: "Registrar-se",
    btnPathUrl: "/auth/register",
  },
];

export default function LoginPage() {
  const router = useRouter();
  const [alert, setAlert] = useState<{
    type: "success" | "danger";
    message: string;
  } | null>(null);

  const handleLogin = async (data: any) => {
    try {
      console.log("➡️ Dados enviados para login:", data);

      const res = await fetch("http://localhost:8080/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();
      console.log("⬅️ Resposta da API:", json);

      // ⚠️ Ajuste aqui: a API retorna "sucess" e não "success"
      if (!res.ok || !json.sucess) {
        throw new Error(json.msg || "Erro ao logar.");
      }

      // Ajusta caso o token esteja em json.data ou json.data.token
      const token =
        typeof json.data === "string" ? json.data : json.data?.token;
      if (!token) throw new Error("Token não recebido da API.");

      // salva token no localStorage
      localStorage.setItem("token", token);
      console.log(
        "✅ Token salvo no localStorage:",
        localStorage.getItem("token")
      );

      // mostra alert de sucesso
      setAlert({ type: "success", message: json.msg || "Login realizado!" });

      // espera 1s antes de redirecionar para que o usuário veja o alert
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push("/users");
    } catch (err: any) {
      console.error("❌ Erro no login:", err);
      setAlert({
        type: "danger",
        message: err.message || "Erro ao logar.",
      });
    }
  };

  return (
    <AuthCard
      title="Login"
      subtitle="Entre com sua conta"
      navigateProps={navigateProps}
    >
      <AppForm btnText="Entrar" inputs={inputs} onSubmit={handleLogin} />
      {alert && <div style={{ marginTop: 10 }}>{alert.message}</div>}
    </AuthCard>
  );
}
