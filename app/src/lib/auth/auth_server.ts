import {headers} from "next/headers";
import {auth} from "@/app/src/lib/auth/auth";

// Obtenemos la sesión del usuario en el servidor
export async function getServerSession() {
    const session = await await auth.api.getSession({
        headers: await headers()
    })
    return session
}

// Middleware para proteger rutas en el servidor
export async function requireAuth() {
    const session = await getServerSession();
    return {
        session,
        isAuth: session ? true : false
    }
}
