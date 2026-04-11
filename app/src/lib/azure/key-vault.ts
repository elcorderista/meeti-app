import {SecretClient} from "@azure/keyvault-secrets";
import {DefaultAzureCredential} from "@azure/identity";

const vaultUrl = process.env.AZURE_VAULT_URL!;

if (!vaultUrl) throw new Error("AZURE_VAULT_URL is not defined");

export async function getSecret(secretName: string): Promise<string> {
    const credential = new DefaultAzureCredential();
    const client = new SecretClient(vaultUrl, credential);
    const secret = await client.getSecret(secretName);
    return secret.value!;
}