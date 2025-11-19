import { IconButton, Stack, Typography } from "@mui/joy";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";

type PaginationProps = {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
};

export const AppPagination = ({
  page,
  totalPages,
  onChange,
}: PaginationProps) => {
  return (
    <Stack
      direction="row"
      spacing={1}
      justifyContent="center"
      alignItems="center"
      py={2}
    >
      <IconButton
        variant="outlined"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        <ArrowBack />
      </IconButton>

      {/* Número da página */}
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography level="body-sm">Página {page}</Typography>
        <Typography level="body-sm" sx={{ color: "text.tertiary" }}>
          de {totalPages}
        </Typography>
      </Stack>

      <IconButton
        variant="outlined"
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
      >
        <ArrowForward />
      </IconButton>
    </Stack>
  );
};
