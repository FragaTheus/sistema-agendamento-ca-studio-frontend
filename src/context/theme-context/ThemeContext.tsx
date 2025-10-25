"use client";

import { theme } from "@/theme/theme";
import { Box, ThemeProvider } from "@mui/joy";
import { Header } from "@/components/main/header/Header";
import { Footer } from "@/components/main/footer/Footer";
import { usePathname } from "next/navigation";

interface IThemeProviderProps{
    children: React.ReactNode;
}

export const ThemeContextProvider: React.FC<IThemeProviderProps> = ({children}) =>{
    const pathName = usePathname();
    const hideMainComponents = pathName.startsWith("/auth");
    return(
        <ThemeProvider theme={theme}>
            <Box>
                {!hideMainComponents && <Header/>}
                {children}
                {!hideMainComponents && <Footer/>}
            </Box>
        </ThemeProvider>
    );
}

