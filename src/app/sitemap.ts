import { MetadataRoute } from 'next'
 
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
        url: `${baseUrl}/approach`,
        lastModified: new Date()
    },
    {
        url: `${baseUrl}/team`,
        lastModified: new Date()
    },
    {
        url: `${baseUrl}/contacts`,
        lastModified: new Date()
    },
    {
        url: `${baseUrl}/login`,
        lastModified: new Date()
    },
  ]
}