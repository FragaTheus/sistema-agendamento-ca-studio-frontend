"use client";

import { Box, Stack } from "@mui/joy";

export const Footer = () => {
  return (
    <Box
      width={"100%"}
      bgcolor={"primary.200"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"60svh"}
    >
      <Stack width={"80%"} height={"100%"} sx={{}}>
        <Stack width={"50%"}></Stack>
        <Stack width={"50%"}></Stack>
      </Stack>
    </Box>
  );
};
