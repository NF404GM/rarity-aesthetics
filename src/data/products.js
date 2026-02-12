// import { IMAGES } from '../constants/images';
const IMAGES = {
    products: {
        matteDreams: new URL('../assets/products/matte_dreams_collection.png', import.meta.url).href,

        // Renamed files (kebab-case, no spaces)
        hibiscusBundle: new URL('../assets/products/hibiscus-heat-bundle.png', import.meta.url).href,
        hibiscusDuo: new URL('../assets/products/hibiscus-heat-duo.png', import.meta.url).href,

        primer: new URL('../assets/products/lash-primer.png', import.meta.url).href,
        bonder: new URL('../assets/products/lash-bonder.png', import.meta.url).href,
        primerBonderBundle: new URL('../assets/products/primer-bonder-bundle.png', import.meta.url).href,

        shampoo: new URL('../assets/products/lash-shampoo.png', import.meta.url).href,

        tweezerBundle: new URL('../assets/products/tweezer-bundle.png', import.meta.url).href,

        // Corrected image assignments
        tweezersSwapped: new URL('../assets/products/gold-tweezers.png', import.meta.url).href,
        fanSwapped: new URL('../assets/products/cloud-fan.png', import.meta.url).href,

        cloudMirror: new URL('../assets/products/cloud-mirror.png', import.meta.url).href,
    },
    home: {
        heroVideo: "https://videos.pexels.com/video-files/855420/855420-hd_1920_1080_30fps.mp4"
    }
}

