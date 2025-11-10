"use client";

import { Box, IconButton, Typography } from "@mui/joy";
import MenuIcon from "@mui/icons-material/Menu";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const Header = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const viewportHeigh = window.innerHeight;

    const handleScroll = () => {
      setScrolled(window.scrollY > viewportHeigh);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      component={"header"}
      zIndex={"1000"}
      id="header"
      position={"fixed"}
      width={"100%"}
      height={"10svh"}
      sx={{
        bgcolor: scrolled ? "background.surface" : "transparent",
        transition: "background-color 0.4s ease, box-shadow 0.4s ease",
        boxShadow: scrolled ? "0px 4px 10px rgba(0,0,0,0.25)" : "",
      }}
      justifyContent={"center"}
      display={"flex"}
    >
      <Box
        id="toolbar"
        width={"90%"}
        height={"100%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box id="logo" display={"flex"} alignItems={"center"}>
          <Typography
            level="h4"
            sx={scrolled ? { color: "primary.300" } : { color: "primary.100" }}
          >
            Cristiane Aguiar Studio
          </Typography>
        </Box>
        <Box
          id="contact-icon"
          display={"flex"}
          alignItems={"center"}
          gap={"5px"}
        >
          <IconButton
            onClick={() =>
              router.push("https://www.instagram.com/studiocristianeaguiar/")
            }
          >
            <InstagramIcon
              sx={scrolled ? { color: "primary.300" } : { color: "inherit" }}
            />
          </IconButton>
          <Box id="menu-icon" display={"flex"} alignItems={"center"}>
            <IconButton>
              <MenuIcon
                sx={scrolled ? { color: "primary.300" } : { color: "inherit" }}
              />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
