import { FormHTMLAttributes } from 'react';
import clsx from 'clsx';

/** Inyectamos propiedades de HTMLFormElement */
type Props = FormHTMLAttributes<HTMLFormElement>

export default function Form(props: Props){
    return (
        /** Damos la libertad de pasar mas clases o atributos con ...props */
        <form {...props} className={clsx("mt-10 space-y-3 p-5 shadow-2xl", props.className)}>
            {props.children}
        </form>
    )
}