import { generatePageTitle } from "@/utils/metadata";
import Heading from "@/components/typography/Heading";
import { Metadata } from "next";
import RegisterForm from "@/app/src/features/auth/components/RegisterForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: generatePageTitle("Crear Cuenta")
}

export default function RegisterPage() {
  return (
    <>
      <Heading level={1} >Crear Cuenta </Heading>
      <RegisterForm />
      <nav className="mt-20 flex justify-between">
            <Link href={"/auth/login"} 
            className=" font-bold"
            >Iniciar Sesión</Link>
            <Link href={"/auth/forgot_password"} 
            className=" font-bold"
            >Olvide mi Password</Link>
        </nav>
    </>
  )
}