export const products = [
    // COLLECTIONS
    {
        id: "matte-dreams",
        name: "Matte Dreams Collection",
        price: 13.50,
        image: IMAGES.products.matteDreams,
        category: "Collections",
        description: "The ‘Matte Dreams Collection’ consists of the darkest matte lash extensions that are soft and easy to fan. These lashes are a must have for a fluffy volume set and a dark lash line. Pairs best with our Fiber Tip Tweezers.",
        bundleEligible: true,
        badge: "Best Seller",
        attributes: [
            {
                name: "Length",
                options: ["Mixed Tray", "8mm", "9mm", "10mm", "11mm", "12mm", "13mm", "14mm", "15mm", "16mm"]
            },
            {
                name: "Curl",
                options: ["C", "CC", "D", "DD"]
            },
            {
                name: "Diameter",
                options: ["0.03", "0.05", "0.07"]
            }
        ]
    },
    {
        id: "hibiscus-heat-bundle",
        name: "HIBISCUS HEAT BUNDLE",
        price: 65.00,
        image: IMAGES.products.hibiscusBundle,
        category: "Collections",
        description: "Summer vibes in a box. Includes colorful trays and exclusive tools to bring the heat to your lash sets.",
        bundleEligible: false,
        badge: "Seasonal"
    },
    {
        id: "hibiscus-heat-duo",
        name: "HIBISCUS HEAT DUO",
        price: 50.00,
        image: IMAGES.products.hibiscusDuo,
        category: "Collections",
        description: "The essential summer pairing for a vibrant look.",
        bundleEligible: false
    },

    // ADHESIVES & LIQUIDS
    {
        id: "retention-bonder",
        name: "Retention Boosting Curing Agent | Lash Bonder",
        price: 31.00,
        image: IMAGES.products.bonder,
        category: "Adhesives",
        description: "Instantly cures adhesive, locking in fumes and extending retention. A game changer for sensitive eyes.",
        bundleEligible: false
    },
    {
        id: "lash-primer",
        name: "Pre-Treatment | Lash Primer",
        price: 21.00,
        image: IMAGES.products.primer,
        category: "Adhesives",
        description: "Removes oils and proteins for a perfect bond. Strawberry scented for a pleasant client experience.",
        bundleEligible: false
    },
    {
        id: "primer-bonder-bundle",
        name: "Primer & Bonder Bundle",
        price: 41.00,
        image: IMAGES.products.primerBonderBundle,
        category: "Adhesives",
        description: "The dynamic duo for retention. Preps the natural lash and seals the bond instantly.",
        bundleEligible: false,
        badge: "Value Set"
    },
    {
        id: "lash-shampoo",
        name: "Whipped Cream Lash Shampoo",
        price: 20.00,
        image: IMAGES.products.shampoo,
        category: "Adhesives",
        description: "Includes cleansing brush. Strawberry scented lash shampoo. Sensitive formula that deeply cleanses lashes without compromising PH.",
        bundleEligible: false
    },

    // TOOLS
    {
        id: "gold-tweezers",
        name: "Gold Series Fiber Tip Tweezers",
        price: 30.00,
        image: IMAGES.products.tweezersSwapped,
        category: "Tools",
        description: "Our Fiber tip Gold series tweezer collection has fine mesh cross hatching at the tips which ensures for an all around sweet spot. This makes it easier to isolate, apply and fan lash extensions. Stainless Steel with Engraved Grip.",
        bundleEligible: false,
        attributes: [
            {
                name: "Style",
                options: ["Boot", "Isolation", "Curved", "90 Degree"]
            }
        ]
    },
    {
        id: "tweezer-bundle",
        name: "Gold Series Tweezer Bundle",
        price: 50.00,
        image: IMAGES.products.tweezerBundle,
        category: "Tools",
        description: "Get the full set. Essential for every artist who needs precision and versatility.",
        bundleEligible: false
    },
    {
        id: "cloud-fan",
        name: "Luxury Cloud Fan",
        price: 23.00,
        image: IMAGES.products.fanSwapped,
        category: "Tools",
        description: "Speed up drying time with style. Rechargeable, bladeless, and aesthetically pleasing.",
        bundleEligible: false,
        attributes: [
            {
                name: "Color",
                options: ["White", "Pink", "Black"]
            }
        ]
    },
    {
        id: "cloud-mirror",
        name: "Cloud Mirror",
        price: 12.00,
        image: IMAGES.products.cloudMirror,
        category: "Tools",
        description: "Check your work from every angle with this signature cloud-shaped mirror.",
        bundleEligible: false
    },

    // HIDDEN ITEMS (No Images yet)
    /*
    {
        id: "mystery-tile",
        name: "Mystery Lash Tile",
        price: 15.00,
        category: "Tools",
        description: "A beautiful, weighted tile for your strips. Designs vary.",
        bundleEligible: false
    },
    {
        id: "glue-rings",
        name: "Glue Rings",
        price: 7.00,
        category: "Accessories",
        description: "Disposables for speed. Pack of 50.",
        bundleEligible: false
    },
    {
        id: "mascara-wands",
        name: "Mascara Wands",
        price: 7.00,
        category: "Accessories",
        description: "Fluff them up. Pack of 50.",
        bundleEligible: false
    },
    {
        id: "silicone-tape",
        name: "Sensitive Silicone Tape",
        price: 7.00,
        category: "Accessories",
        description: "Gentle on skin, strong hold. Pain-free removal.",
        bundleEligible: false
    },
    {
        id: "microswabs",
        name: "Microswabs",
        price: 7.00,
        category: "Accessories",
        description: "Precision cleaning. Pack of 100.",
        bundleEligible: false
    },
    {
        id: "baseball-cap",
        name: "Sweet Ass Lash Tech | Baseball Cap",
        price: 23.99,
        originalPrice: 30.00,
        category: "Apparel",
        description: "Rep the brand. Embroidered logo.",
        bundleEligible: false,
        badge: "Sale"
    },
    {
        id: "galentines-party",
        name: "1:1 Galentines Lash Party",
        price: 1000.00,
        category: "Education",
        description: "Exclusive 1:1 training event. Includes kit, manual, and certification. Contact for dates.",
        bundleEligible: false
    }
    */
];
