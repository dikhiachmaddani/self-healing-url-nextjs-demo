import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  let urlPrefix = 'http://localhost:3000';
  if (process.env.NODE_ENV !== 'production') urlPrefix = 'https://example.com';
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${urlPrefix}/sitemap.xml`,
  }
}