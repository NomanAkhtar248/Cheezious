'use client'
import React from 'react'
import mydata from "@/app/data/branches.json"
import { Button } from "@/components/ui/button"
import { MoveLeft } from 'lucide-react'
import Link from 'next/link'

const Page = () => {
    return (
        <div className="flex h-screen">
            {/* Left Section - Branch Cards */}
            <div className="w-full lg:w-1/2 flex flex-col">
                {/* Header */}
                <div className="flex items-center text-3xl font-bold gap-4 px-4 py-4">
                    <Link href="/" className="cursor-pointer">
                        <MoveLeft size={30} strokeWidth={2.25} />
                    </Link>
                    <h1>Branch Locator</h1>
                </div>

                {/* Search Inputs */}
                <div className="flex flex-col md:flex-row gap-4 px-6 mb-4">
                    <input
                        type="text"
                        placeholder="Select City"
                        className="p-2 border border-gray-300 rounded-md w-full"
                    />
                    <input
                        type="text"
                        placeholder="Search Branch"
                        className="p-2 border border-gray-300 rounded-md w-full"
                    />
                </div>

                {/* Branch Cards */}
                <div className="flex flex-col gap-6 px-6 pb-6  overflow-auto rounded-lg top-1/3 p-4 shadow-lg">
                    {mydata.map((branchdata) => (
                        <div
                            className="flex flex-col bg-gray-200 p-6 rounded-lg shadow"
                            key={branchdata.id}
                        >
                            <div className="flex gap-3 items-center">
                                <img src={branchdata.imgUrl} alt={branchdata.name}
                                    className="w-10 h-10"
                                />
                                <h2 className="">{branchdata.name}</h2>
                            </div>
                            <p className=" text-gray-700 py-4">{branchdata.address}</p>
                            <hr className='text-black' />
                            <Button variant="secondary" className="w-30 bg-orange-500 text-white cursor-pointer hover:bg-gray-600 hover:text-black">
                                VIEW DETAILS
                            </Button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Section - Google Map (Hidden on sm/md) */}
            <div className="hidden lg:block w-1/2 p-4 mt-10">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d109299.29719631997!2d74.2043979!3d31.1207634!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1748870204530!5m2!1sen!2s"
                    width="100%"
                    height="98%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    )
}

export default Page
