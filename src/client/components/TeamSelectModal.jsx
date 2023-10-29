import React from 'react';
import './styles/TeamSelectModal.css';

const TeamSelectModal = ({ match, closeTeamSelectModal }) => {

if (!match) {
  return <div>No match selected</div>
}

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <h2>Match Details</h2>
        <div className="match-info">
          <div className='matchday'>
            <p>Matchday{match.matchday}</p>
          </div>
          <div className="team">
            <img className='badge' src={match.homeTeam.crest} alt="Home Team Crest" />
            <p>{match.homeTeam.name}</p>
          </div>
          <div className="score">
            <p>{match.score.fullTime.home} - {match.score.fullTime.away}</p>
          </div>
          <div className="team">
            <img className='badge' src={match.awayTeam.crest} alt="Away Team Crest" />
            <p>{match.awayTeam.name}</p>
          </div>
        </div>
        <button onClick={() => closeTeamSelectModal(false)}>Close</button>
      </div>
    </div>
  );
};

export default TeamSelectModal;
