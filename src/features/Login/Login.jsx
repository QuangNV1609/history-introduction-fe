import { useState } from "react";
import React from 'react'
import Input from "./components/Input/Input";
import styles from './Login.module.scss';
import userApi from "../../api/user";
import headerLogo from '../../image/header-logo.png';
import headerClose from '../../image/header-close.png';
import OtpInput from 'otp-input-react';

const Login = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');

    const [showLoginForm, setShowLoginForm] = useState(true);
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const [showRegisterProfileForm, setShowRegisterProfileForm] = useState(false);
    const [showVerifyForm, setShowVerifyForm] = useState(false);


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
        <div>
            <div className={styles.header}>
                <img src={headerLogo} alt="logo" class={styles.header_logo_img} />
                <img src={headerClose} alt="close button" class={styles.header_close_img} />
            </div>

            <div className={styles.auth}>
                {showLoginForm && (
                    // Login form
                    <form action="" className={`${styles.auth_form} ${styles.login_form}`}>
                        <h2>Đăng nhập</h2>
                        <div class={styles.label_container}>
                            <label for="login_email" class={styles.auth_label}>Email</label>
                            <span class={styles.auth_span}>
                                Chưa có tài khoản?
                                <span class={`${styles.span_action}`}
                                    onClick={() => (setShowLoginForm(false), setShowRegisterForm(true))}> Đăng ký</span>
                            </span>
                        </div>
                        <Input
                            type="email"
                            id="login_email"
                            name="Username"
                            value={username}
                            getInputValue={getUsername}>
                        </Input>

                        <div class={styles.label_container}>
                            <label for="login_password" class={styles.auth_label}>Mật khẩu</label>
                            <span class={`${styles.auth_span} ${styles.span_action}`}>
                                Xem
                            </span>
                        </div>
                        <Input
                            type="password"
                            id="login_password"
                            value={password}
                            getInputValue={getPassword}
                        ></Input>

                        <button class={styles.auth_form_btn} onClick={(e) => { handleLogin(e) }}>
                            Đăng nhập
                        </button>
                        <a href="#" class={styles.forgot_password}>Quên mật khẩu?</a>
                    </form>
                )}

                {showRegisterForm && (
                    // Register Form
                    <form action="" className={`${styles.auth_form} ${styles.register_form}`}>
                        <h2>Đăng ký</h2>
                        <div class={styles.label_container}>
                            <label for="register_email" class={styles.auth_label}>Email</label>
                            <span class={styles.auth_span}>
                                Đã có tài khoản?
                                <span class={`${styles.span_action}`}
                                    onClick={() => (setShowRegisterForm(false), setShowLoginForm(true))}> Đăng nhập</span>
                            </span>
                        </div>
                        <Input
                            type="email"
                            id="register_email"
                            name=""
                            value={''}
                            getInputValue={''}>
                        </Input>

                        <div class={styles.label_container}>
                            <label for="register_password" class={styles.auth_label}>Mật khẩu</label>
                            <span class={`${styles.auth_span} ${styles.span_action}`}>
                                Xem
                            </span>
                        </div>
                        <Input
                            type="password"
                            id="register_password"
                            value={''}
                            getInputValue={''}
                        ></Input>
                        <button class={styles.auth_form_btn}
                            onClick={() => (setShowRegisterForm(false), setShowRegisterProfileForm(true))}>
                            Đăng ký miễn phí
                        </button>
                        <p class={styles.auth_policy}>Bằng cách bấm nút “Đăng ký miễn phí, bạn đang tạo một tài khoản và đồng ý với "<a href="#">Điều khoản dịch vụ</a> và <a href="#">Chính sách bảo mật</a>" của Lịch Sử Việt Nam.
                        </p>
                    </form>
                )}

                {showRegisterProfileForm && (
                    //Register Profile Form
                    <form action="" className={`${styles.auth_form} ${styles.register_profile_form}`}>
                        <h2>Tên của bạn là gì?</h2>
                        <p className={styles.fullName_desc}>Tên này sẽ được hiển thị trên profile của bạn.</p>
                        <div className={styles.label_container}>
                            <label for="auth_last_name" className={styles.auth_label}>Họ</label>
                        </div>
                        <Input
                            type="text"
                            id="auth_last_name"
                            placeholder="Điền họ của bạn">
                        </Input>
                        <div className={styles.label_container}>
                            <label for="auth_first_name" className={styles.auth_label}>Tên</label>
                        </div>
                        <Input
                            type="text"
                            id="auth_first_name"
                            placeholder="Điền tên của bạn">
                        </Input>
                        <button class={styles.auth_form_btn}
                            onClick={() => (setShowRegisterProfileForm(false), setShowVerifyForm(true))}>Tiếp tục</button>
                    </form>
                )}

                {showVerifyForm && (
                    //Verify email
                    <form action="" className={`${styles.auth_form} ${styles.verify_form}`}>
                        <h2>Vui lòng xác minh email</h2>
                        <div className={styles.verify_desc}>
                            <p>☑️  Chúng tôi đã gửi mã xác thực đến auth@gmail.com của bạn.</p>
                        </div>
                        <h4>Nhập mã xác thực</h4>
                        <div className={styles.otp_inputs}>
                            <OtpInput
                                value={otp}
                                onChange={setOtp}
                                OTPLength={6}
                                otpType="number"
                                disabled={false}
                                autoFocus
                            ></OtpInput>
                        </div>

                        <div className={styles.verify_sub_desc}>
                            <p>Nếu bạn không nhìn thấy email, hãy kiểm tra thư mục thư rác của bạn. Chúng tôi gửi từ login@lichsuvietnam.com</p>
                        </div>
                        <button class={styles.auth_form_btn}>Xác nhận</button>
                        <a href="#" class={styles.forgot_password}>Gửi lại mã xác minh</a>
                    </form>
                )}

            </div>
        </div>
    );
}

export default Login;