import { useState, useEffect } from "react";
import supabase from "../../supabase";
import { createClient } from "@supabase/supabase-js";
import "./styles/datatable.css";

function DataTable({ setOpenModal, setSelectedMatch, user, activeEdition }) {
  const [matches, setMatches] = useState([]);
  // console.log("USER", user);
  // console.log("USER_ID", user?.id);

  useEffect(() => {
    async function getMatches() {
      const { data, error } = await supabase
        .from("display_view")
        .select()
        .or(
          `user_id.is.null,and(user_id.eq.${user.id},choice_status.eq.active)`
        );
      // .and(`edition_id.eq.${activeEdition}`);
      //AND edition = editionScroller active edition
      setMatches(data);
    }
    getMatches();
  }, [user, activeEdition]);
  // console.log("matches", matches);
  console.log(
    "Fetching matches for user:",
    user?.id,
    "and edition:",
    activeEdition
  );

  const handleCellClick = (match, isHomeTeam) => {
    setOpenModal(true);
    setSelectedMatch({ ...match, isHomeTeam });
    console.log("MATCH dis table", match);
  };

  //console.log(matches);
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
            <th>Win/Lose</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match) => (
            <tr key={match.matchId}>
              <td>{match.matchday}</td>
              <td
                className="badge"
                onClick={() => handleCellClick(match, true)}
              >
                <img src={match.homeTeamCrest} />
              </td>
              <td
                className="teamName"
                onClick={() => handleCellClick(match, true)}
              >
                {match.homeTeamName}
              </td>
              <td className="homeScore">{match.homeTeamScore}</td>
              <td className="awayScore">{match.awayTeamScore}</td>
              <td
                className="teamName"
                onClick={() => handleCellClick(match, false)}
              >
                {match.awayTeamName}
              </td>
              <td
                className="badge"
                onClick={() => handleCellClick(match, false)}
              >
                <img src={match.awayTeamCrest} />
              </td>
              <td className="winLoss">{match.winloss}</td>
              <td className="choice">{match.choice_status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
