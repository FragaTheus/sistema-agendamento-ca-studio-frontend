"use client";

import { Input, Option, Select, Stack } from "@mui/joy";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

export const ProcedureToolbar = () => {
  return (
    <Stack
      id="toolbar"
      direction={{ xs: "column", sm: "row" }}
      spacing={2}
      width="100%"
      alignItems="center"
      justifyContent="space-between"
    >
      <Input
        startDecorator={<SearchIcon />}
        placeholder="Pesquisar procedimentos..."
        sx={{ width: { xs: "100%", sm: "40%" } }}
      />

      <Stack direction="row" spacing={1}>
        <Select
          placeholder="Categoria"
          sx={{ minWidth: 160 }}
          startDecorator={<FilterAltIcon />}
        >
          <Option value="hair">Cabelo</Option>
          <Option value="brows">Sobrancelhas</Option>
          <Option value="makeup">Maquiagem</Option>
          <Option value="others">Outros</Option>
        </Select>
      </Stack>
    </Stack>
  );
};
