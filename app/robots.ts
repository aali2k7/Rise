import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin/', '/api/', '/_next/'],
        },
        sitemap: 'https://rise.edu.in/sitemap.xml',
    }
}
