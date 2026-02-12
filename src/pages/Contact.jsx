import { motion } from 'framer-motion'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import ScrollReveal from '../components/ui/ScrollReveal'
import SEO from '../components/core/SEO'
import { MapPin, Mail, Instagram, Phone } from 'lucide-react'

const Contact = () => {
    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "mainEntity": {
            "@type": "BeautySalon",
            "name": "Rarity Aesthetics",
            "telephone": "+17205550123", // Value to be updated
            "email": "Ashley@rarity-aesthetics.com",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "9101 Pearl St",
                "addressLocality": "Thornton",
                "addressRegion": "CO",
                "postalCode": "80229",
                "addressCountry": "US"
            }
        }
    }

    return (
        <Section>
            <SEO
                title="Contact | Rarity Aesthetics - Thornton, CO"
                description="Book your appointment today. Located at 9101 Pearl St, Thornton, CO. Text or email for inquiries."
                canonical="/contact"
                schema={contactSchema}
            />

            <ScrollReveal variant="fade-up" className="text-center mb-12">
                <span className="text-rarity-gold font-montserrat text-xs tracking-[0.3em] uppercase font-bold mb-4 block">
                    Get in Touch
                </span>
                <h1 className="font-playfair text-4xl md:text-5xl text-rarity-navy">
                    Visit Our Studio
                </h1>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                {/* Left: Contact Info + Map */}
                <ScrollReveal variant="fade-right" className="space-y-8">
                    <p className="font-lato text-gray-600 leading-relaxed">
                        Have questions about our services? We'd love to hear from you. Reach out directly or fill out the form and we'll get back to you within 24 hours.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-rarity-navy">
                            <div className="w-10 h-10 bg-rarity-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-4 h-4 text-rarity-gold" />
                            </div>
                            <div>
                                <p className="font-lato font-bold">Studio Location</p>
                                <p className="font-lato text-gray-500 text-sm">9101 Pearl St, Thornton, CO 80229</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-rarity-navy">
                            <div className="w-10 h-10 bg-rarity-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                                <Mail className="w-4 h-4 text-rarity-gold" />
                            </div>
                            <div>
                                <p className="font-lato font-bold">Email</p>
                                <a href="mailto:Ashley@rarity-aesthetics.com" className="font-lato text-gray-500 text-sm hover:text-rarity-gold transition-colors">
                                    Ashley@rarity-aesthetics.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-rarity-navy">
                            <div className="w-10 h-10 bg-rarity-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                                <Instagram className="w-4 h-4 text-rarity-gold" />
                            </div>
                            <div>
                                <p className="font-lato font-bold">Instagram</p>
                                <a href="https://www.instagram.com/therarityaesthetics" target="_blank" rel="noreferrer" className="font-lato text-gray-500 text-sm hover:text-rarity-gold transition-colors">
                                    @therarityaesthetics
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Google Maps Embed */}
                    <div className="rounded-2xl overflow-hidden border border-rarity-navy/10 shadow-lg aspect-video">
                        <iframe
                            title="Rarity Aesthetics Studio Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3061.5!2d-104.9783!3d39.8636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDUxJzQ5LjAiTiAxMDTCsDU4JzQxLjkiVw!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                        />
                    </div>
                </ScrollReveal>

                {/* Right: Contact Form */}
                <ScrollReveal variant="fade-left" delay={0.15}>
                    <form className="space-y-4 bg-white/30 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border border-rarity-navy/5 shadow-sm">
                        <h3 className="font-playfair text-2xl text-rarity-navy mb-2">Send a Message</h3>
                        <p className="text-gray-500 text-sm mb-6">We typically respond within 24 hours.</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="border border-rarity-navy/10 p-3 w-full rounded-xl bg-white/50 focus:outline-none focus:ring-2 focus:ring-rarity-gold font-lato transition-all"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="border border-rarity-navy/10 p-3 w-full rounded-xl bg-white/50 focus:outline-none focus:ring-2 focus:ring-rarity-gold font-lato transition-all"
                            />
                        </div>
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="border border-rarity-navy/10 p-3 w-full rounded-xl bg-white/50 focus:outline-none focus:ring-2 focus:ring-rarity-gold font-lato transition-all"
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number (optional)"
                            className="border border-rarity-navy/10 p-3 w-full rounded-xl bg-white/50 focus:outline-none focus:ring-2 focus:ring-rarity-gold font-lato transition-all"
                        />
                        <select className="border border-rarity-navy/10 p-3 w-full rounded-xl bg-white/50 focus:outline-none focus:ring-2 focus:ring-rarity-gold font-lato transition-all text-gray-500">
                            <option value="">What are you interested in?</option>
                            <option>Lash Full Set</option>
                            <option>Lash Fill</option>
                            <option>Product Inquiry</option>
                            <option>General Question</option>
                        </select>
                        <textarea
                            placeholder="Your message..."
                            className="border border-rarity-navy/10 p-3 w-full h-32 rounded-xl bg-white/50 focus:outline-none focus:ring-2 focus:ring-rarity-gold font-lato transition-all resize-none"
                        />
                        <motion.div whileTap={{ scale: 0.98 }}>
                            <Button variant="primary" className="w-full">Send Message</Button>
                        </motion.div>
                    </form>
                </ScrollReveal>
            </div>
        </Section>
    )
}

export default Contact
