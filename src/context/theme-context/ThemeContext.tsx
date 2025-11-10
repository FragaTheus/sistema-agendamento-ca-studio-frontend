"use client";

import { theme } from "@/theme/theme";
import { Box, ThemeProvider } from "@mui/joy";

interface IThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeContextProvider: React.FC<IThemeProviderProps> = ({
  children,
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
