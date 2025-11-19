"use client";

import { Card, Stack, Typography, Chip, Button, Divider } from "@mui/joy";

export default function ProcedureDetailsPage() {
  return (
    <Stack alignItems="center" mt={4}>
      <Card sx={{ width: "80%", p: 4 }}>
        <Typography level="h4" mb={1}>
          LashLifting
        </Typography>

        <Typography level="body-md" textColor="text.secondary">
          Categoria: <Chip color="neutral">Cabelo</Chip>
        </Typography>

        <Typography level="h4" mt={2}>
          R$ 79,90
        </Typography>

        <Typography level="body-sm" textColor="text.secondary">
          Duração: 45 minutos
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography level="title-md">Descrição</Typography>
        <Typography level="body-sm" mt={1}>
          Procedimento de elevação natural dos cílios, dando mais curvatura,
          definição e destaque ao olhar, sem necessidade de extensões. O
          tratamento inclui limpeza, preparação dos fios, aplicação da solução
          de lifting e finalização nutritiva para garantir cílios mais saudáveis
          e com efeito prolongado.
        </Typography>

        <Stack direction="row" spacing={2} mt={4}>
          <Button color="primary">Editar</Button>
          <Button color="danger" variant="soft">
            Excluir
          </Button>
        </Stack>
      </Card>
    </Stack>
  );
}
