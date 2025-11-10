"use client";

import { Box, Button, Card, CardContent, Divider, Typography } from "@mui/joy"
import loginContent from "@/content/login-page-content/loginContent.json"
import { LoginForm } from "../login-form/LoginForm";
import { useRouter } from "next/navigation";

export const LoginCard = () => {
    const router = useRouter();
   
    return(
        <Card variant="solid" sx={{width: "40%", height: "60svh", bgcolor: "background.surface"}}>
            <CardContent sx={{display: "flex", justifyContent:"center", alignItems:"center"}}>
                <Box id="card-content" flex={1} padding={"20px"} gap={"10px"} display={"flex"} flexDirection={"column"}>
                    <Box id="card-header" width={"100%"}>
                        <Typography level="h2" sx={{color: "primary.300"}}>{loginContent.card.cardTitle}</Typography>
                    </Box>
                    <Box id="card description">
                        <Typography level="h4">{loginContent.card.cardSubtitle}</Typography>
                    </Box>
                    <Divider/>
                    <Box id="login-form" width={"100%"} gap={"20px"}>
                        <LoginForm/>
                    </Box>
                    <Button variant="plain" onClick={()=>router.push("/auth/recovery")}>{loginContent.card.recoverPassword}</Button>
                    <Divider/>
                    <Box id="login-register" width={"100%"} display={"flex"} alignItems={"center"} gap={"5px"} flexDirection={"column"}>
                        <Typography>{loginContent.card.register.registerDescription}</Typography>
                        <Button variant="plain" onClick={()=>router.push("/auth/register")}>{loginContent.card.register.registerButton}</Button>
                    </Box>                    
                </Box>
        </CardContent>
    </Card>
    )
}