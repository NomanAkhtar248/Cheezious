import React from 'react'
import Mysheet from './Mysheet'
import { Button } from "@/components/ui/button"
import { ShoppingCart, UserRound } from 'lucide-react';
import Link from 'next/link';

const Mainnav = ({ cartCount }) => {
  return (
    <header className='sticky top-0 z-50 border-b bg-white overflow-hidden border-2 border-amber-400'>
      <div className='flex justify-between px-4 h-20'>
        <div className='flex items-center gap-4 cursor-pointer'>
          <Mysheet />
          <div className='w-[160px] h-[42px] md:gap-10'>
            <img src='/mainLogo.webp' alt='Cheezious' width={160} height={42} />
          </div>
        </div>

        <div className='justify-end items-center gap-8 font-bold hidden md:flex lg:gap-4'>
          <Button variant="secondary" className='relative lg:bg-yellow-400 text-black py-5 px-6 cursor-pointer'>
            <ShoppingCart className='lg:fill-black w-6 h-6' />
            <span className='hidden lg:block ml-2'>CART</span>

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Button>

          <Link href='/login'>
            <Button variant="secondary" className='lg:bg-yellow-400 text-black py-5 px-6 cursor-pointer'>
              <UserRound className='lg:fill-black w-[45px] h-[45px]' />
              <span className='hidden lg:block'>LOGIN</span>
            </Button>
          </Link>
        </div>

        <div className='flex items-center md:hidden gap-2 text-orange-400'>
          <ShoppingCart />
          <UserRound />
        </div>
      </div>
    </header>
  )
}

export default Mainnav;
