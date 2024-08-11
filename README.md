# AI TRIP PLANNER
Utilise AI to plan and create a trip itinerary

## Tech Stack
⭐ Next.js
⭐ TypeScript
⭐ TailwindCSS
⭐ ShadCN
⭐ Google Maps API's
⭐ Gemini API
⭐ Firebase

## Features
👉 User Input: Location (uses Google's Places API), Number of days visting, budget, and number of travellers.
👉 Authentication: Google Authenticates users when generating a trip.
👉 Trip information: Google Gemini outputs details of the trip in JSON format, and information is accessed to display details.
👉 Trip details: Users are given recommended hotels, and places to visit as well as the time to visit, and costs if any.

## NOTE
Creating a trip, and viewing a trip is implemented.
Issue ran into is the Google Image URL - we are able to attain the image and view it, however there is axios 400 error.
Would have loved to try debug further, however each refresh I believe was triggering an API call, and google API's are free up to an extent, and I was accruing charges thus I decided not to pursue further.

## Usage
**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/AaronJai/ai_trip_planner

cd ai_trip_planner
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:
```env
#GOOGLE
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=
NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY=
NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID=
```

Replace the placeholder values with your actual respective account credentials. You can obtain these credentials by signing up to Google Cloud and Google Gemini for Developers.
Google cloud APIs to enable: Geocoding API, Geolocation API, Places API, Places API (New)

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
