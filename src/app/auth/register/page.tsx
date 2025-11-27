"use client";

import { useState } from "react";
import { AuthCard } from "@/components/authcard/AuthCard";
import { AppForm } from "@/components/form/Form";
import { Alert } from "@mui/joy";

const inputs = [
  {
    name: "name",
    label: "Digite seu nome:",
    placeholder: "Nome Sobrenome",
    type: "text",
  },
  {
    name: "email",
    label: "Digite seu e-mail:",
    placeholder: "meuemail@exemplo.com",
    type: "email",
  },
  {
    name: "password",
    label: "Digite sua senha:",
    placeholder: "Senha@123",
    type: "password",
  },
  {
    name: "confirmPassword",
    label: "Confirme sua senha:",
    placeholder: "Senha@123",
    type: "password",
  },
  {
    name: "adminKey",
    label: "Digite a chave administrativa:",
    placeholder: "Chave@123",
    type: "password",
  },
];

const navigateProps = [
  {
    labelBtn: "Ja possui cadastro?",
    btnText: "Entrar",
    btnPathUrl: "/auth/login",
  },
  {
    labelBtn: "Nao lembra sua senha?",
    btnText: "Recuperar senha",
    btnPathUrl: "/auth/recovery",
  },
];

export default function RegisterPage() {
  const [alert, setAlert] = useState<{
    type: "success" | "danger";
    message: string;
  } | null>(null);

  const registerUser = async (data: any) => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      console.log("JSON enviado para API:", data);

      const json = await response.json();

      if (!response.ok) {
        setAlert({ type: "danger", message: json.msg });
        return;
      }

      if (json.success && json.data) {
        localStorage.setItem("token", json.data);
      }

      setAlert({ type: "success", message: json.msg });
    } catch (err) {
      setAlert({
        type: "danger",
        message: "Erro ao tentar se registrar. Tente novamente.",
      });
    }
  };

  return (
    <AuthCard
      title="Cadastro"
      subtitle="Entre com os dados para se cadastrar"
      navigateProps={navigateProps}
    >
      {alert && (
        <Alert color={alert.type} variant="soft" sx={{ mb: 2 }}>
          {alert.message}
        </Alert>
      )}

      <AppForm btnText="Cadastre-se" inputs={inputs} onSubmit={registerUser} />
    </AuthCard>
  );
}
