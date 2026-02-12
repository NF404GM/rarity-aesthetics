import { useState } from 'react'

const LazyImage = ({ src, alt, className = '', wrapperClassName = '', ...props }) => {
    const [isLoaded, setIsLoaded] = useState(false)

    return (
        <div className={`relative overflow-hidden ${wrapperClassName}`}>
            {/* Skeleton shimmer while loading */}
            {!isLoaded && (
                <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-white/5 via-white/10 to-white/5 bg-[length:200%_100%]" />
            )}
            <img
                src={src}
                alt={alt}
                loading="lazy"
                decoding="async"
                onLoad={() => setIsLoaded(true)}
                className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
                {...props}
            />
        </div>
    )
}

export default LazyImage
