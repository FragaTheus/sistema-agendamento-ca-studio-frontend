"use client";

import { useResContext } from "@/context/responsive-context/ResponsiveContext";
import { Box, Divider, IconButton, Link, Stack, Typography } from "@mui/joy";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Sections = [
  { label: "Sobre", target: "sobre" },
  { label: "Procedimentos", target: "procedimentos" },
  { label: "Antes e Depois", target: "antes-depois" },
  { label: "FAQ", target: "faq" },
];

export const Footer = () => {
  const { isMobile } = useResContext();
  return (
    <Box
      id="footer"
      bgcolor={"#ECEDE9"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"40svh"}
      padding={isMobile ? "" : "20px"}
      sx={{
        color: "#E2BC4D",
        borderTop: "1px solid",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
      }}
    >
      <Stack
        width={"100%"}
        height={"100%"}
        alignItems={"center"}
        justifyContent={"space-between"}
        direction={isMobile ? "column" : "row"}
        spacing={2}
      >
        <Stack alignItems={"center"} width={isMobile ? "100%" : "50%"}>
          {Sections.map((s) => (
            <Typography
              key={s.target}
              level="body-sm"
              sx={{
                color: "text.primary",
                cursor: "pointer",
                "&:hover": { color: "primary.100" },
              }}
              onClick={() =>
                document.getElementById(s.target)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            >
              {s.label}
            </Typography>
          ))}
        </Stack>
        <Divider orientation={isMobile ? "horizontal" : "vertical"} />
        <Stack
          alignItems={"center"}
          textAlign={isMobile ? "center" : "right"}
          width={isMobile ? "100%" : "50%"}
        >
          <Typography level="body-sm" sx={{ color: "text.primary" }}>
            Rua Doutor Ricardo Vilella, 391, Centro
          </Typography>
          <Typography level="body-sm" sx={{ color: "text.primary" }}>
            Mogi das Cruzes - SP, 08710-150, Brasil
          </Typography>
          <Typography level="body-sm" sx={{ color: "text.primary" }}>
            (11) 94043-6267
          </Typography>

          <Stack direction="row">
            <IconButton
              component={Link}
              href="https://instagram.com/studiocristianeaguiar"
              target="_blank"
              rel="noopener noreferrer"
              variant="plain"
              sx={{
                color: "primary.100",
                "&:hover": { color: "primary.300" },
              }}
            >
              <InstagramIcon sx={{ fontSize: "medium" }} />
            </IconButton>

            <IconButton
              component={Link}
              href="https://wa.me/5511940436267"
              target="_blank"
              rel="noopener noreferrer"
              variant="plain"
              sx={{
                color: "primary.100",
                "&:hover": { color: "primary.300" },
              }}
            >
              <WhatsAppIcon sx={{ fontSize: "medium" }} />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
