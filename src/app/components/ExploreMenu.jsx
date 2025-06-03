import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import exManu from '@/app/data/exManu.json'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Skeleton } from "@/components/ui/skeleton"
import Image from 'next/image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const ExploreMenu = () => {
    return (
        <div>
        <div className='px-4 sm:px-15 md:px-15 lg:px-40 py-6 sm:mr-8 sm:ml-8 overflow-hidden'>
            <div className='flex justify-between '>
            <h1 className='text-2xl font-bold mb-6 text-center lg:text-left'>Explore Menu</h1>
            <Link href="/menu">
            <Button variant="ghost" className='text-orange-400 hover:text-orange-400 font-sans font-bold cursor-pointer'>VIEW ALL</Button>
            </Link>
            </div>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
            >
                <CarouselContent>
                    {exManu.map((item) => (
                        <CarouselItem key={item.id} 
                        className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                            <div className="p-2 relative">
                                <Card  className="flex flex-col items-center justify-center p-3 md:p-4 shadow-md transition border-yellow-400 line-clamp-1 cursor-pointer">
                                      <div className='relative w-full aspect-square overflow-hidden'>
                                        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                                         <Image  src={item.imgUrl} fill  className='rounded-lg absolute'  />
                                        </div>
                                        <h4 className='text-center line-clamp-1 text-sm '>{item.title}</h4>                                
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className='absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-orange-500 rounded-lg hover:text-white cursor-pointer'/>
                <CarouselNext className='absolute right-0 top-1/2  bg-white hover:bg-orange-500 rounded-lg hover:text-white cursor-pointer'/>
            </Carousel>
        </div>
        </div>
    )
}

export default ExploreMenu