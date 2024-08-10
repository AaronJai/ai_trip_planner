'use client';

import Footer from '@/components/Footer';
import Hotels from '@/components/Hotels';
import InfoSection from '@/components/InfoSection';
import Itinerary from '@/components/Itinerary';
import { db } from '@/service/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';

const ViewTrip =  () => {
    const {tripId} = useParams();
    const [Trip, setTrip] = useState<any>({});

    useEffect(() => {
        tripId && GetTripData();
    }, [tripId])

    // Used to get trip information from Firebase
    const GetTripData = async () => {
        const docRef = doc(db, "AITrips", tripId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data: ", docSnap.data());
            setTrip(docSnap.data());
        }
        else {
            console.log("No such document!");
            toast.error("No trip found!");
        }
    }

    return (
        <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
            {/* information section */}
            <InfoSection trip={Trip} />

            {/* Recommended Hotels */}
            <Hotels trip={Trip} />

            {/* Daily plan */}
            <Itinerary trip={Trip} />

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default ViewTrip