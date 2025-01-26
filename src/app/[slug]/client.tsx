'use client';

import { Route } from '@/commons/routes';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CardSkeleton } from '../_components/skeleton/card-skeleton';
import { UseValidateAlbum } from './_hooks';

interface SlugPageClientProps {
    slug: string;
}

export function SlugPageClient({ slug }: SlugPageClientProps) {
    const { data, isLoading, isError } = UseValidateAlbum(slug);
    if (isLoading) return (
        <>
            <div className="my-10">
                <h1 className="font-semibold text-2xl mb-4 text-blue-950">Detail Albums</h1>
                <p>data yang didapatkan berasal dari jsonplaceholder Albums.</p>
            </div>
            <CardSkeleton />
        </>
    );
    if (isError || !data) notFound();
    return (
        <>
            <div className="my-10">
                <h1 className="font-semibold text-2xl mb-4 text-blue-950">{data.title}</h1>
                <p>data yang didapatkan berasal dari jsonplaceholder Albums.</p>
            </div>
            <Link href={Route.ListAlbums} className="mb-5 text-white bg-blue-950 p-3 rounded-md">Kembali Ke Halaman Utama</Link>
        </>
    );
}
