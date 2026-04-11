import {getSecret} from './key-vault';

export async function getAuthSecrets() {
    const [clientId, clientSecret, tenantId, betterAuthSecret] = await Promise.all([
        getSecret("AZURE-CLIENT-ID"),
        getSecret("AZURE-CLIENT-SECRET"),
        getSecret("AZURE-TENANT-ID"),
        getSecret("BETTER-AUTH-SECRET"),
    ]);

    return {
        clientId,
        clientSecret,
        tenantId,
        betterAuthSecret
    };
}