import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className='w-full flex justify-center items-center flex-col'>
            <h1 className='head_text ai_trip_gradient'>
                <span className='ai_trip_gradient'>Dicover Your Next Adventure with AI: <br className='max-md:hidden' /></span>
                 Personalise your travel experience
            </h1>

            <h2 className='desc'>
                Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
            </h2>

            <Link href='/create-trip'>
                <Button className='mt-5'>Get Started</Button>
            </Link>
        </div>
    )
}

export default Hero