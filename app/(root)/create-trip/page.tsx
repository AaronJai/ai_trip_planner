'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AI_PROMPT, SelectBudgetOptions, SelectTravelList } from '@/constants';
import React, { useEffect, useState } from 'react'
import ReactGoogleAutocomplete from 'react-google-autocomplete'
import { toast } from 'sonner';
import { useTheme } from "next-themes";
import { chatSession } from '@/service/AIModal';

const CreateTrip = () => {
    const { theme } = useTheme();

    const [place, setPlace] = useState();

    interface FormData {
        totalDays?: any;
        location?: any;
        budget?: string;
        people?: string;
    }
    
    const [formData, setFormData] = useState<FormData>({});

    const handleInputChange = (name: any, value: any) => {
        setFormData({
            ...formData,
            [name]: value
        })
    }

    useEffect(() => {
        console.log(formData);
    }, [formData])

    const OnGenerateTrip = async () => {
        if (!formData?.location || !formData?.totalDays || !formData?.budget || !formData?.people) {
            toast('Please fill all the fields');
            return;
        }

        const FINAL_PROMPT = AI_PROMPT
            .replace('{location}', formData?.location?.formatted_address)
            .replace('{totalDays}', formData?.totalDays)
            .replace('{budget}', formData?.budget)
            .replace('{people}', formData?.people)
            .replace('{totalDays}', formData?.totalDays)
            
            const result = await chatSession.sendMessage(FINAL_PROMPT);

            console.log(result?.response?.text());
    }

    return (
        <div className='max-w-4xl mx-auto sm:px-10 px-5 mt-10'>
            <h2 className='font-bold text-3xl'>
                Tell us your travel preferences
            </h2>
            <p className='mt-3 text-gray-500 text-xl'>
                Provide us some basic information, and our trip planner will curate a customised itinerary based on your preferences.
            </p>

            <div className='mt-16 flex flex-col gap-9'>
                <div>
                    <h2 className='text-xl my-3 font-medium'>
                        ✈️ What is your destination? 
                    </h2>

                    <ReactGoogleAutocomplete
                        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
                        onPlaceSelected={(place) => {
                            setPlace(place);
                            handleInputChange('location', place);
                        }}
                        className='location_input'
                    />
                </div>

                <div>
                    <h2 className='text-xl my-3 font-medium'>
                        📅 How many days? 
                    </h2>
                    <Input placeholder='Ex. 3' type='number' min={1} onChange={(e) => handleInputChange('totalDays', e.target.value)}/>
                </div>

                <div>
                    <h2 className='text-xl my-3 font-medium'>
                        🏧 What is your Budget? 
                    </h2>

                    <div className='grid grid-cols-3 gap-5 mt-5'>
                        {SelectBudgetOptions.map((item, index) => (
                            <div 
                                key={index} 
                                className={`box_border_dark ${formData?.budget === item.title && (theme === 'dark' ? 'box_border_shadow_dark' : 'box_border_shadow_light')}`}
                                onClick={() => handleInputChange('budget', item.title)}
                            >
                                <h2 className='text-4xl'>{item.icon}</h2>
                                <h2 className='font-bold text-lg'>{item.title}</h2>
                                <h2 className='text-sm text-gray-500'>{item.desc}</h2>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className='text-xl my-3 font-medium'>
                        🤔 Who do you plan on travelling with on your next adventure? 
                    </h2>

                    <div className='grid grid-cols-4 gap-5 mt-5'>
                        {SelectTravelList.map((item, index) => (
                            <div 
                                key={index} 
                                className={`box_border_dark ${formData?.people === item.people && (theme === 'dark' ? 'box_border_shadow_dark' : 'box_border_shadow_light')}`}
                                onClick={() => handleInputChange('people', item.people)}
                            >
                                <h2 className='text-4xl'>{item.icon}</h2>
                                <h2 className='font-bold text-lg'>{item.title}</h2>
                                <h2 className='text-sm text-gray-500'>{item.desc}</h2>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            
            <div className='my-10 justify-end flex'>
                <Button onClick={OnGenerateTrip}>Generate Trip</Button>

            </div>
        </div>
    )
}

export default CreateTrip