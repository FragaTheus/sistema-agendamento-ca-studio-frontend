"use client";
import { extendTheme } from "@mui/joy";

export const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                background: {
                    body: "#ffffff",
                    surface: "#f5f5f5ff"
                },
                text:{
                    primary: "#1c1c1cff",
                    secondary: "#bf3156"
                },
                primary: {
                    "100": "#ffffff",
                    "200": "#1c1c1cff",
                    "300": "#bf3156",
                    "400": "#d19396",
                    "500": "#2c2c2cff",
                    solidBg: "#bf3156",
                    solidHoverBg: "#ffffff",
                    solidHoverColor: "#bf3156",
                    solidActiveBg: "#bf3156",
                    solidActiveColor: "#ffffff",
                    solidBorder: "#bf3156",
                    plainColor: "#bf3156",
                    plainHoverBg: "rgba(191, 49, 86, 0.1)",
                    plainActiveBg: "rgba(191, 49, 86, 0.2)"
                }
            }
        }
    },
    components: {
        JoyInput: {
            styleOverrides: {
                root: {
                    '&:focus-within::before': {boxShadow: '0 0 0 1px rgba(255, 0, 127, 1)'},
                }
            }
        },
        JoyButton: {
            styleOverrides: {
                root: {
                    '&:focus-visible::before': { boxShadow: '0 0 0 2px rgba(255, 0, 127, 0.6)',},
                }
            }
        }
    }
});

