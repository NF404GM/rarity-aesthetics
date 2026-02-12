// Central source of truth for all website images
// To replace an image, simply overwrite the file in src/assets/ OR change the URL here.

// Brand
import logo from '../assets/logo.webp'

// Placeholders - Using reliable Unsplash IDs with specific dimensions to ensure loading
export const IMAGES = {
    brand: {
        logo: logo,
        icon: logo,
    },
    home: {
        // High-fashion, dark aesthetic hero image 
        heroVideo: "https://videos.pexels.com/video-files/855420/855420-hd_1920_1080_30fps.mp4", // Reliable Pexels Cloud-Sky Loop
        manifestoBg: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2832&auto=format&fit=crop", // Abstract dark texture
        shopTeaser: new URL('../assets/The_Lab.png', import.meta.url).href,
    },
    services: {
        // Natural - Soft, clean look
        natural: new URL('../assets/Natural_Artist_new.png', import.meta.url).href,
        // Volume - Fuller, textured
        volume: new URL('../assets/Volume_Texture.png', import.meta.url).href,
        // Mega - Dramatic, dark
        mega: new URL('../assets/Mega_Drama_rarity.jpg', import.meta.url).href,

        // NEW SECTIONS
        specials: new URL('../assets/services/specials.png', import.meta.url).href,
        lashSets: new URL('../assets/services/lash-sets.png', import.meta.url).href,
        fills: new URL('../assets/services/fills.png', import.meta.url).href,
        brows: new URL('../assets/services/brows.png', import.meta.url).href,

        // Legacy / Bundles
        bundle: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
        lift: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop",
    },
    about: {
        portrait: new URL('../assets/Ashley_updated.png', import.meta.url).href,
    },
    portfolio: [
        { id: 1, category: 'Natural', src: new URL('../assets/portfolio/natural-closeup.png', import.meta.url).href },
        { id: 2, category: 'Volume', src: new URL('../assets/portfolio/volume-profile.png', import.meta.url).href },
        { id: 3, category: 'Mega', src: new URL('../assets/portfolio/mega-drama.png', import.meta.url).href },
        { id: 4, category: 'Wet Look', src: new URL('../assets/portfolio/wet-look.png', import.meta.url).href },
        { id: 5, category: 'Fox Eye', src: new URL('../assets/portfolio/fox-eye.png', import.meta.url).href },
        { id: 6, category: 'Lash Nap', src: new URL('../assets/portfolio/lash-nap.png', import.meta.url).href }
    ],
    blog: {
        fullSet: new URL('../assets/blog/Lash_Full_Set.png', import.meta.url).href,
    },
    products: {
        matteDreams: new URL('../assets/products/matte_dreams_collection.png', import.meta.url).href,

        // Collections
        hibiscusBundle: new URL('../assets/products/HIBISCUS HEAT BUNDLE.png', import.meta.url).href,
        hibiscusDuo: new URL('../assets/products/HIBISCUS HEAT DUO.png', import.meta.url).href,

        // Adhesives & Liquids
        primer: new URL('../assets/products/Pre-Treatment Lash Primer.png', import.meta.url).href,
        bonder: new URL('../assets/products/Retention Boosting Curing Agent Lash Bonder.png', import.meta.url).href,
        primerBonderBundle: new URL('../assets/products/Primer&Bonder Bundle.png', import.meta.url).href,

        // Tools
        tweezerBundle: new URL('../assets/products/Gold Series Fiber Tip Tweezer Bundle.png', import.meta.url).href,
        cloudFan: new URL('../assets/products/Cloud Fan.webp', import.meta.url).href,
        cloudMirror: new URL('../assets/products/Cloud Mirror.png', import.meta.url).href,

        // Placeholders for remaining items
        adhesives: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1887&auto=format&fit=crop",
        tweezers: "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=1888&auto=format&fit=crop",
        fans: "https://images.unsplash.com/photo-1631214500115-598fc2cb8d2d?q=80&w=1925&auto=format&fit=crop",
        liquids: "https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?q=80&w=1972&auto=format&fit=crop",
        apparel: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1935&auto=format&fit=crop",
    }
}
