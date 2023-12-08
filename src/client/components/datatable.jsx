import { useState, useEffect } from "react";
import supabase from "../../supabase";
import { createClient } from "@supabase/supabase-js";
import "./styles/datatable.css";

function DataTable({ setOpenModal, setSelectedMatch }) {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    async function getMatches() {
      const { data, error } = await supabase.from("matches").select();
      setMatches(data);
      // console.log("data", data);
    }
    getMatches();
  }, []);
  // console.log("matches", matches);

  const handleCellClick = (match, isHomeTeam) => {
    setOpenModal(true);
    setSelectedMatch({ ...match, isHomeTeam });
    console.log("MATCH", match);
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
              <td>{match.homeTeamScore}</td>
              <td>{match.awayTeamScore}</td>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
