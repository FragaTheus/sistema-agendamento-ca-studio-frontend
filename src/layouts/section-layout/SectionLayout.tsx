"use client";

import { Box } from "@mui/joy";

interface ISectionLayou{
    bgColor?: string;
    children: React.ReactNode;
}

export const SectionLayout: React.FC<ISectionLayou> =({bgColor, children})=>{
    return(
        <Box width={"100%"} height={"100svh"} 
        display={"flex"} alignItems={"center"} 
        justifyContent={"center"} 
        bgcolor={bgColor? bgColor: "background.surface"}>
            {children}
        </Box>
    );
}