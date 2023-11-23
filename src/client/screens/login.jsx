import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { useNavigate } from "react-router-dom";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import "../components/styles/login.css";
import supabase from "../../supabase";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login">
      <header className="loginHeader">
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
          providers={["discord", "google", "facebook"]}
        />
      </header>
    </div>
  );
}

export default Login;
