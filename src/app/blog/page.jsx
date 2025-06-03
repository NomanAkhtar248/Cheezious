import React from 'react'
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import blogdata from "@/app/data/blogdata.json"
import Link from 'next/link'

const Blog = () => {
    const [first, second, third] = blogdata;

    return (
        <div className='px-4 sm:px-6 lg:px-20 overflow-hidden'>
            <h1 className='text-2xl font-bold mb-6 text-center lg:text-left'>Blogs</h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {/* Large image on the left (spans 2 columns on lg screens) */}
                <Link href={`../blog/${first.slug}`} className='lg:col-span-2'>
                    <div
                        className='w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] bg-cover bg-center relative rounded-xl overflow-hidden'
                        style={{ backgroundImage: `url('${first.imgUrl}')` }}
                    >
                        <div className='absolute inset-0 p-1 flex flex-col justify-end cursor-pointer '>
                            <div className="bg-black/70 px-4 py-3 text-white rounded-md">
                                <p className='text-sm'>{first.title}</p>
                                <div className='flex justify-between items-center mt-3'>
                                    <p className='text-sm md:text-base'>Learn more..</p>
                                    <Button variant="outline" size="icon" className='rounded-full text-black bg-white hover:bg-black hover:text-white group'>
                                        <ChevronRight className='text-orange-600 group-hover:text-white transition-colors' />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>

                {/* Two stacked blog items */}
                <div className='flex flex-col gap-6'>
                    {[second, third].map((item) => (
                        <Link key={item.id} href={`../blog/${item.slug}`} className='w-full'>
                            <div
                                className='w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-[290px] bg-cover bg-center relative rounded-xl overflow-hidden'
                                style={{ backgroundImage: `url('${item.imgUrl}')` }}
                            >
                                <div className='absolute inset-0 p-1 flex flex-col justify-end cursor-pointer'>
                                    <div className="bg-black/70 px-1 py-1 text-white rounded-md">
                                        <p className='text-sm md:text-xl '>{item.title}</p>
                                        <div className='flex justify-between items-center mt-2'>
                                            <p className='text-sm'>Learn more..</p>
                                            <Button variant="outline" size="i" className=' rounded-full text-black bg-white hover:bg-black hover:text-white group'>
                                                <ChevronRight className='text-orange-600 group-hover:text-white transition-colors' />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="mt-10 flex flex-col w-full bg-gray-100 justify-center items-center text-sm text-center py-5 text-gray-600 gap-2">
                <h2>Cheezious Copyright © 2025. All Rights Reserved.</h2>
                <h4>TERMS & CONDITIONS | PRIVACY POLICY</h4>
            </div>
        </div>
    )
}

export default Blog;
