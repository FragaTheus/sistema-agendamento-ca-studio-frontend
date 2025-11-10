"use client";

import { Box, Button, Card, CardContent, Divider, Typography } from "@mui/joy";
import { useRouter } from "next/navigation";
import recoveryContent from "@/content/recovery-page-content/recoveryContent.json"
import { RecoveryForm } from "../recovery-form/RecoveryForm";

export const RecoveryCard =()=>{
    const router = useRouter();
    return(
        <Card variant="solid" sx={{width: "40%", minHeight: "60svh", bgcolor: "background.surface"}}>
            <CardContent sx={{display: "flex", justifyContent:"center", alignItems:"center"}}>
                <Box id="card-content" flex={1} padding={"20px"} gap={"10px"} display={"flex"} flexDirection={"column"}>
                    <Box id="card-header" width={"100%"}>
                        <Typography level="h2" sx={{color: "primary.300"}}>{recoveryContent.card.title}</Typography>
                    </Box>
                    <Box id="card description">
                        <Typography level="h4">{recoveryContent.card.subtitle}</Typography>
                    </Box>
                    <Divider/>
                    <Box id="login-form" width={"100%"} gap={"20px"}>
                    <RecoveryForm/>
                    </Box>
                    <Divider/>
                    <Box id="login-register" width={"100%"} display={"flex"} alignItems={"center"} gap={"5px"} flexDirection={"column"}>
                        <Typography>{recoveryContent.card.singinHeader}</Typography>
                        <Button variant="plain" onClick={()=>router.push("/auth/register")}>{recoveryContent.card.singin}</Button>
                        <Button variant="plain" onClick={()=>router.push("/auth/login")}>{recoveryContent.card.login}</Button>
                    </Box>                    
                </Box>
            </CardContent>
        </Card>
    );   
}