import { Helmet } from 'react-helmet-async'

const SEO = ({ title, description, canonical, schema, image }) => {
    const siteTitle = 'Rarity Aesthetics | Custom Lash Artistry Denver & Thornton, CO'
    const defaultDescription = "Premium custom lash extensions near Denver, CO. Located in Thornton, serving the Denver metro area. Specialized styles tailored to your unique eye symmetry. Book your natural, volume, or mega volume set today."
    const siteUrl = 'https://rarityaesthetics.com'
    const defaultImage = `${siteUrl}/og-image.png`

    const pageTitle = title ? `${title} | Rarity Aesthetics` : siteTitle
    const pageDescription = description || defaultDescription
    const pageImage = image || defaultImage
    const pageUrl = canonical ? `${siteUrl}${canonical}` : siteUrl

    return (
        <Helmet>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            {canonical && <link rel="canonical" href={pageUrl} />}

            {/* Open Graph */}
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:image" content={pageImage} />
            <meta property="og:site_name" content="Rarity Aesthetics" />
            <meta property="og:locale" content="en_US" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={pageDescription} />
            <meta name="twitter:image" content={pageImage} />

            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    )
}

export default SEO

