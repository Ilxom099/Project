import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/authentication/login/login';
import SignIn from './pages/authentication/signIn/signIn';
import Cabinet from './pages/cabinet/cabinet';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";


function App() {
    return(
        <div>
            <Routes>
                <Route path={'/'} element={<Login/>} />
                <Route path={'/signIn'} element={<SignIn/>} />
                <Route path={'/cabinet'} element={<Cabinet/>} />
            </Routes>
            <ToastContainer/>
        </div>
    )
}


export default App;