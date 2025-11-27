"use client";

import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
} from "@mui/joy";
import { useForm, Controller } from "react-hook-form";

type FormInputsProps = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
};

type FormProps = {
  inputs: FormInputsProps[];
  btnText: string;
  onSubmit: (data: any) => void | Promise<void>; // ✔️ adicionado
};

export const AppForm = ({ inputs, btnText, onSubmit }: FormProps) => {
  if (!inputs || inputs.length === 0) {
    return null;
  }

  const defaultValues = inputs.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {} as Record<string, string>);

  const { control, handleSubmit } = useForm({
    defaultValues,
  });

  return (
    <Stack
      component={"form"}
      onSubmit={handleSubmit(onSubmit)} // ✔️ usando a função recebida
      width={"70%"}
      height={"auto"}
      spacing={"5px"}
      alignSelf={"center"}
      justifyContent={"space-between"}
    >
      <Box>
        {inputs.map((i) => (
          <Controller
            key={i.name}
            name={i.name}
            control={control}
            rules={{ required: "O campo e obrigatorio!" }}
            render={({ field: f, fieldState: fs }) => (
              <FormControl error={!!fs.error}>
                <FormLabel>{i.label}</FormLabel>
                <Input
                  size="sm"
                  type={i.type}
                  placeholder={i.placeholder}
                  {...f}
                />
                {fs.error && (
                  <FormHelperText>{fs.error.message}</FormHelperText>
                )}
              </FormControl>
            )}
          />
        ))}
      </Box>

      <Button variant="solid" type="submit">
        {btnText}
      </Button>
    </Stack>
  );
};
