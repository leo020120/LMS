import React from "react";
import "./styles/TeamSelectModal.css";
import supabase from "../../supabase";

const TeamSelectModal = ({ match, closeTeamSelectModal, user }) => {
  if (!match) {
    return <div>No match selected</div>;
  }

  const isHomeTeam = match.isHomeTeam;
  console.log("isHomeTeam", isHomeTeam);

  const confirmTeam = async (user, match, isHomeTeam) => {
    //do an upsert into mapping table of email, team, gameweek, matchid
    //take user details from session?
    //take match details from match object
    //   Insert the extracted data into your Supabase table
    //Create data object

    const chosenTeam = {
      email: user.email,
      team: isHomeTeam ? match.homeTeamName : match.awayTeamName,
      gameWeek: match.matchDay,
      matchId: match.matchId,
      user_id: user.id,
    };

    const { data, error } = await supabase
      .from("MAPPING")
      .insert(chosenTeam, { onConflict: ["mappingId"] }); // Use the correct unique column

    console.log("Modal USER", user);
    console.log(chosenTeam);
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <h2>Match Details</h2>
        <div className="match-info">
          <div className="matchday">
            <p>Matchday {match.matchDay}</p>
          </div>
          <div className="team">
            <img
              className="badge"
              src={isHomeTeam ? match.homeTeamCrest : match.awayTeamCrest}
              alt={isHomeTeam ? "Home Team Crest" : "Away Team Crest"}
            />
            <p>{isHomeTeam ? match.homeTeamName : match.awayTeamName}</p>
          </div>
          <div className="score">
            <p>
              {/* {match.homeTeamScore} - {match.awayTeamScore} */}
              vs
            </p>
          </div>
          <div className="team">
            <p>{!isHomeTeam ? match.homeTeamName : match.awayTeamName}</p>
          </div>
        </div>
        <button onClick={() => closeTeamSelectModal(false)}>Close</button>
        <button onClick={() => confirmTeam(user, match, isHomeTeam)}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default TeamSelectModal;
