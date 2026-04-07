import ForgotPasswordForm from "@/app/src/features/auth/components/ForgotPasswordForm";
import Heading from "@/components/typography/Heading";
import Link from "next/link";

export default function ForgotPasswordPage() {
    return (
        <>
        <Heading level={1} >Recupera tu acceso a Meeti</Heading>
        <ForgotPasswordForm />

        <nav className="mt-20 flex justify-between">
            <Link href={"/auth/login"} 
            className=" font-bold"
            >Iniciar Sesión</Link>
            <Link href={"/auth/create_account"} 
            className=" font-bold"
            >Crear Cuenta</Link>
        </nav>
        </>
    )
}