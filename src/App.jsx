// App.jsx

import React, { useState, useEffect } from 'react';
import DataTable from './datatable';

function App() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/api/standings")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setGames(data); // Assuming the API response is an object with a 'matches' property
      })
      .catch(error => {
        console.error('An error occured:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h1>LMS</h1>
      <DataTable data={games} /> 
    </>
  );
}

export default App;
