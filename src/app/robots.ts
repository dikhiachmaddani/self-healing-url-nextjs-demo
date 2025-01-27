import { envClient } from '@/config/env-client.config';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const urlPrefix = envClient.NEXT_PUBLIC_BASE_URL;
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${urlPrefix}/sitemap.xml`,
  }
}