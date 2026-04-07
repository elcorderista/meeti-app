"use client";

import { FormInput, FormLabel, Form, FormSubmit } from "@/app/src/shared/components/forms";

export default function RegisterForm(){
    return(
        <Form>
            <FormLabel htmlFor="name">Nombre</FormLabel>
            <FormInput 
                id="name"
                type="text"
                placeholder="Ingresa Tu Nombre"
            />
        <FormLabel htmlFor="email">E-mail</FormLabel>
        <FormInput 
            id="email"
            type="email"
            placeholder="Ingresa tu Email"
        />
        <FormLabel htmlFor="password">Password</FormLabel>
        <FormInput 
            id="password"
            type="password"
            placeholder="Password - Min. 8 Caracteres"
        />
        <FormLabel htmlFor="password">Repetir Password</FormLabel>
        <FormInput 
            id="password_confirmation"
            type="password"
            placeholder="Repite tu Password"
        />
        <FormSubmit value="Registrarme" />
        </Form>
    )
}