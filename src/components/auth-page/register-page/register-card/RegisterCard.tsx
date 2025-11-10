"use client";

import registerContent from "@/content/register-page/registerContent.json"
import { Box, Button, Card, CardContent, Divider, Typography } from "@mui/joy";
import { RegisterForm } from "../register-form/RegisterForm";
import { useRouter } from "next/navigation";

export const RegisterCard=()=>{
    const router = useRouter();
     return(
        <Card variant="solid" sx={{width: "40%", minHeight: "60svh", bgcolor: "background.surface"}}>
            <CardContent sx={{display: "flex", justifyContent:"center", alignItems:"center"}}>
                <Box id="card-content" flex={1} padding={"20px"} gap={"10px"} display={"flex"} flexDirection={"column"}>
                    <Box id="card-header" width={"100%"}>
                        <Typography level="h2" sx={{color: "primary.300"}}>{registerContent.card.cardTitle}</Typography>
                    </Box>
                    <Box id="card description">
                        <Typography level="h4">{registerContent.card.cardSubtitle}</Typography>
                    </Box>
                    <Divider/>
                    <Box id="login-form" width={"100%"} gap={"20px"}>
                        <RegisterForm/>
                    </Box>
                    <Divider/>
                    <Box id="login-register" width={"100%"} display={"flex"} alignItems={"center"} gap={"5px"} flexDirection={"column"}>
                        <Typography>{registerContent.card.register.registerDescription}</Typography>
                        <Button variant="plain" onClick={()=> router.push("/auth/login")}>{registerContent.card.register.registerButton}</Button>
                        <Button variant="plain" onClick={()=>router.push("/auth/recovery")}>{registerContent.card.recoverPassword}</Button>
                    </Box>                    
                </Box>
        </CardContent>
    </Card>
    )
}
