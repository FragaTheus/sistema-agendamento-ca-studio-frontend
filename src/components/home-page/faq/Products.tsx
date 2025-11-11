"use client";

import { Box, Card, CardContent, CardCover, Stack, Typography } from "@mui/joy";
import { label } from "framer-motion/client";

const products = [
  { id: 1, imgPath: "adcos-logo.jpg", label: "ADCOS" },
  { id: 2, imgPath: "cicaplast-logo.jpg", label: "CICAPLAST" },
  { id: 3, imgPath: "master-logo.jpg", label: "MASTER" },
  { id: 4, imgPath: "bioderma-logo.png", label: "BIODERMA" },
];

export const Products = () => {
  return (
    <Stack
      width={"100%"}
      height={"60%"}
      alignSelf={"flex-start"}
      alignItems={"center"}
      justifyContent={"center"}
      spacing={3}
    >
      <Typography level="h2" sx={{ color: "text.primary" }}>
        Cuidando de Você com as Melhores Marcas
      </Typography>
      <Box
        width={"80%"}
        height={"100%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        {products.map((p) => (
          <Stack alignItems={"center"} spacing={2}>
            <Card
              key={p.id}
              variant="soft"
              sx={{
                bgcolor: "background.surface",
                width: "250px",
                height: "150px",
              }}
            >
              <CardContent>
                <CardCover>
                  <img
                    src={p.imgPath}
                    style={{ objectPosition: "center 70%" }}
                  ></img>
                </CardCover>
              </CardContent>
            </Card>
            <Typography level="body-lg">{p.label}</Typography>
          </Stack>
        ))}
      </Box>
    </Stack>
  );
};
