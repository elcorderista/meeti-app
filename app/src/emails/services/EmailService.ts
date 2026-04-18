/**
 * This file is responsible for sending emails using Nodemailer.
 * It defines the EmailService class with a static send method that takes email options and sends an email using the configured transporter.    
 */
import {transporter} from "@/lib/mail/nodemailer";
import { EmailOptions} from "../types/email.types";

export class EmailService {
    static async send(options: EmailOptions): Promise<void> {
        try {
            const info = await transporter.sendMail(options);
            console.log("Email enviado:", info.messageId);
        } catch (error) {
            console.error("Error al enviar email:", error)
            throw new Error("Error al enviar email");
        }
    }
}