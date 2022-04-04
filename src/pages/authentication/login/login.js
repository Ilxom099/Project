import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { login } from "../../../config/config";
import {toast} from "react-toastify";

import "./login.scss"

function Login() {
    const Email = useRef();
    const Pass = useRef();

    let navigate = useNavigate();
    function signIn() {
        navigate('/signIn')
    }
    async function Submit() {
        try {
            await login(Email.current.value, Pass.current.value);
            navigate('/cabinet');
        } catch {
            toast.error("Email yoki parol xato")
        }
    }
    return (
        <div className={'login'}>
            <div className="forms">
                 
            <h3> Sign in </h3>
       
                <input ref={Email} type="text" placeholder={'Email'}/>
                <input ref={Pass} type="text" placeholder={'Password'}/>
    
                  <button class="sign" onClick={Submit}> Sign in </button>
                <div>
                  <button class="signUp" onClick={signIn}> Create Account </button>
                </div>
            </div>
        </div>
    );
}

export default Login;