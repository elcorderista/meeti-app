/**
 * 
 * Genera el título de una página concatenando el nombre de la aplicación (variable de entrno)
 * con un título expecífico.
 * 
 * El formato resultante es `APP_NAME - tittle`
 * @param title - Título específico de la pagina (ej: "Inicio, "Contacto", etc.)
 * @returns Título completo listo para usar en el `metadata.title` de Next.js
 * 
 * @example
 * // Si process.env.APP_NAME = "Mi App"
 * generatePageTitle("Dashboard") // → "Mi App - Dashboard"
 *
 * @warning Asegúrate de que `APP_NAME` esté definida en `.env.local` o variables de entorno.
 *           Si no existe, retornará `undefined - título`
 * 
 */

export function generatePageTitle(title: string){
    return `${process.env.APP_NAME} - ${title}`
}