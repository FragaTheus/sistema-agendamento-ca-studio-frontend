"use client";

import { Box, Button, FormControl, FormHelperText, FormLabel, Input } from "@mui/joy";
import recoveryContent from "@/content/recovery-page-content/recoveryContent.json"
import { useState } from "react";
import { Controller, useForm, } from "react-hook-form";

interface IFormValues{
    email: string,
    verificationCode: string,
    password: string,
    confirmPassword: string
}

export const RecoveryForm=()=>{

    const {
        control,
        watch,
        handleSubmit,
        reset,
        formState: {errors, isValid},
    } = useForm<IFormValues>({defaultValues: {email: "", verificationCode: "", password: "", confirmPassword: ""}, mode: "onChange"})

    const [step, setStep] = useState<"email" | "verificationCode" | "password">("email");
    
    const onSubmit = (data: IFormValues)=>{
     if(step === "email"){
        console.log("email enviado com sucesso", data.email);
        setStep("verificationCode");
     }else if(step === "verificationCode"){
        console.log("Codigo de verificacao enviado");
        setStep("password")
     }else if(step === "password"){
        console.log("Senha alterada com sucesso!")
        setStep("email");
        reset();
     }
    }

    const currentCode = "123456";

    const passwordValue = watch("password");
    
    return(
        <Box component={"form"} onSubmit={handleSubmit(onSubmit)} flex={1} display={"flex"} flexDirection={"column"} gap={"5px"}>

            {step === "email" && (
                <Controller
            name="email"
            control={control}
            rules={{
                required: recoveryContent.email.required,
                pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: recoveryContent.email.format
                }
            }}
            render={({field})=>(
                <FormControl error={!!errors.email}>
                    <FormLabel>{recoveryContent.email.label}</FormLabel>
                        <Input variant="outlined" type="email" placeholder={recoveryContent.email.placeholder} {...field} value={field.value}></Input>
                        {errors.email && <FormHelperText>{errors.email.message}</FormHelperText>}
                </FormControl>
            )}
            />
            )}

            {step === "verificationCode" && (
                <Controller
            name="verificationCode"
            control={control}
            rules={{
                required: recoveryContent.verificationCode.required,
                validate: (verificationCode)=> verificationCode === currentCode.toString(),
                pattern: {
                    value: /^\d+$/,
                    message: recoveryContent.verificationCode.format
                }
                }}
            render={({field})=>(
                <FormControl error={!!errors.verificationCode}>
                    <FormLabel>{recoveryContent.verificationCode.label}</FormLabel>
                    <Input type={"number"} variant="outlined" placeholder={recoveryContent. verificationCode.placeholder} {...field} value={field.value}></Input>
                    {errors.verificationCode && <FormHelperText>{errors.verificationCode.message}</FormHelperText>}
                </FormControl>
            )}
            />
            )}

            {step === "password" && (
                <Controller 
                name="password"
                control={control}
                rules={{
                    required: recoveryContent.password.required,
                    pattern: {
                        value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/,
                        message: recoveryContent.password.format
                    }
                }}
                render={
                    ({field})=>(
                        <FormControl error={!!errors.password}>
                            <FormLabel>
                                {recoveryContent.password.label}
                            </FormLabel>
                            <Input variant="outlined" type="password" placeholder={recoveryContent.password.placeholder} {...field} value={field.value}/>
                            {errors.password && (<FormHelperText>{errors.password.message}</FormHelperText>)}
                        </FormControl>
                    )
                }
                />
            )}

            {step === "password" && (
                <Controller 
                name="confirmPassword"
                control={control}
                rules={{
                    required: recoveryContent.confirmPassword.required,
                    validate:(value) => value === passwordValue || recoveryContent.confirmPassword.format
                }}
                render={
                    ({field})=> 
                        <FormControl error={!!errors.confirmPassword}>
                            <FormLabel>{recoveryContent.confirmPassword.label}</FormLabel>
                            <Input variant="outlined" type="password" placeholder={recoveryContent.confirmPassword.placeholder} {...field} value={field.value}/>
                            {errors.confirmPassword && <FormHelperText>{errors.confirmPassword.message}</FormHelperText>}
                        </FormControl>
                }
                />
            )}
            
            <Button type="submit" disabled={!isValid}>
                {step === "email" && "Enviar codigo de verificacao"}
                {step === "verificationCode" && "Verificar codigo"}
                {step === "password" && "Recuperar senha"}
            </Button>
        </Box>
    );
}