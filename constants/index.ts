export const SelectBudgetOptions = [
    {
        id: 1,
        title: 'Cheap',
        desc: 'Stay conscious of costs',
        icon: '💸',
        budget: 'Low'
    },
    {
        id: 2,
        title: 'Moderate',
        desc: 'Keep cost on the average side',
        icon: '💰',
        budget: 'Mid'
    },
    {
        id: 3,
        title: 'Luxury',
        desc: "Don't worry about cost",
        icon: '💎',
        budget: 'High'
    }
]

export const SelectTravelList = [
    {
        id: 1,
        title: 'Just Me',
        desc: 'I am travelling solo',
        icon: '✈︎',
        people: '1'
    },
    {
        id: 2,
        title: 'A Couple',
        desc: 'I am travelling with my partner',
        icon: '👫',
        people: '2'
    },
    {
        id: 3,
        title: 'Family',
        desc: 'I am travelling with my family',
        icon: '👨‍👩‍👧‍👦',
        people: '3+'
    },
    {
        id: 4,
        title: 'Friends',
        desc: 'I am travelling with my friends',
        icon: '👯‍♂️',
        people: '4+'
    }
]

export const AI_PROMPT = "Generate travel plan for the location: {location}, for {totalDays} day(s), for {people} person/people with a {budget} budget. Provide hotel options list with Hotel Name, Hotel Address, Price, Hotel Image URL, Geo coordinates, Rating, Descriptions. Suggest an itinerary with Place Name, Place Details, Place Image Url, Geo coordinates, any Ticket pricing, Rating, time travel to each of the location(s) for {totalDays} days and plan the best time to visit in JSON format"

