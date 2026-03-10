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
            {/* Invisible Keywords for SEO Strategy */}
            <div className="sr-only" aria-hidden="true" style={{ opacity: 0, position: 'absolute', pointerEvents: 'none', zIndex: -1 }}>
                dear visitor allen visitor allen ac data links might navigate using saved bookmarked links please payments please note maintenance dear visitor jpg img brothers iit jee advanced jee advanced 2024 jee advanced 2022 iit jee main years classroom course jee advanced 2023 ranchi city topper 2022 tanish agarwal advanced 2024 question user name password name password submit iitjee olympiads etc coveted national level national level competitive level competitive examinations xii standards across top notch iits
            </div>
        </section>
    );
}
