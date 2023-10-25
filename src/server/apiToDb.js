// dataProcessor.js

// Import necessary libraries
const fetch = require('node-fetch');
const { createClient } = require("@supabase/supabase-js");

// Create a Supabase client
const supabaseUrl = "https://kechdxscwcocftvafbej.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlY2hkeHNjd2NvY2Z0dmFmYmVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0Mzc3NjAsImV4cCI6MjAxMjAxMzc2MH0.BwozDKPCaVG6OBBbKYSZySJrozRxSwL6FFQVEKiVAHU";
const supabase = createClient(supabaseUrl, supabaseKey);

// Function to fetch data from the football API and process it
async function fetchDataAndProcess() {
  try {
    // Fetch data from the football API
    const apiToken = '3d6a994701ec4843ac876876a431aab6';
    const apiUrl = 'https://api.football-data.org/v4/competitions/PL/matches?dateFrom=2023-08-04&dateTo=2023-08-16';
    const response = await fetch(apiUrl, {
      headers: {
        'X-Auth-Token': apiToken,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data from the API');
    }

    const data = await response.json();

    // Process and extract the data you need
    const extractedData = data.matches.map(match => {
      return {
        competition: data.competition.name,
        matchday: match.matchday,
        homeTeam: match.homeTeam.name,
        awayTeam: match.awayTeam.name,
        scores: `${match.score.fullTime.home} - ${match.score.fullTime.away}`,
      };
    });

    console.log('Extracted data', extractedData)
    // Insert the extracted data into your Supabase table
//     const { data: records, error } = await supabase
//       .from("your_table_name")
//       .upsert(extractedData, { onConflict: ["matchday"] }); // Use the correct unique column

//     if (error) {
//       throw error;
//     }

//     console.log("Data inserted into Supabase:", records);
//   } catch (error) {
//     console.error("Error fetching and processing data:", error);
//   }
}

module.exports = fetchDataAndProcess;
