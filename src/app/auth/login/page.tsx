import { AuthCard } from "@/components/authcard/AuthCard";
import { AppForm } from "@/components/form/Form";

const inputs = [
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
];

const navigateProps = [
  {
    labelBtn: "Ainda nao possui cadastro?",
    btnText: "Regitre-se",
    btnPathUrl: "/auth/register",
  },
  {
    labelBtn: "Nao lembra sua senha?",
    btnText: "Recuperar senha",
    btnPathUrl: "/auth/recovery",
  },
];

export default function LoginPage() {
  return (
    <AuthCard
      title="Log-in"
      subtitle="Entre com os dados para se logar"
      navigateProps={navigateProps}
    >
      <AppForm btnText="Entrar" inputs={inputs} />
    </AuthCard>
  );
}
