"use client";

import { AspectRatio, Box, Button, Typography } from "@mui/joy";

export const About = () => {
  return (
    <Box
      width={"100%"}
      height={"60svh"}
      bgcolor={"primary.400"}
      alignSelf={"flex-start"}
      alignItems={"center"}
      justifyContent={"center"}
      display={"flex"}
      gap={"20px"}
    >
      <AspectRatio
        ratio={"1/1"}
        sx={{
          width: 500,
          borderRadius: "md",
          mt: "100px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.25)",
        }}
      >
        <img src={"/hero.jpeg"}></img>
      </AspectRatio>
      <Box
        width={"30%"}
        height={"70%"}
        display={"flex"}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
        padding={"50px"}
        flexDirection={"column"}
        gap={"10px"}
      >
        <Typography level="h4" sx={{ color: "primary.100" }}>
          Oi! Sou a Cristiane Aguiar
        </Typography>
        <Typography level="body-lg" sx={{ color: "primary.100" }}>
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
        <Button variant="soft" size="lg" sx={{ color: "primary.300" }}>
          Sobre
        </Button>
      </Box>
    </Box>
  );
};
