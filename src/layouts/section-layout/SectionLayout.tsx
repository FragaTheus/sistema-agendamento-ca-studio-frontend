"use client";

import { Box, Stack } from "@mui/joy";
import { useEffect, useState } from "react";

interface ISectionLayout {
  bgColor?: string;
  id: string;
  children: React.ReactNode;
}

export const SectionLayout: React.FC<ISectionLayout> = ({
  id,
  bgColor,
  children,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <Stack
      id={id}
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
