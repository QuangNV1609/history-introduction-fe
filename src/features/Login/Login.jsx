import { useState } from "react";
import React from 'react'
import Input from "./components/Input/Input";
import './Login.scss';
import userApi from "../../api/user";

const Login = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const user = {
            username: username,
            password: password
        }
        userApi.signIn(user).then(res => {
            console.log(res);
        });
    }

    const getUsername = (value) => {
        setUserName(value);
    }

    const getPassword = (value) => {
        setPassword(value);
    }

    return (
        <div className="login">
            <div className="login-header">
                <h3>Login</h3>
            </div>
            <form className="login-form">
                <Input
                    name="Username"
                    id="username"
                    value={username}
                    placeholder="Username"
                    getInputValue={getUsername}
                >
                </Input>
                <Input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    placeholder="Password"
                    getInputValue={getPassword}
                >
                </Input>
                <button className="login-form-btn" onClick={(e) => { handleLogin(e) }}>
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login;