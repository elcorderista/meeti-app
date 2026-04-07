import LoginForm from "@/app/src/features/auth/components/LoginForm"
import Heading from "@/components/typography/Heading"
import { generatePageTitle } from "@/utils/metadata"
import Link from "next/link"

export const metadata = {
    title: generatePageTitle('Iniciar Sesión')
}

export default function LoginPage(){
    return (
        <>
            <Heading level={1}>Iniciar Sesión</Heading>
            <LoginForm />
            <nav className="mt-20 flex justify-between">
                <Link href={"/auth/create_account"} 
                className=" font-bold"
                >Crear Cuenta</Link>
                <Link href={"/auth/forgot_password"} 
                className=" font-bold"
                >Olvide mi Password</Link>
            </nav>
        </>
    )
} 