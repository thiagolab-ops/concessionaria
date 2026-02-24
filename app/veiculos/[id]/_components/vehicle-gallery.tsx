'use client'

import { useState } from 'react'

interface VehicleGalleryProps {
    images: string[]
    brand: string
    model: string
}

export function VehicleGallery({ images, brand, model }: VehicleGalleryProps) {
    const [activeImage, setActiveImage] = useState(0)

    const displayImages = images.length > 0 ? images : ['https://via.placeholder.com/800x600?text=Sem+Foto']

    return (
        <section className="relative w-full pt-20">
            {/* Main Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-dark">
                <img
                    src={displayImages[activeImage]}
                    alt={`${brand} ${model}`}
                    className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-black/20" />
            </div>

            {/* Thumbnails */}
            {displayImages.length > 1 && (
                <div className="relative -mt-10 mb-6 flex gap-3 overflow-x-auto hide-scrollbar px-4 pb-2 z-10 w-full scroll-smooth">
                    {displayImages.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveImage(idx)}
                            className={`relative size-20 shrink-0 overflow-hidden rounded-xl border-2 transition-all ${activeImage === idx ? 'border-primary shadow-[0_0_15px_rgba(245,159,10,0.4)] scale-105' : 'border-surface-border opacity-60 hover:opacity-100'}`}
                        >
                            <img src={img} className="h-full w-full object-cover" alt={`Thumb ${idx + 1}`} />
                        </button>
                    ))}
                </div>
            )}
        </section>
    )
}
