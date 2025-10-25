"use client";

import loginContent from "@/content/login-page-content/loginContent.json"
import { Box, Button, FormControl, FormHelperText, FormLabel, Input } from "@mui/joy";
import { Controller, useForm } from "react-hook-form";

interface IFormValues{
    email: string
    password: string
}

export const LoginForm =()=>{

    const {
        control,
        handleSubmit,
        formState: {errors, isValid},
    } = useForm<IFormValues>({defaultValues: {email: "", password: ""}, mode: "onChange"});

    const onSubmit = (data: IFormValues) =>{
        console.log("Dados enviados: ", data);
    }

    return(
        <Box component={"form"} onSubmit={handleSubmit(onSubmit)} flex={1} display={"flex"} flexDirection={"column"} gap={"10px"}>
            <Controller 
            name="email" 
            control={control} 
            rules={{
                required: loginContent.card.form.email.required,
                pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: loginContent.card.form.email.error,
                },
            }} 
            render={
                ({field})=>(
                    <FormControl error={!!errors.email}>
                        <FormLabel>
                            {loginContent.card.form.email.label}
                        </FormLabel>
                        <Input variant="outlined"  placeholder={loginContent.card.form.email.placeholder} {...field} value={field.value}/>
                        {errors.email && (<FormHelperText>{errors.email.message}</FormHelperText>)}
                    </FormControl>
                )
            }
            />
            <Controller 
            name="password"
            control={control}
            rules={{
                required: loginContent.card.form.password.required,
                pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    message: loginContent.card.form.password.error
                }
            }}
            render={
                ({field})=>(
                    <FormControl error={!!errors.password}>
                        <FormLabel>
                            {loginContent.card.form.password.label}
                        </FormLabel>
                        <Input variant="outlined" type="password" placeholder={loginContent.card.form.password.placeholder} {...field} value={field.value}/>
                        {errors.password && (<FormHelperText>{errors.password.message}</FormHelperText>)}
                    </FormControl>
                )
            }
            />
            <Button type="submit" variant="solid" disabled={!isValid}>{loginContent.card.form.button}</Button>
        </Box>
    );
}