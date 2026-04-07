import clsx from "clsx"

/**
 * Props el componente Heading.
 */
type Props = {
    /** Contenido del encabezado (textp u otros elementos). */
    children: React.ReactNode
    /** Nivel semántico del encabezado (hi - h6). Por defecto: 1 */
    level?: 1 | 2 | 3 | 4 | 5 | 6
    /** Clases CSS adicionales (se fusionan con las internas) */
    className?: string
}

/**
 * Compontente que renderiza un encabeza con estilos predefinidos.
 * 
 * - Aplica mayúsculas, negrita y centrado por defecto.
 * - Los tamaños se mapean automáticamente según el nivel (h1 -> text 4xl, etc.),
 * - Usa `clsx` para combinar clases personalizadas.
 * 
 * @example
 * ```tsx
 * <Heading level={2}>Bienvenido</Heading>
 * <Heading level={4} className="text-left">Subtítulo</Heading>
 * ```
 */

export default function Heading({ children, level = 1, className }: Props) {
    const Tag: React.ElementType = `h${level}`
    const sizeMap: Record<number, string> = {
        1: "text-4xl",
        2: "text-3xl",
        3: "text-2xl",
        4: "text-xl",
        5: "text-lg",
        6: "text-sm",
    }

    return (
        <Tag className={clsx("font-black uppercase text-center", sizeMap[level], className)}>
            {children}
        </Tag>
    )
}