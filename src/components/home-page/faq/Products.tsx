"use client";

import { Box, Card, CardContent, CardCover, Stack, Typography } from "@mui/joy";

const products = [
  { id: 1, imgPath: "/adcos-seeklogo.png" },
  { id: 2, imgPath: "" },
  { id: 3, imgPath: "" },
  { id: 4, imgPath: "" },
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
      <Typography level="h2" sx={{ color: "primary.100" }}>
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
              <CardCover></CardCover>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Stack>
  );
};
