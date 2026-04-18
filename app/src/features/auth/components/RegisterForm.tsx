"use client";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormInput,
  FormLabel,
  Form,
  FormSubmit,
  FormError,
  MicrosoftSignInButton,
} from "@/components/forms";
import { SignUpInput, SignUpSchema } from "../schemas/authSchema";
import { signUpAction } from "../actions/auth-actions";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }, reset
  } = useForm({
    resolver: zodResolver(SignUpSchema),
    mode: "all",
  });
  console.log(errors);

  const onSubmit = async (data: SignUpInput) => {
    
    const {error, success} = await signUpAction(data);
    if (error){
      toast.error(error)
    }
    if (success){
      toast.success(success)
      reset()
    }
  };
  
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormLabel htmlFor="name">Nombre</FormLabel>
      <FormInput
        id="name"
        type="text"
        placeholder="Ingresa tu Nombre"
        {...register("name")}
      />
      {errors.name && <FormError>{errors.name.message}</FormError>}

      <FormLabel htmlFor="email">E-mail</FormLabel>
      <FormInput
        id="email"
        type="email"
        placeholder="Ingresa tu Email"
        {...register("email")}
      />
      {errors.email && <FormError>{errors.email.message}</FormError>}
      <FormLabel htmlFor="password">Password</FormLabel>
      <FormInput
        id="password"
        type="password"
        placeholder="Password - Min. 8 Caracteres"
        {...register("password")}
      />
      {errors.password && <FormError>{errors.password.message}</FormError>}

      <FormLabel htmlFor="password_confirmation">Repetir Password</FormLabel>
      <FormInput
        id="password_confirmation"
        type="password"
        placeholder="Repite tu Password"
        {...register("passwordConfirmation")}
      />
      {errors.passwordConfirmation && (
        <FormError>{errors.passwordConfirmation.message}</FormError>
      )}
      <FormSubmit value="Registrarme" />

      {/* Botón Microsoft */}
      <MicrosoftSignInButton />
    </Form>
  );
}
