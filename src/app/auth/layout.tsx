"use client";

import { SectionLayout } from "@/layouts/section-layout/SectionLayout";
import { Box, Divider, Typography } from "@mui/joy";
import React from "react";
import loginContent from "@/content/login-page-content/loginContent.json";
import { useResContext } from "@/context/responsive-context/ResponsiveContext";

interface IAuthPage {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: IAuthPage) {
  const { isTablet } = useResContext();
  return (
    <main>
      <SectionLayout id="auth" bgColor="background.body">
        <Box width={"100%"} height={"100svh"} display={"flex"}>
          {!isTablet && (
            <Box
              flex={1}
              bgcolor={"primary.300"}
              display={"flex"}
              alignItems={"flex-start"}
              justifyContent={"center"}
              padding={"30px"}
              flexDirection={"column"}
            >
              <Typography level="h1" sx={{ color: "primary.100" }}>
                {loginContent.loginPageLogo}
              </Typography>
              <Divider sx={{ bgcolor: "primary.100" }} />
              <Typography level="h2" sx={{ color: "primary.100" }}>
                {loginContent.loginPageText}
              </Typography>
            </Box>
          )}

          <Box
            width={isTablet ? "100%" : "70%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {children}
          </Box>
        </Box>
      </SectionLayout>
    </main>
  );
}
