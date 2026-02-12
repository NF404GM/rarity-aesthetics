import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import SEO from '../components/core/SEO'

const Contact = () => {
    return (
        <Section>
            <SEO title="Contact | Rarity Aesthetics - Thornton, CO" description="Book your appointment today. Located at 9101 Pearl St, Thornton, CO. Text or email for inquiries." canonical="/contact" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h1 className="font-playfair text-4xl text-rarity-navy mb-6">Get in Touch</h1>
                    <p className="font-lato text-gray-600 mb-8">
                        Have questions? We'd love to hear from you. Fill out the form or reach out directly.
                    </p>

                    <div className="space-y-4 font-lato text-rarity-navy">
                        <p><strong>Email:</strong> Ashley@rarity-aesthetics.com</p>
                        <p><strong>Location:</strong> 9101 Pearl St, Thornton, CO</p>
                        <p><strong>Instagram:</strong> @therarityaesthetics</p>
                    </div>
                </div>

                <form className="space-y-4">
                    {/* Placeholder for real form fields */}
                    <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="First Name" className="border p-3 w-full" />
                        <input type="text" placeholder="Last Name" className="border p-3 w-full" />
                    </div>
                    <input type="email" placeholder="Email Address" className="border p-3 w-full" />
                    <textarea placeholder="Message" className="border p-3 w-full h-32"></textarea>
                    <Button variant="primary" className="w-full">Send Message</Button>
                </form>
            </div>
        </Section>
    )
}

export default Contact
