"use client";

import { useResContext } from "@/context/responsive-context/ResponsiveContext";
import {
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/joy";
import { useRouter } from "next/navigation";

type NavigateProps = {
  labelBtn: string;
  btnText: string;
  btnPathUrl: string;
};

type AuthCardProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  navigateProps: NavigateProps[];
};

export const AuthCard = ({
  title,
  subtitle,
  children,
  navigateProps,
}: AuthCardProps) => {
  const { isMobile } = useResContext();
  const route = useRouter();
  const navigate = (path: string) => {
    route.push(path);
  };
  return (
    <Card
      variant="soft"
      sx={
        isMobile
          ? {
              width: "85%",
              minHeight: "60svh",
              bgcolor: "background.surface",
              flexDirection: "column",
            }
          : {
              width: "40%",
              minHeight: "60svh",
              bgcolor: "background.surface",
              flexDirection: "column",
            }
      }
    >
      <Stack
        direction={"column"}
        width={"100%"}
        minHeight={"10%"}
        alignItems={"flex-start"}
        justifyContent={"center"}
        padding={"10px"}
      >
        <Typography level="title-md" sx={{ color: "text.secondary" }}>
          {title}
        </Typography>
        <Typography level="body-sm" sx={{ color: "text.primary" }}>
          {subtitle}
        </Typography>
      </Stack>
      <Divider />
      <CardContent>{children}</CardContent>
      <Divider />
      <Stack
        alignItems={"center"}
        justifyContent={"space-evenly"}
        direction={"row"}
        padding={"5px"}
      >
        {navigateProps.map((n) => (
          <Stack key={n.btnText} direction={"column"} alignItems={"center"}>
            <Typography
              level="body-xs"
              textAlign={"center"}
              sx={{ color: "text.primary" }}
            >
              {n.labelBtn}
            </Typography>
            <Button variant="plain" onClick={() => navigate(n.btnPathUrl)}>
              <Typography level="body-xs" sx={{ color: "inherit" }}>
                {n.btnText}
              </Typography>
            </Button>
          </Stack>
        ))}
      </Stack>
    </Card>
  );
};
