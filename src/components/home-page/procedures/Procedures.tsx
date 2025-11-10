"use client";

import { AspectRatio, Box, Card, CardContent, Typography } from "@mui/joy";
import { ProcedureList } from "./ProcedureList";

export const Procedures = () => {
  return (
    <Card
      variant="soft"
      sx={{ bgcolor: "background.surface", width: "70%", height: "70%" }}
    >
      <Box
        width={"100%"}
        height={"10%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        paddingLeft={"50px"}
        paddingTop={"50px"}
      >
        <Typography level="h3" sx={{ color: "text.secondary" }}>
          Nossos Procedimentos
        </Typography>
      </Box>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "40px",
          flex: 1,
        }}
      >
        <Box width={"50%"} height={"100%"} padding={"20px"}>
          <ProcedureList />
        </Box>
        <Box
          width={"50%"}
          height={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          display={"flex"}
        >
          <AspectRatio ratio={"2/1.9"} sx={{ width: 500 }}>
            <img src={"/hero2.jpeg"} />
          </AspectRatio>
        </Box>
      </CardContent>
    </Card>
  );
};
