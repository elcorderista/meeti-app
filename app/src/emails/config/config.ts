
/**
 * This file contains the configuration for the email service, such as the sender's email address and the token expiration time for email verification and password reset emails.
 */
export const emailConfig = {
    from: {
        verification: 'Meeti <cuentas@meeti.com>',
        passwordReset: 'Meeti <admin@meeti.com>',
        default: 'Meeti <noreply@meeti.com>'
    }, 
    tokenExpiration: '1 hora'
} as const