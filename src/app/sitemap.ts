import { titleToSlug } from '@/app/[slug]/_utils';
import { Route } from '@/commons/routes';
import { envClient } from '@/config/env-client.config';
import { getListAlbums } from '@/modules/albums/api';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const data = await getListAlbums();
    const urlPrefix = envClient.NEXT_PUBLIC_BASE_URL;

    const albums = await data.map((album) => ({
        url: `${urlPrefix}${Route.SlugAlbums.replace(':slug', titleToSlug(`${album.title}-${album.id}`))}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'daily',
        priority: 0.7,
    }));

    return [
        {
            url: `${urlPrefix}/`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'daily',
            priority: 0.1,
        },
        ...albums as MetadataRoute.Sitemap
    ];
}