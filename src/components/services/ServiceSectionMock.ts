const ServiceSection = ({ section, index }) => {
    return (
        <section
            id= { section.id }
    className = "sticky top-0 min-h-screen flex flex-col pt-24 lg:pt-32 transition-all duration-500 ease-out"
    style = {{ zIndex: index + 10 }
}
        >
    <div className="bg-rarity-cream rounded-t-[2.5rem] md:rounded-t-[3.5rem] shadow-[0_-25px_50px_-12px_rgba(0,0,0,0.5)] flex-grow border-t border-white/20 relative overflow-hidden flex flex-col mx-2 md:mx-6 p-8 md:p-12 lg:p-16" >

        {/* Header Row: Title & Number */ }
        < div className = "flex flex-col md:flex-row justify-between items-start md:items-end border-b border-rarity-navy/10 pb-8 mb-12" >
            <div>
            <span className="text-rarity-gold font-montserrat text-xs tracking-[0.3em] uppercase mb-4 block font-bold" >
                0{ index + 1 } — { section.category }
</span>
    < h2 className = "font-playfair text-5xl md:text-7xl text-rarity-ink leading-[0.9]" >
        { section.category === 'Lash Sets' ? 'The Collection' : section.category }
        </h2>
        </div>
        </div>

        < div className = "flex flex-col lg:flex-row gap-12 lg:gap-16" >
            {/* Left Column: Image & Description */ }
            < div className = "lg:w-1/3 flex flex-col gap-8" >
                {/* Subtle Image Integration */ }
                < div className = "relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group" >
                    <img 
                                src={ section.image }
alt = { section.category }
className = "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-rarity-ink/5 group-hover:bg-transparent transition-colors duration-500" />
        </div>

        < p className = "font-lato text-rarity-ink/70 text-lg leading-relaxed" >
            Curated services designed for longevity, health, and effortless beauty.Each set is customized to your unique eye shape.
                        </p>
                </div>

{/* Right Column: Service Grid */ }
<div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 content-start" >
{
    section.items.map((service, idx) => (
        <ServiceCard key= { service.id } service = { service } />
                        ))
}
    </div>
    </div>

    </div>
    </section>
    )
}
