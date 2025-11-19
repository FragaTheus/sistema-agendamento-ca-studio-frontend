import { SectionLayout } from "@/layouts/section-layout/SectionLayout";
import { AuthClientProvider } from "@/sections/authpage/AuthClientProvider";

export default function authLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <SectionLayout id="auth-section" bgColor="background.body">
        <AuthClientProvider>{children}</AuthClientProvider>
      </SectionLayout>
    </main>
  );
}
