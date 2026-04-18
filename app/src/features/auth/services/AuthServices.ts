
import { SignInInput, SignUpInput } from "../schemas/authSchema"
import {auth} from "@/lib/auth/auth"
import { authRepository, IAuthRepository } from "./AuthRepository"
import {headers} from "next/headers"
import { APIError } from "better-auth"

class AuthService {
    constructor(
        private authRepository: IAuthRepository
    ){}

    async register(credentials: SignUpInput){

        const {name, email, password} = credentials

        // TODO: Validar si el usuario existe
        const user = await this.authRepository.userExists(email)
        if(user){
            return {
                error: 'El e-mail ya está registrado',
                success: ''
            }
        }
        // TODO: Validación del negocio 

        // TODO: Manejar el Registro 
        await auth.api.signUpEmail({
            body : {
                name, 
                email,
                password,
                callbackURL: '/dashboard'
            },
            headers: await headers()
        })
        return {
            error: '',
            success: 'Cuenta Creada Correctamente, revisa tu email'
        }
    }

    async login(credentials: SignInInput){
        // 1. Validar si el usuairo existe
        const {email, password} = credentials
        const user = await this.authRepository.userExists(email)
        if(!user){
            return {
                error: 'El usuario no está registrado',
                success: ''
            }
        }

        // 2. Verificar si el Password es correcto 
        try {
            await auth.api.signInEmail({
                body: {
                    email,   
                    password,
                    callbackURL: '/dashboard'    
                },
                // 3. Setea la cookie de autenticación
                headers: await headers()
            })
            return {
                error: '',
                success: 'Inicio de sesión correcto'
            }
        } catch (error) {
            if (error instanceof APIError) {
                const messages: Record<number, string> = {
                    401: 'Password incorrecto',
                    403: 'Tu cuenta no ha sido confirmada, hemos enviado un email'
                }
                // Si encuentra correspondencia en Record
                const errorMessage = messages[error.statusCode] 
                if(errorMessage){
                    return {
                        error: errorMessage,
                        success: ''
                    }
                }
            }
        }
    }
}

export const authService = new AuthService(authRepository)