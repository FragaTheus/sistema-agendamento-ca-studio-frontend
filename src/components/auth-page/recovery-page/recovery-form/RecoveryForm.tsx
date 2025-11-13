"use client";

import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@mui/joy";
import recoveryContent from "@/content/recovery-page-content/recoveryContent.json";
import { Controller, useForm } from "react-hook-form";

interface IFormValues {
  email: string;
  verificationCode: string;
  password: string;
  confirmPassword: string;
}

export const RecoveryForm = () => {
  const {
    control,
    watch,
    formState: { errors, isValid },
  } = useForm<IFormValues>({
    defaultValues: {
      email: "",
      verificationCode: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  const currentCode = "123456";

  const passwordValue = watch("password");

  return (
    <Box
      component={"form"}
      flex={1}
      display={"flex"}
      flexDirection={"column"}
      gap={"5px"}
    >
      <Controller
        name="email"
        control={control}
        rules={{
          required: recoveryContent.email.required,
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: recoveryContent.email.format,
          },
        }}
        render={({ field }) => (
          <FormControl error={!!errors.email}>
            <FormLabel>{recoveryContent.email.label}</FormLabel>
            <Input
              variant="outlined"
              type="email"
              placeholder={recoveryContent.email.placeholder}
              {...field}
              value={field.value}
            ></Input>
            {errors.email && (
              <FormHelperText>{errors.email.message}</FormHelperText>
            )}
          </FormControl>
        )}
      />

      <Controller
        name="verificationCode"
        control={control}
        rules={{
          required: recoveryContent.verificationCode.required,
          validate: (verificationCode) =>
            verificationCode === currentCode.toString(),
          pattern: {
            value: /^\d+$/,
            message: recoveryContent.verificationCode.format,
          },
        }}
        render={({ field }) => (
          <FormControl error={!!errors.verificationCode}>
            <FormLabel>{recoveryContent.verificationCode.label}</FormLabel>
            <Input
              type={"number"}
              variant="outlined"
              placeholder={recoveryContent.verificationCode.placeholder}
              {...field}
              value={field.value}
            ></Input>
            {errors.verificationCode && (
              <FormHelperText>{errors.verificationCode.message}</FormHelperText>
            )}
          </FormControl>
        )}
      />

      <Controller
        name="password"
        control={control}
        rules={{
          required: recoveryContent.password.required,
          pattern: {
            value:
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/,
            message: recoveryContent.password.format,
          },
        }}
        render={({ field }) => (
          <FormControl error={!!errors.password}>
            <FormLabel>{recoveryContent.password.label}</FormLabel>
            <Input
              variant="outlined"
              type="password"
              placeholder={recoveryContent.password.placeholder}
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
          required: recoveryContent.confirmPassword.required,
          validate: (value) =>
            value === passwordValue || recoveryContent.confirmPassword.format,
        }}
        render={({ field }) => (
          <FormControl error={!!errors.confirmPassword}>
            <FormLabel>{recoveryContent.confirmPassword.label}</FormLabel>
            <Input
              variant="outlined"
              type="password"
              placeholder={recoveryContent.confirmPassword.placeholder}
              {...field}
              value={field.value}
            />
            {errors.confirmPassword && (
              <FormHelperText>{errors.confirmPassword.message}</FormHelperText>
            )}
          </FormControl>
        )}
      />

      <Button type="submit" disabled={!isValid}>
        Recuperar senha
      </Button>
    </Box>
  );
};
