import React from "react";
import "./styles/TeamSelectModal.css";
import supabase from "../../supabase";

const TeamSelectModal = ({
  match,
  closeTeamSelectModal,
  user,
  activeEdition,
}) => {
  if (!match) {
    return <div>No match selected</div>;
  }

  const isHomeTeam = match.isHomeTeam;
  console.log("isHomeTeam", isHomeTeam);
  console.log("Modal active edition", activeEdition);

  const confirmTeam = async (user, match, isHomeTeam) => {
    try {
      // const chosenTeam = {
      //   email: user.email,
      //   team: isHomeTeam ? match.homeTeamName : match.awayTeamName,
      //   gameWeek: match.matchDay,
      //   matchId: match.matchId,
      //   user_id: user.id,
      //   teamId: isHomeTeam ? match.homeTeamId : match.awayTeamId,
      //   team_location: isHomeTeam ? "HOME_TEAM" : "AWAY_TEAM",
      //   edition_id: activeEdition,
      //   choice_status: "active",
      // };

      console.log("matchday", match);
      const { data, error: Error } = await supabase.rpc(
        "confirm_team_selection",
        {
          email: user.email,
          team: isHomeTeam ? match.homeTeamName : match.awayTeamName,
          gameweek: match.gameWeek,
          matchid: match.matchId,
          up_user_id: user.id,
          teamid: isHomeTeam ? match.homeTeamId : match.awayTeamId,
          teamlocation: isHomeTeam ? "HOME_TEAM" : "AWAY_TEAM",
          editionid: activeEdition,
        }
      );

      if (Error) {
        console.error("Error updating existing active row:", Error);
        return;
      }

      console.log("upData", data);
    } catch (error) {
      console.log("error executing rpc", error);
    }

    ////////////////////////////////////////////

    // const { data, error } = await supabase
    //   .from("mapping")
    //   .insert(chosenTeam, { onConflict: ["mappingId"] }); // Use the correct unique column

    // console.log("Modal USER", user);
    // console.log(chosenTeam);
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
