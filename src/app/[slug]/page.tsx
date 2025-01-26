import { Metadata } from 'next';
import { slugTotitle } from './_utils';
import { buildMetadata } from './_utils/metadata';
import { SlugPageClient } from './client';

type SlugProps = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: SlugProps): Promise<Metadata> {
    const { slug } = await params;
    const title = slugTotitle(slug);
    return buildMetadata(title);
}

export default async function SlugPage({ params }: SlugProps) {
    const { slug } = await params;
    return <SlugPageClient slug={slug} />;
}
