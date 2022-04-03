import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { login } from "../../../config/config";
import {toast} from "react-toastify";

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
            <h3> Saytga kitish </h3>
                <input ref={Email} type="text" placeholder={'email'}/>
                <input ref={Pass} type="text" placeholder={'parol'}/>
                <button onClick={signIn}> Ro'yhatdan o'tish </button>
                <button onClick={Submit}> Kirish </button>
            </div>
        </div>
    );
}

export default Login;