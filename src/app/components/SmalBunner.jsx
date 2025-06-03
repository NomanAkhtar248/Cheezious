import React from 'react'
import smallbunner from '@/app/data/smallbunner'
import { Skeleton } from "@/components/ui/skeleton"
import Image from 'next/image'
const SmalBunner = () => {
  return (
    
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-10 md:px-20 items-start mb-15 overflow-hidden'>
      {smallbunner.map((mybunner) =>(
        <div key={mybunner.id}>
          <div className='relative'>
             <Skeleton className="w-70 h-70 rounded-xl" />
            <Image src={mybunner.imgUrl} fill className='w-auto h-full rounded-lg '/>
            </div>            
            <h1 className='font-bold text-2xl line-clamp-2 mt-8 max-w-70'>{mybunner.title}</h1>

        </div>
      ))}
    </div>
  )
}

export default SmalBunner