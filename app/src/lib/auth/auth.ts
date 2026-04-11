import {betterAuth } from "better-auth";
import { drizzleAdapter} from "better-auth/adapters/drizzle";
import {nextCookies} from 'better-auth/next-js';
import {db} from '../../db/index';
import { getAuthSecrets } from '../azure/get-auth-secrets';

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
    },
    plugins: [nextCookies()]
})