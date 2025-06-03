import React from 'react';
import mobBunner from '@/app/data/mobBunner.json';
import { Skeleton } from "@/components/ui/skeleton"
import Image from 'next/image';
const MobBunner = () => {
  return (
    <div className="px-4 sm:px-10 bg-white py-2">
      {mobBunner.map((mobdata) => (
        <div key={mobdata.id} className="rounded-xl overflow-hidden mb-4 text-center">
          <div className="block lg:hidden">          
            <div className="w-full h-screen relative">
               <Skeleton className="h-100 w-full rounded-xl" />
              <Image
                src={mobdata.imgUrl1} fill
                alt="Mobile Banner"
                className="w-full h-full object-cover absolute"
              />
            </div>            
            <div className="text-black px-4 sm:px-8 pt-2 pb-6">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                {mobdata.title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
                {mobdata.texte}
              </p>
            </div>
          </div>

          <div
            className="hidden lg:flex relative w-full h-[550px] rounded-xl bg-cover bg-center text-center items-center justify-center"
            style={{ backgroundImage: `url(${mobdata.imgUrl})` }} fill>
              
            <div className=" w-full text-black px-10 py-6 rounded-b-xl">
              <h1 className="text-3xl font-bold mb-2 line-clamp-1">{mobdata.title}</h1>
              <p className="text-lg max-w-140 mx-auto line-clamp-2 px-20">{mobdata.texte}</p>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default MobBunner;
