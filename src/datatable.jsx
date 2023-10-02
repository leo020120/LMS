// DataTable.js

import React from 'react';
import './styles/datatable.css'

const DataTable = ({ data }) => {
  if (!data || !data.matches || data.matches.length === 0) {
    return <p>No data available.</p>}
 else {
    const openModal = () => {
      setModalIsOpen(true)
    };
  
    const closeModal = () => {
      setModalIsOpen(false)
    };
  

  return (
    <div>
    <table>
      <thead>
        <tr>
          <th>Game Week</th>
          <th>Home Team</th>
          <th>Home Score</th>
          <th>Away Score</th>
          <th>Away Team</th>
          
        </tr>
      </thead>
      <tbody>
        {data.matches.map(match => (
          <tr key={match.id}>
            <td>{match.matchday}</td>
            <td className='badge'><img src={match.homeTeam.crest}/></td>
            <td onClick={openModal} >{match.homeTeam.name}</td>
            <td>{match.score.fullTime.home}</td>
            <td>{match.score.fullTime.away}</td>
            <td>{match.awayTeam.name}</td>
            <td className='badge'><img src={match.awayTeam.crest}/></td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
 };
};


export default DataTable;
