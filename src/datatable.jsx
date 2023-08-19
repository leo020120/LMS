// DataTable.js

import React from 'react';

const DataTable = ({ data }) => {
  if (!data || !data.matches || data.matches.length === 0) {
    return <p>No data available.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Game Week</th>
          <th>Home Team</th>
          <th>Away Team</th>
          <th>Home Score</th>
          <th>Away Score</th>
        </tr>
      </thead>
      <tbody>
        {data.matches.map(match => (
          <tr key={match.id}>
            <td>{match.matchday}</td>
            <td><img src={match.homeTeam.crest}/></td>
            <td>{match.homeTeam.name}</td>
            <td>{match.awayTeam.name}</td>
            <td><img src={match.awayTeam.crest}/></td>
            <td>{match.score.fullTime.home}</td>
            <td>{match.score.fullTime.away}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
