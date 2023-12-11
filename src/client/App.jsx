// App.jsx

import React, { useState, useEffect } from "react";
// import DataTable from "./components/datatable";
import DataTable from "./components/displaytable";
import "./components/styles/App.css";
import Modal from "react-modal";
import MyModal from "./components/Modal";
import TeamSelectModal from "./components/TeamSelectModal";
import { Link } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import supabase from "../supabase";
import EditionScroller from "./components/editionScroller";

function App() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [closeModal, setCloseModal] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch data from the API
        const response = await fetch("http://localhost:3000/api/standings");
        const data = await response.json();
        setGames(data);

        // Fetch user data from Supabase
        const fetchUser = async () => {
          const {
            data: { user },
          } = await supabase.auth.getUser();
          setUser(user);
        };
        fetchUser();

        //Fetch session data
        const { sess, sesserror } = await supabase.auth.getSession();
        console.log("session", sess);

        //Fetch event data
        const authListener = supabase.auth.onAuthStateChange(
          (event, session) => {
            console.log("auth state changed", event, session);
          }
        );
      } catch (error) {
        console.error("An error occurred:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount
  console.log("User", user);

  const handleSignout = async () => {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        console.error("Error signing out:", error);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.log("Error signing out:", error);
    }
  };

  return (
    <div className="container">
      {openModal && (
        <TeamSelectModal
          match={selectedMatch}
          closeTeamSelectModal={setOpenModal}
          user={user}
        />
      )}

      <header>
        <nav className="navBar">
          <img
            className="logo"
            height="40px"
            width="40px"
            src="src\client\assets\LMS.jpg"
            alt="logo"
          ></img>
          <ul>
            <li className="item">
              <Link to="/about">About</Link>
            </li>
            <li className="item">
              <a href="#">Help</a>
            </li>
          </ul>
          {user ? (
            <>
              <div>Hello {user.email}</div>
              <button onClick={handleSignout}>Sign Out</button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button>Login</button>
              </Link>
            </>
          )}
        </nav>
      </header>
      <div>
        <EditionScroller />
      </div>
      <div className="main">
        <nav className="leftPanel">
          <ul>
            <li>Premier League</li>
            <li>Championship</li>
            <li>League 1</li>
            <li>League 2</li>
          </ul>
        </nav>

        {/*put in the gw slider using match.matchday from the api*/}

        <div className="table">
          <DataTable
            data={games}
            setOpenModal={setOpenModal}
            setSelectedMatch={setSelectedMatch}
            user={user}
          />
        </div>

        <div className="rightPanel">right panel</div>
      </div>
      <div className="footer">footer</div>
    </div>
  );
}

export default App;
