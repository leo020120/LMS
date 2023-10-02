// DataTable.js

import React, { useState } from 'react';
import './styles/datatable.css'
import TeamSelectModal from './TeamSelectModal'
import MyModal from './Modal';


const DataTable = ({ data }) => {
  if (!data || !data.matches || data.matches.length === 0) {
    return <p>No data available.</p>}
 else {
   
  const [openModal, setOpenModal] = useState(false)
  const [selectedMatch, setSelectedMatch] = useState(null)
  
  const handleCellClick = (match) => {
    setOpenModal(true);
    setSelectedMatch(match);
  };
 
  
  

  return (
    <div>
       {openModal && <TeamSelectModal match={selectedMatch} closeTeamSelectModal={setOpenModal}/>} 
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
            <td className='badge' onClick={() => handleCellClick(match)}><img src={match.homeTeam.crest}/></td>
            <td className='teamName' onClick={() => handleCellClick(match)}>{match.homeTeam.name}</td>
            <td>{match.score.fullTime.home}</td>
            <td>{match.score.fullTime.away}</td>
            <td classname='teamName' onClick={() => handleCellClick(match)}>{match.awayTeam.name}</td>
            <td className='badge' onClick={() => handleCellClick(match)}><img src={match.awayTeam.crest}/></td>
          </tr>
        ))}
      </tbody>
    </table>
    <div>
      Modal space
      <button onClick={() => setOpenModal(true)}>Open</button>
    
   
    </div>
    </div>
  );
 };
};


export default DataTable;
