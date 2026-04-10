import { SignUpInput } from "../schemas/authSchema"

class AuthService {
    async register(credentials: SignUpInput){

        const {name, email, password} = credentials

        // TODO: Validar si el usuario existe

        // TODO: Validación del negocio 

        // TODO: Manejar el Registro 
    }
}

export const authService = new AuthService()