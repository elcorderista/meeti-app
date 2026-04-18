import {z} from 'zod';

export const BaseAuthSchema = z.object({
    name: z.string().trim().min(1, {error: 'El Nombre es obligatorio'}),
    email: z.email({error: 'El e-mail no es válido'}),
    password: z.string().trim().min(8, {error: 'El Password debe ser minimo de 8 caracteres'}),
    passwordConfirmation: z.string().trim().min(8, {error: 'El Password de confirmación no puede ir vacio'})
})

export const SignUpSchema = BaseAuthSchema.pick({
    name: true, 
    email: true,
    password: true, 
    passwordConfirmation: true

}).refine((data) => data.password === data.passwordConfirmation, {
    error: "Los Password no son iguales",
    path: ['passwordConfirmation']
})

// Schema para el Login, solo necesitamos el email y password, por eso usamos pick para seleccionar solo esos campos del BaseAuthSchema
export const SignInSchema = BaseAuthSchema.pick({
    email: true,
}).extend({
    password: z.string().trim().min(1, "El Passord es obligatorio"),
})

export type SignUpInput = z.infer<typeof SignUpSchema>
export type SignInInput = z.infer<typeof SignInSchema>
