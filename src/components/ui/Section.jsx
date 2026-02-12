const Section = ({
    children,
    className = "",
    id = "",
    background = "white" // white, softBlue, cream, navy
}) => {
    const bgColors = {
        white: "bg-white",
        softBlue: "bg-rarity-softBlue",
        cream: "bg-rarity-cream",
        navy: "bg-rarity-navy text-white" // Invert text for navy bg
    }

    return (
        <section
            id={id}
            className={`section-padding ${bgColors[background]} ${className}`}
        >
            {children}
        </section>
    )
}

export default Section
