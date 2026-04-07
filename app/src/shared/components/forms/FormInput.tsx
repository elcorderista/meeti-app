import { InputHTMLAttributes } from "react";
import clsx from "clsx";

type Props = InputHTMLAttributes<HTMLInputElement>

export default function FormInput(props: Props){
    return (
        <input 
        {...props}
        className={clsx("border border-slate-600 w-full p-2", props.className)}
        />
    )
}