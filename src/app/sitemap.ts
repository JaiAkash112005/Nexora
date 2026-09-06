import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://nexapx.com'; // Unoda official domain name-la replace panniko

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Future-la unoda other pages (like /about, /services, etc.) iruntha inga add pannalam
  ];
}