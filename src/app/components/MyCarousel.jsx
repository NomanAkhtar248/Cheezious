"use client"
import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"
import bunners from '@/app/data/bunners.json'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const MyCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  let images=[
    '/images/Banner4.jpg',
    '/images/Banner2.jpg',
    '/images/Banner5.jpg',
    '/images/Banner3.jpg',
    '/images/benur1.jpg',
  ]
  return (
    <div className='px-2 overflow-hidden'>
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-auto relative"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        >       
        <CarouselContent className=''>
        {images.map((img, index ) => (
          <CarouselItem key={index}>
            <div className="p-2">                          
                  <span className='relative'>
                     <Skeleton className="w-100% h-90 rounded-xl" />
                    <Image src={img} fill className='w-full h-auto object-cover rounded-lg absolute '/>              
                  </span>      
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className=' text-orange-400 rounded-lg'>
        <CarouselPrevious className='absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-orange-500 text-white hover:bg-red-500 hover:text-white'/>
        <CarouselNext className='absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-orange-500 text-white hover:bg-red-500 hover:text-white'/>
      </div>
      </Carousel>
    </div>
  )
}

export default MyCarousel