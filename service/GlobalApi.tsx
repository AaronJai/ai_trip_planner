import axios from "axios"

const BASE_URL='https://places.googleapis.com/v1/places:searchText'

const config = {
    headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        'X-Goog-FieldMask': 'places.photos,places.displayName,places.id',
        // 'X-Goog-FieldMask': [
        //     'places.photos',
        //     'places.displayName',
        //     'places.id',
        // ]
    },
}

export const GetPlaceDetails = (data: { textQuery: any; }) => 
    axios.post(BASE_URL, data, config);
