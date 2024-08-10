import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button';
import { IoSend } from "react-icons/io5";


const InfoSection = ({trip}: {trip: any}) => {

    // Check if the nested properties exist
    const formattedAddress = trip?.userSelection?.location?.formatted_address;
    const totalDays = trip?.userSelection?.totalDays;
    const budget = trip?.userSelection?.budget;
    const totalPeople = trip?.userSelection?.people;
    

    return (
        <div>
            <Image
                src="/placeholder.png"
                alt='placeholder'
                width={3000}
                height={3000}
                className='h-[340px] w-full object-cover rounded-xl'
            />

            <div className='flex justify-between items-center'>
                <div className='my-5 flex flex-col gap-2'>
                    <h2 className='font-bold text-2xl'>
                        {formattedAddress ? formattedAddress : 'Address not available'}
                    </h2>
                    
                    <div className='flex gap-5'>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 xs:text-md md:text-lg'>
                            {totalDays ? `📆 ${totalDays} Day(s)` : 'Days not available'}
                        </h2>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 xs:text-md md:text-lg'>
                            {budget ? `💰 ${budget} Budget` : 'Budget not available'}
                        </h2>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 xs:text-md md:text-lg'>
                            {totalPeople ? `🥂 ${totalPeople} Person(s)` : 'Person(s) not available'}
                        </h2>
                    </div>
                </div>

                <Button><IoSend /></Button>

            </div>



        </div>
    )
}

export default InfoSection