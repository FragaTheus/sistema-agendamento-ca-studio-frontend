"use client";

import registerContent from "@/content/register-page/registerContent.json";
import { Box, Button, Card, CardContent, Divider, Typography } from "@mui/joy";
import { RegisterForm } from "../register-form/RegisterForm";
import { useRouter } from "next/navigation";
import { useResContext } from "@/context/responsive-context/ResponsiveContext";

export const RegisterCard = () => {
  const { isTablet } = useResContext();
  const router = useRouter();
  return (
    <Card
      variant="solid"
      sx={
        isTablet
          ? { width: "80%", minHeight: "60svh", bgcolor: "background.surface" }
          : { width: "40%", minHeight: "60svh", bgcolor: "background.surface" }
      }
    >
      <CardContent
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          id="card-content"
          flex={1}
          padding={isTablet ? "0px" : "20px"}
          gap={"10px"}
          display={"flex"}
          flexDirection={"column"}
        >
          <Box id="card-header" width={"100%"}>
            <Typography level="title-md" sx={{ color: "primary.300" }}>
              {registerContent.card.cardTitle}
            </Typography>
          </Box>
          <Box id="card description">
            <Typography level="body-md">
              {registerContent.card.cardSubtitle}
            </Typography>
          </Box>
          <Divider />
          <Box id="login-form" width={"100%"} gap={"20px"}>
            <RegisterForm />
          </Box>
          <Divider />
          <Box
            id="login-register"
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            gap={"5px"}
            flexDirection={"column"}
          >
            <Typography>
              {registerContent.card.register.registerDescription}
            </Typography>
            <Button variant="plain" onClick={() => router.push("/auth/login")}>
              {registerContent.card.register.registerButton}
            </Button>
            <Button
              variant="plain"
              onClick={() => router.push("/auth/recovery")}
            >
              {registerContent.card.recoverPassword}
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
