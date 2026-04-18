"use server"

import { Sign } from "crypto"
import { SignInInput, SignInSchema, SignUpInput, SignUpSchema }  from "../schemas/authSchema"
import { authService } from "../services/AuthServices"
import { success } from "zod"

export async function signUpAction(input : SignUpInput){
    const data = SignUpSchema.safeParse(input)

    if(!data.success){
        return {
            error: 'Hubo un error',
            success: ''
        }
    }
    const response = await authService.register(data.data)
    return response

}

export async function singInAction(input: SignInInput){
    // Validar el input con el schema
    const data = SignInSchema.safeParse(input)
    if(!data.success){
        return {
            error: 'Hubo un error',
            success: ''
        }
    }
    const response = await authService.login(data.data)
    return response

}