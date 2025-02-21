"use client"

import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

interface ImageCarouselProps {
  images: {
    src: string
    alt: string
  }[]
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const plugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))

  return (
    <div className="relative">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="relative aspect-[4/3]">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2" />
      </Carousel>
    </div>
  )
}

