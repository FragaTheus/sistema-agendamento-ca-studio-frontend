"use client";

import { Box, Card, Typography } from "@mui/joy";
import BeforeAfterGallery from "./BeforeAfter";

export const Gallery = () => {
  return (
    <Box
      width={"80%"}
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"50px"}
    >
      <Card
        variant="outlined"
        sx={{ width: "50%", height: "70%", bgcolor: "transparent" }}
      >
        <Box
          alignItems={"center"}
          justifyContent={"center"}
          display={"flex"}
          flexDirection={"column"}
          flex={1}
        >
          <Typography level="h3" sx={{ color: "text.primary" }}>
            Beleza Sob Medida: Tratamentos Feitos para Você!
          </Typography>
          <Typography level="h3" sx={{ color: "primary.400" }}>
            Galeria Antes e Depois
          </Typography>
        </Box>
        <Box>
          <BeforeAfterGallery />
        </Box>
      </Card>
    </Box>
  );
};
