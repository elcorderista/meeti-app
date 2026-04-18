import {betterAuth } from "better-auth";
import { drizzleAdapter} from "better-auth/adapters/drizzle";
import {nextCookies} from 'better-auth/next-js';
import {db} from '../../db/index';
import { getAuthSecrets } from '../azure/get-auth-secrets';
import { AuthEmailService } from "../../emails/services/AuthEmailService";

const secrets = await getAuthSecrets();


export const auth = betterAuth({
    secret: secrets.betterAuthSecret,
    database: drizzleAdapter(db, {
        provider: 'pg',
        usePlural: true
    }),
    socialProviders: {
        microsoft:{
            clientId: secrets.clientId,
            clientSecret: secrets.clientSecret,
            tenantId: secrets.tenantId
        },
    },
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: true
    },
    emailVerification: {
        sendOnSignIn: true,
        autoSignInAfterVerification: true,
        sendVerificationEmail: async ({user, url}) => {
            const {name, email} = user
            await AuthEmailService.sendVerificationEmail({
                name,
                email,
                url
            })
        }
    },
    plugins: [nextCookies()]
})