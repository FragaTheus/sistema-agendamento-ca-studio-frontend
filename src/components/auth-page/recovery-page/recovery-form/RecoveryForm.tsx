"use client";

import { Box, Button, FormControl, FormHelperText, FormLabel, Input } from "@mui/joy";
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
                required: "Texto informando que email e obrigatorio",
                pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Texto que vai vir do json para email digitado nao condiz com email"
                }
            }}
            render={({field})=>(
                <FormControl error={!!errors.email}>
                    <FormLabel>Texto que vai vir do json para label do email</FormLabel>
                        <Input variant="outlined" type="email" placeholder="json que vem com o exemplo de email" {...field} value={field.value}></Input>
                        {errors.email && <FormHelperText>Json que vai informar sobre o erro no campo digitado</FormHelperText>}
                </FormControl>
            )}
            />
            )}

            {step === "verificationCode" && (
                <Controller
            name="verificationCode"
            control={control}
            rules={{
                required: "Texto que vai informar que campo e requerido",
                validate: (verificationCode)=> verificationCode === currentCode.toString(),
                pattern: {
                    value: /^\d+$/,
                    message: "Mesagem informando que o codigo esta fora do valor esperado"
                }
                }}
            render={({field})=>(
                <FormControl error={!!errors.verificationCode}>
                    <FormLabel>Label do codigo de verificacao</FormLabel>
                    <Input type={"number"} variant="outlined" placeholder="123456" {...field} value={field.value}></Input>
                    {errors.verificationCode && <FormHelperText>Texto que ajuda a preencher o form</FormHelperText>}
                </FormControl>
            )}
            />
            )}

            {step === "password" && (
                <Controller 
                name="password"
                control={control}
                rules={{
                    required: "Texto que vai brotar do json",
                    pattern: {
                        value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/,
                        message: "Texto que vai brotar do json"
                    }
                }}
                render={
                    ({field})=>(
                        <FormControl error={!!errors.password}>
                            <FormLabel>
                                "Texto que vai brotar do json"
                            </FormLabel>
                            <Input variant="outlined" type="password" placeholder="Texto que vai brotar do json" {...field} value={field.value}/>
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
                    required: "Texto que vai brotar do json",
                    validate:(value) => value === passwordValue || "Texto que vai brotar do json"
                }}
                render={
                    ({field})=> 
                        <FormControl error={!!errors.confirmPassword}>
                            <FormLabel>{"Texto que vai brotar do json"}</FormLabel>
                            <Input variant="outlined" type="password" placeholder={"Texto que vai brotar do json"} {...field} value={field.value}/>
                            {errors.confirmPassword && <FormHelperText>{errors.confirmPassword.message}</FormHelperText>}
                        </FormControl>
                }
                />
            )}
            
            <Button type="submit" disabled={!isValid}>Recuperar conta</Button>
        </Box>
    );
}