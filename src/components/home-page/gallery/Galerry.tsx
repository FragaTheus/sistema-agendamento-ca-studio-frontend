"use client";

import { Box, Card, Typography } from "@mui/joy";
import BeforeAfterGallery from "./BeforeAfter";
import { useResContext } from "@/context/responsive-context/ResponsiveContext";

export const Gallery = () => {
  const { isMobile } = useResContext();
  return (
    <Box
      width={"90%"}
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"50px"}
    >
      <Card
        variant="soft"
        sx={{ width: "80%", height: "70%", bgcolor: "background.body" }}
      >
        <Box
          alignItems={"center"}
          justifyContent={"center"}
          display={"flex"}
          flexDirection={"column"}
          flex={1}
        >
          <Typography level="title-md" sx={{ color: "primary.300" }}>
            Beleza Sob Medida
          </Typography>
          <Typography level="title-sm" sx={{ color: "text.primary" }}>
            Antes e Depois
          </Typography>
        </Box>
        <Box>
          <BeforeAfterGallery />
        </Box>
      </Card>
    </Box>
  );
};
