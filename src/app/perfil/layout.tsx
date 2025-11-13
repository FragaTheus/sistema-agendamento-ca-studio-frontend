import { SectionLayout } from "@/layouts/section-layout/SectionLayout";
import { Box } from "@mui/joy";

interface ILoginPage {
  children: React.ReactNode;
}

export default function LoginLayout({ children }: ILoginPage) {
  return (
    <Box
      component={"main"}
      width={"100%"}
      height={"100svh"}
      bgcolor={"background.body"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <SectionLayout id="" bgColor="background.body">
        {children}
      </SectionLayout>
    </Box>
  );
}
