import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';


const app = express();

// Allow requests from your frontend during development
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend development server address
}));

// Replace 'your-auth-token' with your actual football-data.org API token
const apiToken = '3d6a994701ec4843ac876876a431aab6';
const apiUrl = 'https://api.football-data.org/v4/competitions/PL/matches?dateFrom=2023-08-04&dateTo=2023-10-04';

app.get('/api/standings', async (req, res) => {
  try {
    const response = await fetch(apiUrl, {
      headers: {
        'X-Auth-Token': apiToken,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data from the API');
    }

    const data = await response.json();


    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
