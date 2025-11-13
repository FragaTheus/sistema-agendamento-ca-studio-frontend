"use client";

import { useResContext } from "@/context/responsive-context/ResponsiveContext";
import { AspectRatio, Box, Button, Typography } from "@mui/joy";

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
        <Typography level="title-sm" sx={{ color: "primary.100" }}>
          Oi! Sou a Cristiane Aguiar
        </Typography>
        <Typography level="body-md" sx={{ color: "primary.100" }}>
          Especialista em estética há mais de 10 anos. Apaixonada por realçar a
          beleza natural e elevar a autoestima de cada cliente, construí uma
          trajetória sólida na área da estética, marcada por dedicação,
          sensibilidade e constante aprimoramento. Hoje, à frente do meu próprio
          estúdio, ofereço um atendimento acolhedor e personalizado, onde cada
          detalhe é pensado com amor e profissionalismo. Se você deseja
          naturalidade, procedimentos exclusivos, produtos de alta qualidade e
          um atendimento totalmente personalizado, conheça mais sobre o meu
          trabalho e venha viver essa experiência no Studio Cristiane Aguiar.
        </Typography>
      </Box>
    </Box>
  );
};
