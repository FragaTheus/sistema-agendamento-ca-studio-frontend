"use client";

import { AspectRatio, Box, Card, CardContent, Typography } from "@mui/joy";
import { ProcedureList } from "./ProcedureList";
import { useResContext } from "@/context/responsive-context/ResponsiveContext";

export const Procedures = () => {
  const { isTablet } = useResContext();
  return (
    <Card
      variant="soft"
      sx={
        isTablet
          ? { bgcolor: "background.surface", width: "70%", height: "90%" }
          : { bgcolor: "background.surface", width: "70%", height: "70%" }
      }
    >
      <Box
        width={"100%"}
        height={"10%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={isTablet ? "center" : "flex-start"}
        paddingLeft={isTablet ? "5px" : "50px"}
        paddingTop={isTablet ? "5px" : "50px"}
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
          width={isTablet ? "100%" : "50%"}
          height={"100%"}
          padding={isTablet ? "0px" : "20px"}
        >
          <ProcedureList />
        </Box>
        {!isTablet && (
          <Box
            width={"50%"}
            height={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            display={"flex"}
          >
            <AspectRatio
              ratio={"1/1"}
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
