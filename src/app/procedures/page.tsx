"use client";

import { AppList } from "@/components/list/AppList";
import { AppPagination } from "@/components/procedure-pagination/AppPagination";
import { ProcedureToolbar } from "@/components/procedure-toolbar/ProceduresToolbar";
import { SectionLayout } from "@/layouts/section-layout/SectionLayout";
import { Card, Divider, Stack, Typography } from "@mui/joy";

export default function ProceduresPage() {
  return (
    <>
      <SectionLayout id="procedures" bgColor="background.body">
        <Card variant="plain" sx={{ width: "80%", height: "90svh" }}>
          <Stack
            width={"100%"}
            height={"10%"}
            alignItems={"flex-start"}
            justifyContent={"center"}
          >
            <Typography level="title-lg" sx={{ color: "text.secondary" }}>
              Cuidados para Você
            </Typography>
            <Typography level="body-md">
              Conheça cada serviço e encontre o que mais combina com seu estilo.
            </Typography>
          </Stack>
          <Divider />
          <ProcedureToolbar />
          <Divider />
          <AppList />
          <Divider />
          <AppPagination page={1} totalPages={1} key={1} onChange={() => {}} />
        </Card>
      </SectionLayout>
    </>
  );
}
