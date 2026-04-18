import Heading from "@/components/typography/Heading";
import {requireAuth} from "@/app/src/lib/auth/auth_server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
    const {isAuth} = await requireAuth();
    if (!isAuth) {
        redirect("/auth/login")
    }
    return (
        <>
            <Heading>Dashboard</Heading>
        </>
    )
}
