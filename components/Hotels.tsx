import { Target } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hotels = ({ trip }: { trip: any }) => {
    return (
        <div>
            <h2 className='font-bold text-xl mt-5'>Hotel Recommendations</h2>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4'>
                {trip?.tripData?.hotelOptions?.map((item: any, index: number) => (
                    <Link href={`https://www.google.com/maps/search/?api=1&query=${item?.HotelName}+${item?.HotelAddress}`} target='_blank'>
                    
                        <div key={index} className='hover:scale-105 transition-all cursor-pointer'>
                            <Image
                                src="/placeholder.png"
                                alt='placeholder'
                                width={3000}
                                height={3000}
                                className='rounded-lg'
                            />

                            <div className='my-3 flex flex-col gap-2'>
                                <h2 className='font-medium'>{item?.HotelName}</h2>
                                <h2 className='text-xs text-gray-500'>📍 {item?.HotelAddress}</h2>
                                <h2 className='text-sm'>💰 {item?.Price}</h2>
                                <h2 className='text-sm'>⭐ {item?.Rating}</h2>
                            </div>
                        </div>

                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Hotels;