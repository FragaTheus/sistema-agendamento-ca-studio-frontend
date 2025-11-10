"use client";

import { Box, Stack } from "@mui/joy";

interface ISectionLayout {
  bgColor?: string;
  children: React.ReactNode;
}

export const SectionLayout: React.FC<ISectionLayout> = ({
  bgColor,
  children,
}) => {
  return (
    <Stack
      width={"100%"}
      minHeight={"100svh"}
      alignItems={"center"}
      justifyContent={"center"}
      bgcolor={bgColor ? bgColor : "background.surface"}
      spacing={10}
    >
      {children}
    </Stack>
  );
};
