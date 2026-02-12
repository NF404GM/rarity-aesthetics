const ImageSkeleton = ({ className = '' }) => {
    return (
        <div className={`animate-pulse bg-gradient-to-r from-white/5 via-white/10 to-white/5 bg-[length:200%_100%] animate-shimmer ${className}`} />
    )
}

export default ImageSkeleton
