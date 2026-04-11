"use client";
import Image from "next/image";
import {authClient} from "@/lib/auth/auth_client";

export default function MicrosoftSignInButton(){
    const handleClick  = async () => {
        await authClient.signIn.social({
            provider: "microsoft",
            callbackURL: "/" // a donde redirige después del login
        })
    }

    return (
      <>
        <div className="flex items-center gap-4 my-4">
          <hr className="flex-1" />
          <span className="text-sm text-gray-500">O</span>
          <hr className="flex-1" />
        </div>
        <button
          type="button"
          onClick={handleClick}
          className="w-full flex items-center justify-center gap-2 border rounded-md p-2 hover:bg-gray-50"
        >
        <Image
            src="/microsoft-logo.png"
            alt="Microsoft"
            width={20}
            height={20} 
            />
                Sign in with Microsoft
        </button>
      </>
    );
}