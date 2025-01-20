"use client";

import { useDetailAlbums } from "@/modules/albums/hook";
import { notFound, useParams, useRouter } from "next/navigation";
import slugify from "slugify";
import { useEffect } from "react";
import { FruitCardSkeleton } from "@/app/_components/skeleton/fruit-card-skeleton";
import { Route } from "@/commons/routes";
import { DetailAlbumsCard } from "../_components/card/detail-albums-card";

export default function SlugPage() {
    const { slug } = useParams<{ slug: string }>();
    const router = useRouter();
    if (!slug) notFound();

    const id = slug.split("-").pop()!;
    const { data, isLoading } = useDetailAlbums(id);
    useEffect(() => {
        if (data && slug) {
            const correctSlug = `${slugify(data.title, { lower: true, trim: true })}-${id}`;
            if (slug !== correctSlug) {
                router.replace(Route.SlugAlbums.replace(":slug", correctSlug));
            }
        }
    }, [id, slug, data, router]);

    if (isLoading) return <FruitCardSkeleton />;
    if (!data) notFound();

    return (
        <DetailAlbumsCard
            id={data.id}
            key={data.id}
            title={data.title}
        />
    );
}
