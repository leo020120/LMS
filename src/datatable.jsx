// DataTable.js

import React from 'react';
<<<<<<< HEAD
=======
import './styles/datatable.css'
>>>>>>> master

const DataTable = ({ data }) => {
  if (!data || !data.matches || data.matches.length === 0) {
    return <p>No data available.</p>;
  }
<<<<<<< HEAD
=======
  
>>>>>>> master

  return (
    <table>
      <thead>
        <tr>
          <th>Game Week</th>
          <th>Home Team</th>
<<<<<<< HEAD
          <th>Away Team</th>
          <th>Home Score</th>
          <th>Away Score</th>
=======
          <th>Home Score</th>
          <th>Away Score</th>
          <th>Away Team</th>
          
>>>>>>> master
        </tr>
      </thead>
      <tbody>
        {data.matches.map(match => (
          <tr key={match.id}>
            <td>{match.matchday}</td>
<<<<<<< HEAD
            <td><img src={match.homeTeam.crest}/></td>
            <td>{match.homeTeam.name}</td>
            <td>{match.awayTeam.name}</td>
            <td><img src={match.awayTeam.crest}/></td>
            <td>{match.score.fullTime.home}</td>
            <td>{match.score.fullTime.away}</td>
=======
            <td className='badge'><img src={match.homeTeam.crest}/></td>
            <td>{match.homeTeam.name}</td>
            <td>{match.score.fullTime.home}</td>
            <td>{match.score.fullTime.away}</td>
            <td>{match.awayTeam.name}</td>
            <td className='badge'><img src={match.awayTeam.crest}/></td>
>>>>>>> master
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
