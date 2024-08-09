/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
//   const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

    export const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate travel plan for location: las vegas, for 3 days for a couple with a cheap budget. give hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geocoordinates, ticket pricing, rating, time travel to each of the location for 3 days with each day plan with best time to visit in JSON format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"hotelOptions\": [\n    {\n      \"HotelName\": \"The D Las Vegas\",\n      \"HotelAddress\": \"301 Fremont Street, Las Vegas, NV 89101\",\n      \"Price\": \"$50-$100/night\",\n      \"HotelImageUrl\": \"https://www.theDlasvegas.com/images/hero/hero-fremont-street-experience.jpg\",\n      \"GeoCoordinates\": \"36.1699° N, 115.1422° W\",\n      \"Rating\": 4.0,\n      \"Description\": \"A budget-friendly hotel located in the heart of Fremont Street, known for its vibrant nightlife and vintage charm.\"\n    },\n    {\n      \"HotelName\": \"Circus Circus Hotel & Casino\",\n      \"HotelAddress\": \"2880 Las Vegas Blvd S, Las Vegas, NV 89109\",\n      \"Price\": \"$40-$80/night\",\n      \"HotelImageUrl\": \"https://www.circuscircus.com/content/dam/mgmresorts/circuscircus/home/hero/circus-circus-hotel-las-vegas-hero-1.jpg\",\n      \"GeoCoordinates\": \"36.1146° N, 115.1714° W\",\n      \"Rating\": 3.5,\n      \"Description\": \"A classic Las Vegas hotel with a carnival theme, offering affordable accommodations and family-friendly entertainment.\"\n    },\n    {\n      \"HotelName\": \"Golden Nugget Las Vegas\",\n      \"HotelAddress\": \"129 E Fremont St, Las Vegas, NV 89101\",\n      \"Price\": \"$60-$120/night\",\n      \"HotelImageUrl\": \"https://www.goldennugget.com/images/hero/GN-Hero-Desktop.jpg\",\n      \"GeoCoordinates\": \"36.1697° N, 115.1409° W\",\n      \"Rating\": 4.5,\n      \"Description\": \"A historic hotel known for its luxurious accommodations, thrilling attractions, and world-class dining.\"\n    }\n  ],\n  \"itinerary\": {\n    \"Day 1\": [\n      {\n        \"placeName\": \"Fremont Street Experience\",\n        \"PlaceDetails\": \"A pedestrian-friendly street lined with casinos, restaurants, and street performers, offering free entertainment and a vibrant atmosphere.\",\n        \"PlaceImageUrl\": \"https://www.fremontstreetexperience.com/sites/default/files/images/FSE-Header-Mobile.jpg\",\n        \"Geocoordinates\": \"36.1699° N, 115.1422° W\",\n        \"ticketPricing\": \"Free\",\n        \"rating\": 4.5,\n        \"TimeTravel\": \"Afternoon\"\n      },\n      {\n        \"placeName\": \"The Neon Museum\",\n        \"PlaceDetails\": \"A museum showcasing iconic neon signs from Las Vegas' past, offering a fascinating glimpse into the city's history.\",\n        \"PlaceImageUrl\": \"https://www.neonmuseum.org/wp-content/uploads/2019/03/DSC_3571-1-1024x683.jpg\",\n        \"Geocoordinates\": \"36.1659° N, 115.1448° W\",\n        \"ticketPricing\": \"$20-$25\",\n        \"rating\": 4.0,\n        \"TimeTravel\": \"Evening\"\n      }\n    ],\n    \"Day 2\": [\n      {\n        \"placeName\": \"Red Rock Canyon National Conservation Area\",\n        \"PlaceDetails\": \"A scenic desert park offering stunning rock formations, hiking trails, and scenic drives.\",\n        \"PlaceImageUrl\": \"https://www.nps.gov/redr/learn/nature/images/RedRockCanyon_RockFormations_DSC_0555_Web.jpg\",\n        \"Geocoordinates\": \"36.0955° N, 115.2051° W\",\n        \"ticketPricing\": \"$15 per vehicle\",\n        \"rating\": 4.5,\n        \"TimeTravel\": \"Morning\"\n      },\n      {\n        \"placeName\": \"The Strip\",\n        \"PlaceDetails\": \"The iconic Las Vegas Boulevard, lined with world-class casinos, resorts, and entertainment venues.\",\n        \"PlaceImageUrl\": \"https://www.visitlasvegas.com/sites/default/files/styles/hero_banner_image/public/images/hero-banner-images/las-vegas-strip-at-night.jpg\",\n        \"Geocoordinates\": \"36.1146° N, 115.1714° W\",\n        \"ticketPricing\": \"Free (except for specific attractions)\",\n        \"rating\": 5.0,\n        \"TimeTravel\": \"Evening\"\n      }\n    ],\n    \"Day 3\": [\n      {\n        \"placeName\": \"Bellagio Conservatory & Botanical Garden\",\n        \"PlaceDetails\": \"A stunning display of floral artistry, changing themes seasonally and offering a free and breathtaking experience.\",\n        \"PlaceImageUrl\": \"https://www.bellagio.com/content/dam/mgmresorts/bellagio/home/hero/bellagio-conservatory-and-botanical-garden-hero-1.jpg\",\n        \"Geocoordinates\": \"36.1187° N, 115.1753° W\",\n        \"ticketPricing\": \"Free\",\n        \"rating\": 4.5,\n        \"TimeTravel\": \"Morning\"\n      },\n      {\n        \"placeName\": \"Las Vegas Arts District\",\n        \"PlaceDetails\": \"A vibrant neighborhood filled with art galleries, murals, studios, and independent shops, offering a unique and artistic experience.\",\n        \"PlaceImageUrl\": \"https://www.lasvegasartsdistrict.org/wp-content/uploads/2017/06/las-vegas-arts-district-1.jpg\",\n        \"Geocoordinates\": \"36.1627° N, 115.1388° W\",\n        \"ticketPricing\": \"Free\",\n        \"rating\": 4.0,\n        \"TimeTravel\": \"Afternoon\"\n      }\n    ]\n  }\n}\n```\n\n**Explanation:**\n\n* **Hotel Options:** Provides three budget-friendly hotel choices with relevant information like name, address, price range, image URL, location coordinates, rating, and a brief description. \n* **Itinerary:**  \n    * **Day 1:**  Focuses on the historic and vibrant downtown area with Fremont Street Experience and the Neon Museum for a taste of classic Vegas.\n    * **Day 2:**  Includes a trip to Red Rock Canyon for nature exploration in the morning followed by an evening stroll down the Strip for a glimpse of the city's iconic landscape.\n    * **Day 3:**  Offers a contrast between the elegant Bellagio Conservatory and the artistic charm of the Las Vegas Arts District. \n\n**Tips:**\n\n* **Food:**  Look for deals and discounts, consider eating at off-peak times, and try local food trucks for cheaper options.\n* **Transportation:**  Walk or use public transportation (like the Deuce bus) to save on cab fares.\n* **Activities:**  Check for free events, concerts, and shows offered by casinos and resorts.\n* **Discounts:**  Look for online coupons and discount websites for attractions and entertainment. \n\n**Note:** The prices, ratings, and timings can vary and are subject to change. It's always best to check for the latest information before your trip. \n"},
          ],
        },
      ],
    });
  
