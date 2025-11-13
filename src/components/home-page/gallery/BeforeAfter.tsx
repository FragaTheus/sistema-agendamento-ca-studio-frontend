"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Box, Typography, useTheme } from "@mui/joy";

export default function BeforeAfterCarousel() {
  const images = [
    { imgPath: "/browelash.jpeg", label: "Brow Lamination e Lash Lifting" },
    { imgPath: "/browlamination.jpeg", label: "Brow Lamination" },
    { imgPath: "/designdesobrancelha.jpeg", label: "Design de sobrancelha" },
    { imgPath: "/lashlifting.jpeg", label: "Lash Lifting" },
    { imgPath: "/nanoblinding.jpeg", label: "Micropigmentacao de Sobrancelha" },
    { imgPath: "/spadoslabios.jpeg", label: "SPA dos labios" },
  ];

  const theme = useTheme();

  return (
    <Box width="100%" display="flex" flexDirection="column" alignItems="center">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500 }}
        loop
        style={
          {
            width: "90%",
            maxWidth: 500,
            paddingBottom: "25px",
            "--swiper-pagination-color":
              theme.colorSchemes.light.palette.primary[400],
            "--swiper-pagination-bullet-inactive-color":
              theme.colorSchemes.light.palette.primary[200],
          } as React.CSSProperties
        }
      >
        {images.map((i, index) => (
          <SwiperSlide key={index}>
            <Box
              textAlign="center"
              gap={"20px"}
              display={"flex"}
              flexDirection={"column"}
            >
              <img
                src={i.imgPath}
                style={{
                  width: "auto",
                  height: "auto",
                }}
              />
              <Typography level="body-md" sx={{ mt: 1 }}>
                {i.label}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
