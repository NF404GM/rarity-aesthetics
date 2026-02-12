import { useParams, Navigate } from 'react-router-dom'
import { services } from '../data/services'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import { Clock, Check } from 'lucide-react'
import SEO from '../components/core/SEO'

const ServiceDetail = () => {
    const { id } = useParams()
    const service = services.find(s => s.id === id)

    if (!service) {
        return <Navigate to="/services" replace />
    }

    return (
        <>
            <SEO
                title={service.title}
                description={service.description}
                canonical={`/services/${id}`}
            />
            {/* Hero */}
            <div className="relative h-[60vh] min-h-[400px]">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-rarity-navy/60" />
                <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                    <div className="max-w-4xl">
                        <h1 className="font-playfair text-5xl md:text-7xl text-white mb-6">{service.title}</h1>
                        <div className="flex justify-center items-center gap-6 text-white/90 font-lato text-lg">
                            <span className="font-bold text-rarity-gold text-2xl">{service.price}</span>
                            <span className="flex items-center"><Clock className="w-5 h-5 mr-2" /> {service.duration}</span>
                        </div>
                        <div className="mt-8">
                            <Button variant="primary" to="/book" className="text-lg px-10 py-4">Book This Service</Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overview & What to Expect */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="font-playfair text-3xl text-rarity-navy mb-6">Overview</h2>
                        <p className="font-lato text-gray-600 text-lg leading-relaxed mb-8">
                            {service.description}
                        </p>

                        {service.styles && service.styles.length > 0 && (
                            <div className="mt-8">
                                <h3 className="font-montserrat font-bold text-lg mb-4 text-rarity-navy">Styles Available</h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {service.styles.map(style => (
                                        <li key={style} className="flex items-center text-gray-700 bg-rarity-softBlue/30 p-3">
                                            <span className="w-2 h-2 bg-rarity-gold mr-3 rounded-full" />
                                            {style}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="bg-rarity-cream p-10">
                        <h3 className="font-playfair text-2xl text-rarity-navy mb-6">What's Included</h3>
                        <ul className="space-y-4">
                            {service.whatToExpect.map((item, i) => (
                                <li key={i} className="flex items-start">
                                    <Check className="w-5 h-5 text-rarity-gold mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700 font-lato">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-10 pt-8 border-t border-rarity-navy/10">
                            <h4 className="font-bold text-rarity-navy mb-2">Preparation</h4>
                            <p className="text-sm text-gray-600 mb-6">Please arrive with clean, makeup-free eyes. Avoid caffeine 2 hours prior to your appointment.</p>
                            <Button variant="outline" to="/faq" className="w-full !border-rarity-navy !text-rarity-navy hover:!bg-rarity-navy hover:!text-white">Read Full FAQ</Button>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}

export default ServiceDetail
