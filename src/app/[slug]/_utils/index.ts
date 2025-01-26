import { Albums } from "@/modules/albums/type";
import slugify from "slugify";

export const getTitleFromSlug = (slug: string) => slug.split('-');
export const getIdFromSlug = (slug: string) => slug.split('-').pop();

export const titleToSlug = (title: string) => {
    const uriSlug = slugify(title, {
        trim: true,
    });
    return encodeURI(uriSlug);
};

export const slugTotitle = (slug: string) => {
    const split = slug.split('-');
    const result = split.slice(0, split.length - 1).join(' ');
    return result;
};

export const getCorrectSlugFromAPI = (albums: Albums) => {
    return `${titleToSlug(albums.title)}-${albums.id}`;
};