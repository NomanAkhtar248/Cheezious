import React from 'react'
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import blogdata from "@/app/data/blogdata.json"
import Link from 'next/link'
const Blog = () => {
  return (
    <div className='py-10 px-6 lg:px-30 overflow-hidden'>      
      <div className='flex justify-between'>
        <h1 className='text-2xl font-bold mb-6 text-center lg:text-left'>Blogs</h1>
        <Link href='/blog'>
        <Button variant="ghost" className='text-orange-400 hover:text-orange-400 font-sans font-bold cursor-pointer'>VIEW ALL</Button>
        </Link>
      </div>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 cursor-pointer'>
        {blogdata.map((myblog) => (
          <Link key={myblog.id} href={`../blog/${myblog.slug}`}>
          <div className='h-80 rounded-xl overflow-hidden bg-cover flex items-baseline-last justify-center'
            key={myblog.id}
            style={{
              backgroundImage: `url('${myblog.imgUrl}')`,
            }}
          >
            <div className=' px-3 bg-black opacity-70 text-white'>
              <p>{myblog.title}</p>
               <div className='flex justify-between mt-5'>
                 <p>Learn more..</p>
                 <Button variant="outline" size="icone" className='cursor-pointer rounded-full mb-2 text-black'>
                    <ChevronRight />
                  </Button>
              </div>
              
            </div>
          </div>
          </Link>
        ))}
      </div>
       
    </div>
  )
}

export default Blog