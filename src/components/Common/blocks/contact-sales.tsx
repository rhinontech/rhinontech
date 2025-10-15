import React from 'react'
import { Button } from '../../ui/button'
import Link from 'next/link'

export default function ContactSales() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto  px-4 md:px-0">
      <div className="text-center md:text-left mb-6 md:mb-0">
        <h1 className="text-3xl sm:text-4xl font-semibold">
           See how your team can grow with Rhinon
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <Button className="bg-[#323237] rounded-[9px] border-gray-500 border-[1.1px] text-white">
          Book a Demo
        </Button>
        <Button className="bg-white text-black rounded-[9px]">
          <Link href="https://app.rhinontech.com/auth/signup">
           Get Started
           </Link>
        </Button>
      </div>
    </div>
  )
}
