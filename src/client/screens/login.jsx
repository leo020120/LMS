import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import "../components/styles/login.css";

const supabase = createClient(
  "https://kechdxscwcocftvafbej.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlY2hkeHNjd2NvY2Z0dmFmYmVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0Mzc3NjAsImV4cCI6MjAxMjAxMzc2MH0.BwozDKPCaVG6OBBbKYSZySJrozRxSwL6FFQVEKiVAHU"
);

function Login() {
  return (
    <Auth
      supabaseClient={supabase}
      providers={["google", "discord"]}
      appearance={{ theme: ThemeSupa }}
    />
  );
}
export default Login;
