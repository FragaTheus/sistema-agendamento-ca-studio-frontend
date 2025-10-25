import { SectionLayout } from "@/layouts/section-layout/SectionLayout";
import { Box, Button, Card, CardContent, Typography } from "@mui/joy";

export default function Home() {
  return (
      <SectionLayout bgColor="background.body">
          <Box width={"100"} height={"100svh"} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"50px"}>
            <Card variant="soft">
              <CardContent>
                <Typography>Login</Typography>
                <Button component={"a"} href="/auth/login">Entrar</Button>
              </CardContent>
            </Card>
            <Card variant="soft">
              <CardContent>
                <Typography>Se cadastrar</Typography>
                <Button component={"a"} href="/auth/register">Se cadastrar</Button>
              </CardContent>
            </Card>
          </Box>
      </SectionLayout>
  );
}
