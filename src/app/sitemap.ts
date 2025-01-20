import { Route } from '@/commons/routes';
import { getListAlbums } from '@/modules/albums/api';
import type { MetadataRoute } from 'next';
import slugify from 'slugify';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const data = await getListAlbums();
    const titleToSlug = (title: string) => {
        const uriSlug = slugify(title, {
            lower: true,
            trim: true,
        });
        return encodeURI(uriSlug);
    };
    const albums = await data.map((album) => ({
        url: `http://localhost:3000${Route.SlugAlbums.replace(':slug', titleToSlug(`${album.title}-${album.id}`))}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'daily',
        priority: 0.7,
    }));

    return albums as MetadataRoute.Sitemap;
}