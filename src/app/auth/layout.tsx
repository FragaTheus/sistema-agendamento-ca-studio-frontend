import { SectionLayout } from "@/layouts/section-layout/SectionLayout";
import { Box, Divider, Typography } from "@mui/joy";
import React from "react";
import loginContent from "@/content/login-page-content/loginContent.json"

interface IAuthPage{
    children: React.ReactNode;
}

export default function AuthLayout({children} : IAuthPage){
    return(
        <main>
           <SectionLayout bgColor="background.body">
        <Box width={"100%"} height={"100svh"} display={"flex"}>
            <Box flex={1} bgcolor={"primary.300"} display={"flex"} alignItems={"flex-start"} justifyContent={"center"} padding={"30px"} flexDirection={"column"}>
                <Typography level="h1" sx={{color: "primary.100"}}>{loginContent.loginPageLogo}</Typography>
                <Divider sx={{bgcolor: "primary.100"}}/>
                <Typography level="h2" sx={{color: "primary.100"}}>{loginContent.loginPageText}</Typography>
            </Box>
            <Box width={"70%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                {children}
            </Box>
        </Box>
     </SectionLayout>
        </main>
    );
}