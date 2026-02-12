import { useEffect } from 'react'

const SocialFeed = () => {
    useEffect(() => {
        // Facebook SDK initialization
        // This ensures the plugin renders even if the user navigates away and back
        if (window.FB) {
            window.FB.XFBML.parse()
        }
    }, [])

    return (
        <section className="py-20 px-6 bg-rarity-navy relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="text-center md:text-left">
                    <span className="text-rarity-ink/60 font-montserrat text-xs tracking-[0.3em] uppercase mb-4 block font-bold">
                        Join the Community
                    </span>
                    <h2 className="font-playfair text-4xl md:text-5xl text-rarity-ink mb-6">
                        Latest from the Studio
                    </h2>
                    <p className="font-lato text-rarity-gray text-lg mb-8 leading-relaxed max-w-md">
                        Follow us on Facebook for exclusive updates, client showcases, and behind-the-scenes looks at our process.
                    </p>
                    <a
                        href="https://www.facebook.com/profile.php?id=100095157423415"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block border border-rarity-ink text-rarity-ink hover:bg-rarity-ink hover:text-white px-8 py-3 transition-colors uppercase tracking-widest text-sm font-bold"
                    >
                        View Full Page
                    </a>
                </div>

                {/* Facebook Plugin Container */}
                <div className="flex justify-center md:justify-end">
                    <div className="bg-white p-4 shadow-2xl rounded-lg rotate-1 hover:rotate-0 transition-transform duration-500">
                        <div
                            className="fb-page"
                            data-href="https://www.facebook.com/profile.php?id=100095157423415"
                            data-tabs="timeline"
                            data-width="500"
                            data-height="600"
                            data-small-header="false"
                            data-adapt-container-width="true"
                            data-hide-cover="false"
                            data-show-facepile="true">
                            <blockquote cite="https://www.facebook.com/profile.php?id=100095157423415" className="fb-xfbml-parse-ignore">
                                <a href="https://www.facebook.com/profile.php?id=100095157423415">Rarity Aesthetics</a>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SocialFeed
