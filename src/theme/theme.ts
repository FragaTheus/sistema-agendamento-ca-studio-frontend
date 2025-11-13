"use client";
import { extendTheme } from "@mui/joy";

export const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                background: {
                    body: "#E5E7EB",
                    surface: "#ffffff"
                },
                text:{
                    primary: "#424242",
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
                    plainActiveBg: "rgba(191, 49, 86, 0.2)",
                    outlinedBg: "transparent",
                    outlinedBorder: "#ffffff",
                    outlinedColor: "#ffffff",
                    outlinedHoverBg: "#ffffff",
                    outlinedHoverColor: "#bf3156",
                    softBg: "#ffffff",
                    softColor: "#bf3156",
                    softHoverBg: "#E5E7EB",
                    softActiveBg: "#D1D5DB",
                    softActiveColor: "#bf3156"
                    
                    
                }
            }
        }
        
    },
    fontFamily: {
        display: "var(--font-blackgold), var(--joy-fontFamily-fallback)",
        body: "var(--font-poppins-thin), var(--joy-fontFamily-fallback)"
    },
    typography:{
        h1: {
      fontSize: "clamp(2rem, 5vw + 1rem, 3.5rem)", // 32 → 56px
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "clamp(1.75rem, 4vw + 0.5rem, 2.75rem)", // 28 → 44px
      fontWeight: 600,
      lineHeight: 1.25,
    },
    h3: {
      fontSize: "clamp(1.5rem, 3vw + 0.25rem, 2.25rem)", // 24 → 36px
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: "clamp(1.25rem, 2vw + 0.25rem, 1.75rem)", // 20 → 28px
      fontWeight: 500,
      lineHeight: 1.35,
    },

    "title-lg": {
      fontSize: "clamp(1.25rem, 2.5vw + 0.25rem, 1.75rem)", // 20 → 28px
      fontWeight: 600,
      lineHeight: 1.35,
    },
    "title-md": {
      fontSize: "clamp(1.125rem, 2vw, 1.5rem)", // 18 → 24px
      fontWeight: 600,
      lineHeight: 1.4,
    },
    "title-sm": {
      fontSize: "clamp(1rem, 1.5vw, 1.25rem)", // 16 → 20px
      fontWeight: 500,
      lineHeight: 1.4,
    },

    "body-lg": {
      fontSize: "clamp(1rem, 1vw + 0.25rem, 1.125rem)", // 16 → 18px
      fontWeight: 400,
      lineHeight: 1.6,
    },
    "body-md": {
      fontSize: "clamp(0.9375rem, 0.75vw + 0.25rem, 1.1rem)", // 15 → 16px
      fontWeight: 400,
      lineHeight: 1.6,
    },
    "body-sm": {
      fontSize: "clamp(0.875rem, 0.75vw, 0.9375rem)", // 14 → 15px
      fontWeight: 400,
      lineHeight: 1.5,
    },
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
        },
        JoyIconButton: {
            styleOverrides: {
                root: {
                    color: "#ffffff",
                    backgroundColor: "inheri",'&:hover':{
                        backgroundColor: "primary.solidHoverBg",
                        color: "#bf3156",
                    }
                }
            }
        },
       
    }
});

