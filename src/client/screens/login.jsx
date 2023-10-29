import { createClient } from "@supabase/supabase-js";
import { Auth} from "@supabase/auth-ui-react";
import { useNavigate } from "react-router-dom";
import {ThemeSupa} from '@supabase/auth-ui-shared'
import '../components/styles/login.css'



//change this to use .env file
const supabase = createClient(
    'https://kechdxscwcocftvafbej.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlY2hkeHNjd2NvY2Z0dmFmYmVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0Mzc3NjAsImV4cCI6MjAxMjAxMzc2MH0.BwozDKPCaVG6OBBbKYSZySJrozRxSwL6FFQVEKiVAHU'
)



function Login() {

    const navigate = useNavigate();

    // supabase.auth.onAuthStateChange(async (event) => {
    //     console.log(event)
    //     if (event !== "SIGNED_OUT") {
    //         //forward to success URL
    //         navigate("/success")
    //     } else {
    //         //forward to localhost:5173
    //         navigate("/")
    //     }
    // })

    return (
        <div className="login">
            <header className="loginHeader">
                <Auth
                    supabaseClient={supabase}
                    appearance={{theme:ThemeSupa}}
                    theme="dark"
                    providers={["discord", "google", "facebook"]}
                />
            </header>
        </div>
    )
} 

export default Login