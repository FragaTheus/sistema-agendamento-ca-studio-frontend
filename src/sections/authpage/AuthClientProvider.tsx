"use client";

import { useResContext } from "@/context/responsive-context/ResponsiveContext";
import { Divider, Stack, Typography } from "@mui/joy";

interface IAuthClientProvider {
  children: React.ReactNode;
}

export const AuthClientProvider: React.FC<IAuthClientProvider> = ({
  children,
}) => {
  const { isMobile } = useResContext();
  return (
    <Stack width={"100%"} height={"100svh"} direction={"row"}>
      {!isMobile && (
        <Stack
          width={"30%"}
          height={"100%"}
          bgcolor={"primary.300"}
          direction={"column"}
          alignItems={"flex-start"}
          justifyContent={"center"}
          px={"30px"}
        >
          <Typography level="title-lg" sx={{ color: "primary.100" }}>
            Painel Administrativo
          </Typography>
          <Divider sx={{ bgcolor: "primary.100" }} />
          <Typography level="title-md" sx={{ color: "primary.100" }}>
            Gerencie agendamentos, clientes e serviços com facilidade.
          </Typography>
        </Stack>
      )}
      <Stack flex={1} alignItems={"center"} justifyContent={"center"}>
        {children}
      </Stack>
    </Stack>
  );
};
