import { useDetailAlbums } from "@/modules/albums/hook";
import { notFound, redirect } from "next/navigation";
import { useMemo } from "react";
import { getCorrectSlugFromAPI, getIdFromSlug } from "../_utils";

export function UseValidateAlbum(slug: string) {
    const id = getIdFromSlug(slug);
    if (!id) notFound();
    const { data, isLoading, isError } = useDetailAlbums(id);
    useMemo(() => {
        if (data) {
            const correctSlug = getCorrectSlugFromAPI(data);
            if (slug !== correctSlug) redirect(`/${correctSlug}`);
        }
    }, [data, slug]);
    return { data, isLoading, isError };
}
