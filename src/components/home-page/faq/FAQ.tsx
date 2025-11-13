"use client";

import { useResContext } from "@/context/responsive-context/ResponsiveContext";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, Card, IconButton, Sheet, Stack, Typography } from "@mui/joy";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { useState } from "react";

const FAQContent = [
  {
    id: 1,
    question: "Onde fica o Studio?",
    answer:
      "Rua Doutor Ricardo Vilela, 391 - Sala 1 - Centro, Mogi das Cruzes - SP.",
  },
  {
    id: 2,
    question: "É obrigatório fazer o retoque?",
    answer:
      "Não, mas é recomendado para reforçar a cor e garantir melhor fixação.",
  },
  {
    id: 3,
    question: "Qual a durabilidade da micropigmentação (Nanoblading)?",
    answer: "De 8 a 18 meses, variando conforme o tipo de pele e os cuidados.",
  },

  {
    id: 4,
    question: "Qual a durabilidade do Brow Lamination e do Lash Lifting?",
    answer: "De 6 a 8 semanas, dependendo dos cuidados e crescimento dos fios.",
  },
];

export const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const { isTablet } = useResContext();

  return (
    <Stack
      width={isTablet ? "90%" : "60%"}
      height={"50svh"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      spacing={2}
    >
      <Box>
        <Typography level="title-lg" sx={{ color: "primary.100" }}>
          Duvidas Frequentes
        </Typography>
      </Box>
      {FAQContent.map((c) => (
        <Sheet
          key={c.id}
          variant="outlined"
          sx={{
            width: "60%",
            alignSelf: "center",
            borderRadius: "sm",
            padding: "20px",
            bgcolor: "background.surface",
          }}
        >
          <Stack
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{ cursor: "pointer" }}
            onClick={() => handleToggle(c.id)}
            direction={"row"}
          >
            <Typography level="body-md">{c.question}</Typography>
            <IconButton
              variant="plain"
              sx={{
                transform: openId === c.id ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            >
              <KeyboardArrowDown />
            </IconButton>
          </Stack>
          <AnimatePresence initial={false}>
            {openId === c.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: easeInOut }}
              >
                <Typography level="body-md" sx={{ color: "primary.300" }}>
                  {c.answer}
                </Typography>
              </motion.div>
            )}
          </AnimatePresence>
        </Sheet>
      ))}
    </Stack>
  );
};
