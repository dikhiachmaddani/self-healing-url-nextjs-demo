import slugify from "slugify";

export const titleToSlug = (title: string) => {
    const uriSlug = slugify(title, {
        lower: true,
        trim: true,
    });
    return encodeURI(uriSlug);
};