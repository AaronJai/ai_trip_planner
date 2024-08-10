import React from 'react'
import PlaceCard from './PlaceCard'

const Itinerary = ( { trip }: { trip: any }) => {
    return (
        <div>
            <h2 className='font-bold text-xl mt-3'>Places to Visit</h2>

            <div>
                {trip?.tripData?.itinerary && Object.keys(trip?.tripData?.itinerary).reverse().map((day: string, dayIndex: number) => (
                    <div key={dayIndex} className='mt-5'>
                        <h2 className='font-semibold text-lg'>{day}</h2>

                        <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-5'>
                            {trip?.tripData?.itinerary[day]?.map((place: any, placeIndex: number) => (
                                <div key={placeIndex}>
                                    <h2 className='font-medium text-sm text-orange-600'>{place.TimeTravel}</h2>
                                    <div className='my-3'>
                                        <PlaceCard place={place} />
                                    </div>
                                    
                                </div>
                            ))}

                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Itinerary