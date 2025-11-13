"use client";

import { AspectRatio, Box, Card, CardContent, Typography } from "@mui/joy";
import { ProcedureList } from "./ProcedureList";
import { useResContext } from "@/context/responsive-context/ResponsiveContext";

export const Procedures = () => {
  const { isMobile } = useResContext();
  return (
    <Card
      variant="soft"
      sx={
        isMobile
          ? { bgcolor: "background.surface", width: "70%", height: "90%" }
          : { bgcolor: "background.surface", width: "70%", height: "70%" }
      }
    >
      <Box
        width={"100%"}
        height={"10%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={isMobile ? "center" : "flex-start"}
        paddingLeft={isMobile ? "5px" : "50px"}
        paddingTop={isMobile ? "5px" : "50px"}
      >
        <Typography level="title-lg" sx={{ color: "text.secondary" }}>
          Procedimentos
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
        <Box
          width={isMobile ? "100%" : "50%"}
          height={"100%"}
          padding={isMobile ? "0px" : "20px"}
        >
          <ProcedureList />
        </Box>
        {!isMobile && (
          <Box
            width={"50%"}
            height={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            display={"flex"}
          >
            <AspectRatio
              ratio={"2/1.9"}
              sx={{ width: "clamp(300px, 30vw, 550px)" }}
            >
              <img src={"/hero2.jpeg"} />
            </AspectRatio>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};
