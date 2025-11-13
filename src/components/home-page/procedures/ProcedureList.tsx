"use client";

import { Button, Divider, List, ListItemDecorator, Typography } from "@mui/joy";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useResContext } from "@/context/responsive-context/ResponsiveContext";
import { color } from "framer-motion";

export const ProcedureList = () => {
  const { isMobile } = useResContext();
  return (
    <List>
      <Divider sx={isMobile ? { backgroundColor: "primary.400" } : {}} />
      <Button
        variant="plain"
        sx={
          isMobile
            ? {
                height: "12svh",
                borderRadius: "0px",
                justifyContent: "center",
              }
            : {
                height: "12svh",
                borderRadius: "0px",
                justifyContent: "space-between",
              }
        }
      >
        <Typography level="body-md" sx={{ color: "text.primary" }}>
          Pele
        </Typography>
        {!isMobile && (
          <ListItemDecorator>
            <ArrowForwardIosIcon />
          </ListItemDecorator>
        )}
      </Button>
      <Divider sx={isMobile ? { backgroundColor: "primary.400" } : {}} />
      <Button
        variant="plain"
        sx={
          isMobile
            ? {
                height: "12svh",
                borderRadius: "0px",
                justifyContent: "center",
              }
            : {
                height: "12svh",
                borderRadius: "0px",
                justifyContent: "space-between",
              }
        }
      >
        <Typography level="body-md" sx={{ color: "text.primary" }}>
          Lábio
        </Typography>
        {!isMobile && (
          <ListItemDecorator>
            <ArrowForwardIosIcon />
          </ListItemDecorator>
        )}
      </Button>
      <Divider sx={isMobile ? { backgroundColor: "primary.400" } : {}} />
      <Button
        variant="plain"
        sx={
          isMobile
            ? {
                height: "12svh",
                borderRadius: "0px",
                justifyContent: "center",
              }
            : {
                height: "12svh",
                borderRadius: "0px",
                justifyContent: "space-between",
              }
        }
      >
        <Typography level="body-md" sx={{ color: "text.primary" }}>
          Cílios
        </Typography>
        {!isMobile && (
          <ListItemDecorator>
            <ArrowForwardIosIcon />
          </ListItemDecorator>
        )}
      </Button>
      <Divider sx={isMobile ? { backgroundColor: "primary.400" } : {}} />
      <Button
        variant="plain"
        sx={
          isMobile
            ? {
                height: "12svh",
                borderRadius: "0px",
                justifyContent: "center",
              }
            : {
                height: "12svh",
                borderRadius: "0px",
                justifyContent: "space-between",
              }
        }
      >
        <Typography level="body-md" sx={{ color: "text.primary" }}>
          Sobrancelha
        </Typography>
        {!isMobile && (
          <ListItemDecorator>
            <ArrowForwardIosIcon />
          </ListItemDecorator>
        )}
      </Button>
      <Divider sx={isMobile ? { backgroundColor: "primary.400" } : {}} />
    </List>
  );
};
