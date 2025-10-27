"use client";

import { List, ListDivider, ListItem, ListItemContent, ListItemDecorator, Typography } from "@mui/joy";

interface IListItemLayout{
    listTopic: string,
    listContent: string
}

const ListItemLayout: React.FC<IListItemLayout>=({listTopic, listContent})=>{
    return(
        <>
            <ListItem sx={{height: "10svh"}}>
                <ListItemContent>
                    <Typography level="h3" fontWeight={"100"} sx={{color: "text.primary"}}>
                        {listTopic}
                    </Typography>
                </ListItemContent>
                <ListItemDecorator>
                    <Typography level="h3" fontWeight={"100"}  sx={{color: "text.primary"}}>
                        {listContent}
                    </Typography>
                </ListItemDecorator>
            </ListItem>
         <ListDivider/>
         </>
    );
}

export const PerfilList=()=>{
    
    return(
        <List  sx={{width: "90%"}}>
           <ListItemLayout listTopic="Nome:" listContent="Matheus Augusto Fraga Correa"/>
           <ListItemLayout listTopic="Email:" listContent="matheusfraga@meuemail.com"/>
           <ListItemLayout listTopic="Senha:" listContent="**********"/>
        </List>
    );
}