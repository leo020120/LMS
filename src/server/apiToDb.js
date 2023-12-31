// dataProcessor.js

// Import necessary libraries
import fetch from "node-fetch";
import cron from "node-cron";
import supabase from "../../src/supabase.js";

// Function to fetch data from the football API and process it
async function fetchDataAndProcess() {
  try {
    // Fetch data from the football API
    const apiToken = "3d6a994701ec4843ac876876a431aab6";
    const apiUrl =
      "https://api.football-data.org/v4/competitions/PL/matches?dateFrom=2023-08-04&dateTo=2023-09-16";
    const response = await fetch(apiUrl, {
      headers: {
        "X-Auth-Token": apiToken,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from the API");
    }

    const data = await response.json();

    // Process and extract the data you need
    const extractedData = data.matches.map((match) => {
      return {
        matchId: match.id,
        competition: data.competition.name,
        gameWeek: match.matchday,
        homeTeamId: match.homeTeam.id,
        homeTeamName: match.homeTeam.name,
        homeTeamCrest: match.homeTeam.crest,
        homeTeamScore: match.score.fullTime.home,
        awayTeamScore: match.score.fullTime.away,
        awayTeamCrest: match.awayTeam.crest,
        awayTeamName: match.awayTeam.name,
        awayTeamId: match.awayTeam.id,
        winner: match.score.winner,
        //scores: `${match.score.fullTime.home} - ${match.score.fullTime.away}`,
      };
    });

    console.log("Extracted data", extractedData);
    //   Insert the extracted data into Supabase table
    const { data: records, error } = await supabase
      .from("matches")
      .upsert(extractedData, { onConflict: ["matchId"] }); // Use the correct unique column

    if (error) {
      throw error;
    }

    console.log("Data inserted into Supabase:", records);
  } catch (error) {
    console.error("Error fetching and processing data:", error);
  }
}

fetchDataAndProcess();

// Schedule the script to run at 2:00 AM every day
cron.schedule("0 2 * * *", () => {
  // Run the script
  fetchDataAndProcess();
});

export default fetchDataAndProcess;
