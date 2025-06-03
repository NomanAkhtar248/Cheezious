import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
const myButton = () => {
    return (
        <div className="fixed bottom-13 right-15 z-50">
            <Link href="/menu">

            <Button variant="secondary" className='bg-orange-500 px-4 py-5 text-white hover:bg-orange-500 cursor-pointer'>ORDER NOW</Button>
           
            </Link>
        </div>
    )
}

export default myButton