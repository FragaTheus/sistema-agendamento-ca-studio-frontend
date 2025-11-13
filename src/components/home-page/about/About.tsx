"use client";

import { useResContext } from "@/context/responsive-context/ResponsiveContext";
import { AspectRatio, Box, Button, Stack, Typography } from "@mui/joy";

export const About = () => {
  const { isMobile } = useResContext();
  return (
    <Box
      width={"100%"}
      bgcolor={"primary.400"}
      alignSelf={"flex-start"}
      alignItems={"center"}
      justifyContent={"center"}
      display={"flex"}
      gap={"20px"}
      flexDirection={isMobile ? "column" : "row"}
      height={isMobile ? "90svh" : "60svh"}
    >
      <AspectRatio
        ratio={isMobile ? "2/1" : "1/1"}
        sx={{
          width: "clamp(280px, 20vw, 450px)",
          borderRadius: "md",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.25)",
        }}
      >
        <img src={"/hero.jpeg"}></img>
      </AspectRatio>
      <Box
        display={"flex"}
        alignItems={"flex-start"}
        flexDirection={"column"}
        width={isMobile ? "85%" : "50%"}
        padding={isMobile ? "5px" : "10px"}
        gap={isMobile ? "5px" : "10px"}
      >
        <Stack>
          <Typography level="title-md" sx={{ color: "primary.100" }}>
            Cristiane Aguiar
          </Typography>
        </Stack>
        <Typography level="body-md" sx={{ color: "primary.100" }}>
          Sou Cristiane Aguiar, especialista em estética há mais de 10 anos.
          Apaixonada por realçar a beleza natural e elevar a autoestima,
          construí uma trajetória sólida marcada por dedicação e constante
          aprimoramento. À frente do meu estúdio, ofereço um atendimento
          acolhedor e personalizado, onde cada detalhe é pensado com amor e
          profissionalismo. Se você busca naturalidade, procedimentos
          exclusivos, produtos de alta qualidade e um atendimento único, venha
          viver essa experiência no Studio Cristiane Aguiar.
        </Typography>
      </Box>
    </Box>
  );
};
