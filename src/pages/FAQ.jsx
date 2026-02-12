import Section from '../components/ui/Section'
import SEO from '../components/core/SEO'

const FAQ = () => {
    const questions = [
        {
            q: "How long do your lash extensions last?",
            a: "With proper aftercare, Rarity Aesthetics lash extensions typically last 2-4 weeks before a fill is needed. We use premium adhesives and advanced application techniques to maximize retention suitable for the dry Colorado climate."
        },
        {
            q: "Do you offer foreign fills (fills on work from other artists)?",
            a: "Yes, we accept foreign fills on a case-by-case basis. If the existing work is healthy and isolated correctly, we can fill it. If not, a removal and full set may be recommended for the health of your natural lashes."
        },
        {
            q: "Where is Rarity Aesthetics located?",
            a: "We are located at 9101 Pearl St, Thornton, CO. We serve clients from Denver, Northglenn, Westminster, and surrounding areas looking for high-end lash artistry."
        },
        {
            q: "How should I prepare for my appointment?",
            a: "Please arrive with completely clean lashes, free of mascara, makeup, and oils. Avoid caffeine beforehand to keep your eyes calm. Plan to relax for 2-3 hours for a full set."
        },
        {
            q: "What is the difference between Volume and Mega Volume?",
            a: "Volume lashes use lighter fans (3D-6D) for a fluffy, full look. Mega Volume uses ultra-fine fans (10D+) for the darkest, densest, and most dramatic result. We specialize in both techniques."
        }
    ]

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": questions.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
            }
        }))
    }

    return (
        <Section>
            <SEO
                title="FAQ | Lash Extensions Thornton, CO"
                description="Answers to common questions about lash extensions, aftercare, and booking at Rarity Aesthetics in Thornton, CO."
                canonical="/faq"
                schema={faqSchema}
            />
            <h1 className="font-playfair text-4xl text-center text-rarity-navy mb-12">Frequently Asked Questions</h1>

            <div className="max-w-3xl mx-auto space-y-6">
                {questions.map((item, i) => (
                    <div key={i} className="bg-white/50 backdrop-blur-sm border border-rarity-navy/10 p-6 rounded-2xl hover:shadow-md transition-all">
                        <h3 className="font-playfair text-xl text-rarity-navy mb-3 font-semibold">
                            {item.q}
                        </h3>
                        <p className="font-lato text-gray-600 leading-relaxed">
                            {item.a}
                        </p>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <p className="font-lato text-gray-500 mb-4">Still have questions?</p>
                <a href="/contact" className="text-rarity-gold font-bold uppercase tracking-widest text-xs hover:text-rarity-navy transition-colors">Contact Us</a>
            </div>
        </Section>
    )
}

export default FAQ
