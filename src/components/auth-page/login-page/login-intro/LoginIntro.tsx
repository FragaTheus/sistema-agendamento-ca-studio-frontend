"use client";

import { Box, Typography } from "@mui/joy";
import loginContent from "@/content/login-page-content/loginContent.json"

export const LoginIntro =()=>{
    return(
        <Box height={"100svh"} bgcolor={"primary.300"} display={"flex"} alignItems={"center"} justifyContent={"center"} padding={"20px"} flexDirection={"column"}>
                
                <Typography>{loginContent.loginPageTitle}</Typography>
                <Typography level="h2" sx={{color: "#ffffff"}}>
                    {loginContent.loginPageText}
                </Typography>
        </Box>
    );
}