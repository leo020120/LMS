import { createClient } from "@supabase/supabase-js";
import { Auth} from "@supabase/auth-ui-react";
import { useNavigate } from "react-router-dom";
import {ThemeSupa} from '@supabase/auth-ui-shared'
import '../components/styles/login.css'
import React, {useEffect, useState} from 'react';



//change this to use .env file
const supabase = createClient(
    'https://kechdxscwcocftvafbej.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlY2hkeHNjd2NvY2Z0dmFmYmVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0Mzc3NjAsImV4cCI6MjAxMjAxMzc2MH0.BwozDKPCaVG6OBBbKYSZySJrozRxSwL6FFQVEKiVAHU'
)



function Success() {
const [user, setUser] = useState({});
const navigate = useNavigate();

    useEffect(() => {
        async function getUserData() {
            await supabase.auth.getUser().then((value) => {
                if(value.data?.user) {
                    console.log(value.data.user);
                    setUser(value.data.user);
                }
            })
        }
     getUserData();   
    },[]);

    async function userSignOut() {
        const {error} = await supabase.auth.signOut();
        navigate('/');
    };

    return (
        <div className="login">
            <header className="loginHeader">
            <h1>Success</h1>
            <button onClick={()=> userSignOut()}>Sign Out</button>
            </header>
        </div>
    )
} 

export default Success