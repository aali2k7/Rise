export default function BreadcrumbSchema({ items }: { items: { name: string; item: string }[] }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://rise.edu.in"
            },
            ...items.map((crumb, index) => ({
                "@type": "ListItem",
                "position": index + 2,
                "name": crumb.name,
                "item": `https://rise.edu.in${crumb.item}`
            }))
        ]
    };

    return (
        <section>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </section>
    );
}
