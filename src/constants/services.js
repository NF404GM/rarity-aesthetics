import { IMAGES } from './images'

export const SERVICE_DATA = [
    {
        category: "Specials",
        id: "specials",
        image: IMAGES.services.specials,
        items: [
            {
                id: 'val-special',
                title: 'Valentines lash special',
                price: '$200.00',
                duration: '3 hours',
                desc: 'Book a full set followed by a fill appointment. The fill is on me! Fill must be booked 2-3 weeks after full set.',
                img: IMAGES.services.specials,
                special: true
            },
            {
                id: 'val-fill',
                title: 'Valentines special fill',
                price: 'On me ♡',
                duration: '2 hours',
                desc: 'The follow-up fill for the Valentines Special.',
                img: IMAGES.services.fills,
                special: true
            },
        ]
    },
    {
        category: "Lash Sets",
        id: "lash-sets",
        image: IMAGES.services.lashSets,
        items: [
            {
                id: 'natural',
                title: 'Natural lash set',
                price: '$215.00',
                duration: '3 hours',
                desc: 'Includes: Wet set, Anime set, Wispy natural lashes, or Wispy/natural looking set.',
                img: IMAGES.services.natural,
                hasDetail: true
            },
            {
                id: 'volume',
                title: 'Volume lash set',
                price: '$230.00',
                duration: '3 hours',
                desc: 'Includes: Volume set, Mega volume set, or Wispy volume/Mega volume set.',
                img: IMAGES.services.volume,
                hasDetail: true
            },
            {
                id: 'mega-volume',
                title: 'Mega volume set',
                price: '$250.00',
                duration: '4 hours',
                desc: 'Includes the boldest, darkest, most dramatic lash look possible.',
                img: IMAGES.services.mega,
                hasDetail: true
            },
        ]
    },
    {
        category: "Fills & Maintenance",
        id: "fills",
        image: IMAGES.services.fills,
        items: [
            {
                id: 'mini-fill',
                title: 'Mini fill',
                price: '$50.00',
                duration: '45 mins',
                desc: '15 minute set up + 30 minutes fill.',
                img: IMAGES.services.fills,
                hasDetail: true
            },
            {
                id: 'fills',
                title: 'Natural fill',
                price: '$100.00',
                duration: '1h 40m',
                desc: 'Includes: Wet set, Anime set, Wispy set.',
                img: IMAGES.services.natural,
                hasDetail: true
            },
            {
                id: 'volume-fill',
                title: 'Volume fill',
                price: '$115.00',
                duration: '1h 40m',
                desc: 'Includes: Volume set, Mega volume set, Wispy volume/mega set.',
                img: IMAGES.services.volume
            },
        ]
    },
    {
        category: "Brows & Other",
        id: "brows",
        image: IMAGES.services.brows,
        items: [
            {
                id: 'sideburn-wax',
                title: 'Sideburn wax',
                price: '$15.00',
                duration: '30 mins',
                desc: 'Clean up needed area.',
                img: IMAGES.services.brows
            },
            {
                id: 'brow-bundle',
                title: 'Brow bundle',
                price: '$100.00',
                duration: '1h 10m',
                desc: 'Includes brow lamination (4-6 weeks), wax, shape, and tint (14+ days).',
                img: IMAGES.services.brows
            },
            {
                id: 'brow-wax',
                title: 'Brow wax & shape',
                price: '$15.00',
                duration: '40 mins',
                desc: 'Precision shaping and waxing.',
                img: IMAGES.services.brows
            },
            {
                id: 'lift-tint',
                title: 'Lash lift & tint',
                price: '$100.00',
                duration: '50 mins',
                desc: 'Enhance your natural lashes.',
                img: IMAGES.services.lift
            },
            {
                id: 'removal',
                title: 'Lash Removal',
                price: '$30.00',
                duration: '45 mins',
                desc: 'Safe and gentle removal.',
                img: IMAGES.services.fills,
                hasDetail: true
            },
        ]
    }
]
