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
};

export const AppForm = ({ inputs, btnText }: FormProps) => {
  if (!inputs || inputs.length === 0) {
    return null; // evita inputs undefined
  }

  const defaultValues = inputs.reduce((acc, field) => {
    acc[field.name] = ""; // nunca undefined
    return acc;
  }, {} as Record<string, string>);

  const { control, handleSubmit } = useForm({
    defaultValues,
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Stack
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
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
                ></Input>
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
