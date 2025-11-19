"use client";

import { useDrawerContext } from "@/context/drawer-context/DrawerContext";
import { useResContext } from "@/context/responsive-context/ResponsiveContext";
import { KeyboardArrowRight } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemContent,
  Stack,
  Typography,
} from "@mui/joy";
import Drawer from "@mui/joy/Drawer";

const Sections = [
  { id: 1, label: "Hero", target: "hero" },
  { id: 2, label: "Sobre", target: "sobre" },
  { id: 3, label: "Procedimentos", target: "procedimentos" },
  { id: 4, label: "Antes e depois", target: "galeria" },
  { id: 5, label: "FAQ", target: "FAQ" },
];

export const AppDrawer = () => {
  const { open, toogleDrawer } = useDrawerContext();
  const { isMobile } = useResContext();

  return (
    <Drawer
      variant="plain"
      open={open}
      anchor={isMobile ? "bottom" : "right"}
      size={isMobile ? "lg" : "sm"}
      onClose={() => toogleDrawer()}
      sx={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack
        width={isMobile ? "95%" : "90%"}
        height={"5svh"}
        alignItems={"center"}
        justifyContent={"space-between"}
        padding={isMobile ? "5px" : "20px"}
        direction={"row"}
      >
        <Typography level="title-md" sx={{ color: "text.secondary" }}>
          Menu de navegação
        </Typography>
        <IconButton onClick={() => toogleDrawer()}>
          <CloseIcon />
        </IconButton>
      </Stack>
      <Divider />

      <Stack flex={1} bgcolor={"background.body"}>
        <List sx={{ alingItems: "center" }}>
          {Sections.map((s) => (
            <Box key={s.id}>
              <ListItemButton
                sx={isMobile ? { height: "5svh" } : { height: "10svh" }}
                onClick={() => {
                  document.getElementById(s.target)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                <ListItemContent>
                  <Typography level="body-md">{s.label}</Typography>
                </ListItemContent>
                <KeyboardArrowRight sx={{ color: "primary.300" }} />
              </ListItemButton>
              <Divider />
            </Box>
          ))}
        </List>
      </Stack>
      <Divider />
      <Stack
        alignSelf={"flex-end"}
        width={"100%"}
        height={"10svh"}
        alignItems={"center"}
        justifyContent={"center"}
        bgcolor={"primary.200"}
      >
        <Stack></Stack>
        <Typography level="body-xs" sx={{ color: "primary.100" }}>
          Version: MVP-1.0
        </Typography>
      </Stack>
    </Drawer>
  );
};
