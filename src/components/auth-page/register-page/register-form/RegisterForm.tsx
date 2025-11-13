"use client";

import registerCotent from "@/content/register-page/registerContent.json";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@mui/joy";
import { Controller, useForm } from "react-hook-form";

interface IFormValues {
  email: string;
  password: string;
  confirmPassword: string;
  adminKey: string;
}

export const RegisterForm = () => {
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormValues>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      adminKey: "",
    },
    mode: "onChange",
  });

  const passwordValue = watch("password");

  const onSubmit = (data: IFormValues) => {
    console.log("Dados enviados: ", data);
  };

  const adminCurrentKey = "Teste@0123";

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
      flex={1}
      display={"flex"}
      flexDirection={"column"}
      gap={"5px"}
    >
      <Controller
        name="email"
        control={control}
        rules={{
          required: registerCotent.card.form.email.required,
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: registerCotent.card.form.email.error,
          },
        }}
        render={({ field }) => (
          <FormControl error={!!errors.email}>
            <FormLabel>{registerCotent.card.form.email.label}</FormLabel>
            <Input
              variant="outlined"
              placeholder={registerCotent.card.form.email.placeholder}
              {...field}
              value={field.value}
            />
            {errors.email && (
              <FormHelperText>{errors.email.message}</FormHelperText>
            )}
          </FormControl>
        )}
      />

      <Controller
        name="password"
        control={control}
        rules={{
          required: registerCotent.card.form.password.required,
          pattern: {
            value:
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/,
            message: registerCotent.card.form.password.error,
          },
        }}
        render={({ field }) => (
          <FormControl error={!!errors.password}>
            <FormLabel>{registerCotent.card.form.password.label}</FormLabel>
            <Input
              variant="outlined"
              type="password"
              placeholder={registerCotent.card.form.password.placeholder}
              {...field}
              value={field.value}
            />
            {errors.password && (
              <FormHelperText>{errors.password.message}</FormHelperText>
            )}
          </FormControl>
        )}
      />
      <Controller
        name="confirmPassword"
        control={control}
        rules={{
          required: registerCotent.card.form.confirmPassword.required,
          validate: (value) =>
            value === passwordValue || "As senhas nao conincidem",
        }}
        render={({ field }) => (
          <FormControl error={!!errors.confirmPassword}>
            <FormLabel>
              {registerCotent.card.form.confirmPassword.label}
            </FormLabel>
            <Input
              variant="outlined"
              type="password"
              placeholder={registerCotent.card.form.confirmPassword.placeholder}
              {...field}
              value={field.value}
            />
            {errors.confirmPassword && (
              <FormHelperText>{errors.confirmPassword.message}</FormHelperText>
            )}
          </FormControl>
        )}
      />

      <Controller
        name="adminKey"
        control={control}
        rules={{
          required: registerCotent.card.form.adminKey.required,
          validate: (value) =>
            value === adminCurrentKey ||
            registerCotent.card.form.adminKey.error,
        }}
        render={({ field }) => (
          <FormControl error={!!errors.adminKey}>
            <FormLabel>{registerCotent.card.form.adminKey.label}</FormLabel>
            <Input
              variant="outlined"
              type="password"
              placeholder={registerCotent.card.form.adminKey.placeholder}
              {...field}
              value={field.value}
            />
            {errors.adminKey && (
              <FormHelperText>{errors.adminKey.message}</FormHelperText>
            )}
          </FormControl>
        )}
      />

      <Button type="submit" variant="solid" disabled={!isValid}>
        {registerCotent.card.form.button}
      </Button>
    </Box>
  );
};
