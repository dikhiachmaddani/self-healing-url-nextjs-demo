import { titleToSlug } from '@/app/[slug]/_utils';
import { Route } from '@/commons/routes';
import { getListAlbums } from '@/modules/albums/api';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const data = await getListAlbums();
    let urlPrefix = 'http://localhost:3000';
    if (process.env.NODE_ENV !== 'production') urlPrefix = 'https://example.com';

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