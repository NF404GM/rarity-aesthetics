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
        <section className="py-16 md:py-20 px-4 md:px-6 bg-rarity-navy relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Text Content */}
                <div className="text-center md:text-left">
                    <span className="text-rarity-ink/60 font-montserrat text-xs tracking-[0.3em] uppercase mb-4 block font-bold">
                        Join the Community
                    </span>
                    <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-rarity-ink mb-4 md:mb-6">
                        Latest from the Studio
                    </h2>
                    <p className="font-lato text-rarity-gray text-base md:text-lg mb-6 md:mb-8 leading-relaxed max-w-md mx-auto md:mx-0">
                        Follow us on Facebook for exclusive updates, client showcases, and behind-the-scenes looks at our process.
                    </p>
                    <a
                        href="https://www.facebook.com/profile.php?id=100095157423415"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block border border-rarity-ink text-rarity-ink hover:bg-rarity-ink hover:text-white px-6 md:px-8 py-3 rounded-full transition-colors uppercase tracking-widest text-xs md:text-sm font-bold"
                    >
                        View Full Page
                    </a>
                </div>

                {/* Facebook Plugin Container */}
                <div className="flex justify-center md:justify-end">
                    <div className="bg-white p-3 md:p-4 shadow-2xl rounded-2xl md:rounded-lg w-full max-w-[340px] md:max-w-none md:w-auto hover:shadow-3xl transition-shadow duration-500 overflow-hidden">
                        <div
                            className="fb-page"
                            data-href="https://www.facebook.com/profile.php?id=100095157423415"
                            data-tabs="timeline"
                            data-width="340"
                            data-height="500"
                            data-small-header="true"
                            data-adapt-container-width="true"
                            data-hide-cover="false"
                            data-show-facepile="false">
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
