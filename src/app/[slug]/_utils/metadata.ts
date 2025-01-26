import { Metadata } from "next";

export function buildMetadata(title: string): Metadata {
    const description = `Explore details about ${title ?? "details"}`;
    return {
        title: `${title ?? "Album Details"} | Your Album Site`,
        description,
        openGraph: {
            title: title ?? "Album Details",
            description
        },
    };
}
