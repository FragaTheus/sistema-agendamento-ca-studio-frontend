"use client";

import {
  Card,
  Stack,
  Typography,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Select,
  Option,
} from "@mui/joy";

export default function ProcedureCreatePage() {
  return (
    <Stack alignItems="center" mt={4}>
      <Card sx={{ width: "80%", p: 4 }}>
        <Typography level="h4" textColor="text.primary" mb={2}>
          Criar Procedimento
        </Typography>

        <Stack spacing={2}>
          <FormControl>
            <FormLabel>Nome do Procedimento</FormLabel>
            <Input placeholder="Ex: Corte Feminino" />
          </FormControl>

          <FormControl>
            <FormLabel>Categoria</FormLabel>
            <Select placeholder="Selecione...">
              <Option value="cabelo">Cabelo</Option>
              <Option value="unhas">Unhas</Option>
              <Option value="pele">Pele</Option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Preço</FormLabel>
            <Input type="number" placeholder="Ex: 79,90" />
          </FormControl>

          <FormControl>
            <FormLabel>Duração (minutos)</FormLabel>
            <Input type="number" placeholder="Ex: 45" />
          </FormControl>

          <FormControl>
            <FormLabel>Descrição</FormLabel>
            <Textarea minRows={4} placeholder="Descreva o serviço..." />
          </FormControl>

          <Stack direction="row" spacing={2} mt={2}>
            <Button color="primary" variant="solid">
              Salvar
            </Button>
            <Button color="neutral" variant="outlined">
              Cancelar
            </Button>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
}
