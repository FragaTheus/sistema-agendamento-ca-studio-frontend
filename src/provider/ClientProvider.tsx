"use client";

import { DrawerContextProvider } from "@/context/drawer-context/DrawerContext";
import { ResponsiveProvider } from "@/context/responsive-context/ResponsiveContext";
import { ThemeContextProvider } from "@/context/theme-context/ThemeContext";

interface IClientProvider {
  children: React.ReactNode;
}

export const ClientProvider: React.FC<IClientProvider> = ({ children }) => {
  return (
    <ResponsiveProvider>
      <DrawerContextProvider>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </DrawerContextProvider>
    </ResponsiveProvider>
  );
};
