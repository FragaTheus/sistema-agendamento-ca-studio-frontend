"use client";

import { Button, Divider, List, ListItemDecorator, Typography } from "@mui/joy";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const ProcedureList = () => {
  return (
    <List>
      <Button
        variant="plain"
        sx={{
          height: "12svh",
          borderRadius: "0px",
          justifyContent: "space-between",
        }}
      >
        <Typography level="h4" sx={{ color: "text.primary" }}>
          Pele
        </Typography>
        <ListItemDecorator>
          <ArrowForwardIosIcon />
        </ListItemDecorator>
      </Button>
      <Divider />
      <Button
        variant="plain"
        sx={{
          height: "12svh",
          borderRadius: "0px",
          justifyContent: "space-between",
        }}
      >
        <Typography level="h4" sx={{ color: "text.primary" }}>
          Lábio
        </Typography>
        <ListItemDecorator>
          <ArrowForwardIosIcon />
        </ListItemDecorator>
      </Button>
      <Divider />
      <Button
        variant="plain"
        sx={{
          height: "12svh",
          borderRadius: "0px",
          justifyContent: "space-between",
        }}
      >
        <Typography level="h4" sx={{ color: "text.primary" }}>
          Cílios
        </Typography>
        <ListItemDecorator>
          <ArrowForwardIosIcon />
        </ListItemDecorator>
      </Button>
      <Divider />
      <Button
        variant="plain"
        sx={{
          height: "12svh",
          borderRadius: "0px",
          justifyContent: "space-between",
        }}
      >
        <Typography level="h4" sx={{ color: "text.primary" }}>
          Sobrancelha
        </Typography>
        <ListItemDecorator>
          <ArrowForwardIosIcon />
        </ListItemDecorator>
      </Button>
      <Divider />
    </List>
  );
};
