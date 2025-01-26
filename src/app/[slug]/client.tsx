'use client';

import { Route } from '@/commons/routes';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MainLayout } from '../_components/layout/main-layout';
import { CardSkeleton } from '../_components/skeleton/card-skeleton';
import { UseValidateAlbum } from './_hooks';

interface SlugPageClientProps {
    slug: string;
}

export function SlugPageClient({ slug }: SlugPageClientProps) {
    const { data, isLoading, isError } = UseValidateAlbum(slug);
    if (isLoading) return (
        <MainLayout title='Detail Albums'>
            <CardSkeleton />
        </MainLayout>
    );
    if (isError || !data) notFound();
    return (
        <MainLayout title={data.title}>
            <Link href={Route.ListAlbums} className="mb-5 text-white bg-blue-950 p-3 rounded-md">Kembali Ke Halaman Utama</Link>
        </MainLayout>
    );
}
