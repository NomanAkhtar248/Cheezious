"use client"
import React, { useState } from 'react'
import { AlignRight } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { PhoneCall } from 'lucide-react';
import { UserRound } from 'lucide-react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger, } from "@/components/ui/sheet"
const Mysheet = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className='flex items-center'>
                <Sheet open={open} onOpenChange={() => setOpen(value => !value)}>
                    <SheetTrigger asChild>
                        <img src='https://cheezious.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstack.54881ee4.png&w=128&q=75'
                            width={32}
                            height={32}
                        />
                    </SheetTrigger>
                    <SheetContent side='left' className='w-[300px] sm:[200px]' aria-label='Naviga'>
                        <nav className='flex  gap-2 px-10 py-5 mt-12 '>

                            <UserRound className='w-12 h-12 py-2 px-2 rounded-full text-black bg-yellow-400 cursor-pointer' />

                            <div className='text-sm  gap-3 mt-1'>
                                <p>login to explore</p>
                                <p className='font-bold mt-1'>World of flavors</p>
                            </div>

                        </nav>
                        <div className='px-10 pointer-coarse'>
                            <Link href='/login'>
                            <button className='py-2 px-4 items-center border-1 border-black rounded-lg w-20 h-auto hover:bg-orange-400 mt-0 cursor-pointer'>
                                Login
                            </button>
                            </Link>
                        </div>
                        <hr className='h-1' />
                        
                            <Link href='/menu'className='flex gap-4 px-10 cursor-pointer'>
                            <img src='https://cheezious.com/_next/static/media/square.da19243b.svg'
                                height={24}
                                width={24}
                            />
                            <h2>Explor Menu</h2>
                            </Link>                       
                            <Link href='/branches' className='flex cursor-pointer gap-4 px-10'>
                            <img src='https://cheezious.com/_next/static/media/store.a7543dfa.svg' />
                            <h2>Branch Locator</h2>
                            </Link>                        
                        <hr />
                        <div className='px-10'>
                            <Link href='/blog'>
                            <p className='mb-2'>Blog</p>
                            </Link>
                            <Link href='/privacy-policy'>
                            <p>Privacy policy</p>
                            </Link>
                        </div>
                        <footer className="bg-yellow-400 px-4 mt-auto">
                            <div className="flex items-center gap-4">
                                <img
                                    src="/cheezious logo.png"
                                    alt="Cheezious Logo"
                                    className="h-20 w-20"
                                />
                                <h2 className="text-lg font-semibold">Cheezious Hotline</h2>
                                <PhoneCall className="h-6 w-6 ml-2" />
                            </div>
                        </footer>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    )
}

export default Mysheet