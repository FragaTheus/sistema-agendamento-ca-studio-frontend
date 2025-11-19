"use client";

import { Box, Button, Typography } from "@mui/joy";
import React from "react";

interface IHeroLayout {
  title: string;
  buttonText: string;
}

export const HeroLayout: React.FC<IHeroLayout> = ({ title }) => {
  return (
    <Box
      width={"100%"}
      height={"100svh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      overflow={"hidden"}
      position={"relative"}
    >
      <Box
        component={"video"}
        autoPlay
        muted
        loop
        playsInline
        src={"/hero-video.mp4"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100vw",
          height: "100svh",
          objectFit: "cover",
          objectPosition: "center 1%",
          transform: "translate(-50%, -50%)",
          filter: "brightness(0.5)",
        }}
      />
      <Box
        id="content"
        zIndex={1}
        width={"80%"}
        height={"80%"}
        position={"absolute"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"flex-end"}
        flexDirection={"column"}
        gap={"10px"}
      >
        <Typography level="title-lg" sx={{ color: "#ffffff" }}>
          {title}
        </Typography>
        <Button
          variant="outlined"
          component="a"
          href="https://wa.me/5511940436267"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography level="title-md" sx={{ color: "inherit" }}>
            Cuide-se agora
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};
