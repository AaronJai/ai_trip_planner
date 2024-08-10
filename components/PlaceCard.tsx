import Image from 'next/image'
import React from 'react'
import { FaMapLocationDot } from "react-icons/fa6";
import { Button } from './ui/button';
import Link from 'next/link';


const PlaceCard = ({place}: any) => {
    return (
        <Link href={`https://www.google.com/maps/search/?api=1&query=${place.placeName}+${place.Geocoordinates}`} target='_blank'>
            <div className='border rounded-xl p-3 mt-3 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer'>
                <Image
                    src="/placeholder.png"
                    alt='placeholder'
                    width={3000}
                    height={3000}
                    className='w-[200px] h-[200px] rounded-xl'
                />

                <div>
                    <h2 className='font-bold text-lg'>{place.placeName}</h2>
                    <p className='text-sm text-gray-400'>{place.PlaceDetails}</p>
                    <h2 className='mt-2 font-xs'>Cost: {place.ticketPricing}</h2>
                    {/* <Button size='sm'><FaMapLocationDot /></Button> */}

                </div>
            </div>
        
        </Link>
    )
}

export default PlaceCard