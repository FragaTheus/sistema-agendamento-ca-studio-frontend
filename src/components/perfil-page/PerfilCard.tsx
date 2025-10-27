"use client";

import { Box, Card, CardActions, CardContent, Divider, Typography } from "@mui/joy";

interface IPerfilCard{
    children: React.ReactNode;
}

export const PerfilCard: React.FC<IPerfilCard>=({children})=>{
    return(
        <Card 
        variant="soft"
        sx=
        {{
            backgroundColor: "background.surface", 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            justifyContent: "center",
            width: "60%",
            minHeight: "70svh"
        }}>
            <CardActions sx={{width: "90%",}}>
                <Typography level="h1" sx={{color: "primary.300"}}>Perfil</Typography>
            </CardActions>
            <Divider/>
            <CardContent sx={{width: "100%", alignItems: "center", justifyContent: "center"}}>
                {children}
            </CardContent>
            <Divider/>
            <Box id="card-footer" width={"100%"} height={"10svh"}></Box>
        </Card>
    );
}