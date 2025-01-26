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
    if (isLoading) return <CardSkeleton />;
    if (isError || !data) notFound();
    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <div className="border-[1px] border-blue-black p-5">
                <Link href={Route.ListAlbums} className="mb-5 text-blue-500">Kembali</Link>
                <div className="mt-2">
                    <p className="hover:underline">{data.title}</p>
                </div>
            </div>
        </div>
    );
}
