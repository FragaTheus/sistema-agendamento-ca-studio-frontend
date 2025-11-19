import { AuthCard } from "@/components/authcard/AuthCard";
import { AppForm } from "@/components/form/Form";

const inputs = [
  {
    name: "nome",
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
  return (
    <AuthCard
      title="Cadastro"
      subtitle="Entre com os dados para se cadastrar"
      navigateProps={navigateProps}
    >
      <AppForm btnText="Cadastre-se" inputs={inputs} />
    </AuthCard>
  );
}
