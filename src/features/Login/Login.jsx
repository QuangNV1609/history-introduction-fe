import { useState } from "react";
import React from 'react'
import Input from "./components/Input/Input";
import './Login.scss';
import userApi from "../../api/user";
import headerLogo from '../../image/header-logo.png'
import headerClose from '../../image/header-close.png'



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
        // <div className="login">
        //     <div className="login-header">
        //         <h3>Login</h3>
        //     </div>
        //     <form className="login-form">
        //         <Input
        //             name="Username"
        //             id="username"
        //             value={username}
        //             placeholder="Username"
        //             getInputValue={getUsername}
        //         >
        //         </Input>
        //         <Input
        //             type="password"
        //             name="password"
        //             id="password"
        //             value={password}
        //             placeholder="Password"
        //             getInputValue={getPassword}
        //         >
        //         </Input>
        //         <button className="login-form-btn" onClick={(e) => { handleLogin(e) }}>
        //             Login
        //         </button>
        //     </form>
        // </div>

        <div>
            <div className="header">
                <img src={headerLogo} alt="logo" class="header-logo-img" />
                <img src={headerClose} alt="close button" class="header-close-img" />
            </div>
            <div className="login">
                <form action="" className="login-form">
                    <h2>Đăng nhập</h2>
                    <div class="label-container">
                        <label for="login-email" class="login-label">Email</label>
                        <span class="login-span">
                            Chưa có tài khoản?
                            <span class="span-action"> Đăng ký</span>
                        </span>
                    </div>
                    <Input
                        type="email"
                        id="login-email"
                        name="Username"
                        value={username}
                        placeholder="Username"
                        getInputValue={getUsername}>
                    </Input>

                    <div class="label-container">
                        <label for="login-password" class="login-label">Mật khẩu</label>
                        <span class="login-span span-action">
                            Xem
                        </span>
                    </div>
                    <Input
                        type="password"
                        id="login-password"
                        value={password}
                        placeholder="Password"
                        getInputValue={getPassword}
                    ></Input>

                    <button class="login-form-btn" onClick={(e) => { handleLogin(e) }}>
                        Đăng nhập
                    </button>

                    <a href="#" class="forgot-password">Quên mật khẩu?</a>
                </form>
            </div>
        </div>

    )
}

export default Login;