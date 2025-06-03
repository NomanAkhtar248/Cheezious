import React from 'react'
import mydata from "@/app/data/logindata.json"
import { Button } from "@/components/ui/button";
import { PhoneCall } from 'lucide-react';
import Link from 'next/link';

const page = () => {
    return (
        <div>
            {mydata.map((login) => (
                <div key={login.id} className="flex flex-col lg:flex-row h-screen overflow-hidden">

                    {/* Left Side - Content */}
                    <div className="w-full lg:w-3/5 flex flex-col lg:justify-between p-6 lg:p-10">
                        
                        {/* Logo Top-Left (hidden on small screens if you want) */}
                        <div className="mb-4 lg:mb-0">
                            <img
                                src="/mainLogo.webp"
                                alt="Cheezious"
                                width={160}
                                height={42}
                                className="mx-auto lg:mx-0"
                            />
                        </div>
                        {/* Responsive Centered Text + Buttons */}
                        <div className="flex-grow flex items-center justify-center mt-20">
                            <div className="text-center space-y-6 w-full max-w-md">
                                <h1 className="text-2xl md:text-3xl font-bold">{login.title}</h1>
                                <p className="text-lg text-gray-600">{login.text}</p>
                                <div className=" space-y-4 w-full">
                                    <Link href='/login/phone-number'passHref className='flex flex-col'>
                                    <Button
                                        variant="ghost"
                                        className='bg-yellow-400 hover:bg-gray-600 px-4 py-6 font-bold text-lg flex items-center justify-center cursor-pointer'
                                    >
                                        <PhoneCall className="h-8 w-8 mr-2 fill-black" />
                                        CONTINUE WITH PHONE
                                    </Button>
                                    </Link>
                                   <Link href="/" className='flex flex-col'>
                                    <Button
                                        variant="outline"
                                        className='bg-white hover:bg-orange-600 px-4 py-6 font-bold text-lg flex items-center justify-center cursor-pointer'
                                    >
                                        <img
                                            src='https://cheezious.com/_next/static/media/guest.ae7a0bbc.svg'
                                            className='h-6 w-6 mr-2'
                                            alt="Guest Icon"
                                        />
                                        CONTINUE AS A GUEST
                                    </Button>
                                   </Link>
                                </div>
                            </div>
                        </div>

                        {/* Optional Bottom Space or Footer */}
                        <div></div>
                    </div>

                    {/* Right Side - Image (hidden on md and below) */}
                    <div className="w-2/5 h-screen hidden lg:block">
                        <img
                            src={login.imgUrl}
                            alt="Visual"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default page
