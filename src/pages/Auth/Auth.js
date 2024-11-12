import React from "react";
import './Auth.css';
import AuthForm from "../../components/AuthForm";

function Auth({ setIsAuth }) {
    return(
        <div>
            <AuthForm setIsAuth={setIsAuth}/>
        </div>
    );
}

export default Auth;