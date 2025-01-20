import { TApi } from "@/commons/types/api";
import { envClient } from "@/config/env-client.config";
import withQuery from "with-query";

export const Api = ({ baseUrl }: TApi) => {
    return {
        get: async <T>(input: RequestInfo | URL) => {
            const response = await fetch(
                withQuery(new URL(input.toString(), baseUrl).toString()),
                {
                    method: 'GET',
                    cache: "no-store",
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            );
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'An error occurred');
            }
            return response.json() as Promise<T>;
        },
    }
};

export const api = Api({ baseUrl: envClient.NEXT_PUBLIC_API_BASE_URL });
