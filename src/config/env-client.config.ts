import z from "zod";

export const envClientSchemaObj = {
    NEXT_PUBLIC_API_BASE_URL: z.string(),
};

export const envClientCollectionObj = {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
};

export const envClientSchema = z.object(envClientSchemaObj);
export const envClient = envClientSchema.parse(envClientCollectionObj);
