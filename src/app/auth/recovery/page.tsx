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
    labelBtn: "Ainda nao possui cadastro?",
    btnText: "Cadastre-se",
    btnPathUrl: "/auth/register",
  },
];

export default function RecoveryPage() {
  return (
    <AuthCard
      title="Recuperar senha"
      subtitle="Entre com os dados para recuperar sua senha"
      navigateProps={navigateProps}
    >
      <AppForm btnText="Recuperar senha" inputs={inputs} />
    </AuthCard>
  );
}
