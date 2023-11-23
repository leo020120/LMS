import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { useNavigate } from "react-router-dom";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import "../components/styles/login.css";
import React, { useEffect, useState } from "react";
import supabase from "../../supabase";

function Success() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        if (value.data?.user) {
          console.log(value.data.user);
          setUser(value.data.user);
        }
      });
    }
    getUserData();
  }, []);

  async function userSignOut() {
    const { error } = await supabase.auth.signOut();
    navigate("/");
  }

  return (
    <div className="login">
      <header className="loginHeader">
        <h1>Success</h1>
        <button onClick={() => userSignOut()}>Sign Out</button>
      </header>
    </div>
  );
}

export default Success;
