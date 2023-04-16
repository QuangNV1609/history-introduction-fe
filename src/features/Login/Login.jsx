import { useState } from "react";
import React from 'react'
import styles from './Login.module.scss';
import userApi from "../../api/user";
import headerLogo from '../../assets/image/header-logo.png';
import headerClose from '../../assets/image/header-close.png';
import OtpInput from 'otp-input-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    //Login
    const [loginUsername, setLoginUserName] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    //Register
    const [otp, setOtp] = useState('');
    const [registerUsername, setRegisterUserName] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [active, setActive] = useState(true);

    const [showLoginForm, setShowLoginForm] = useState(true);
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const [showRegisterProfileForm, setShowRegisterProfileForm] = useState(false);
    const [showVerifyForm, setShowVerifyForm] = useState(false);
    const [showLoginSuccess, setShowLoginSuccess] = useState(false);
    const [showRegisterSuccess, setShowRegisterSuccess] = useState(false);
    const [showSpace, setShowSpace] = useState(true);


    const navigate = useNavigate();

    //console.log(location.pathname);

    const handleLogin = (e) => {
        e.preventDefault();
        const user = {
            username: loginUsername,
            password: loginPassword
        }

        console.log(loginUsername);
        console.log(loginPassword);
        userApi.login(user).then(res => {
            console.log(res);
            if (res.status === 200) {
                localStorage.setItem("token", res.data.token);

                navigate('/home');
                return res.data.JSON;
            }
            throw Error("Sai tên email hoặc mật khẩu")
        })
            .catch(function (error) {
                setShowSpace(false);
                setShowLoginSuccess(true);
                console.log(error);
            });
    }

    const handleRegister = (e) => {
        e.preventDefault();

        const user = {
            username: registerUsername,
            password: registerPassword,
            active: active
        }

        console.log(user);
        userApi.signIn(user).then(res => {
            console.log(res.status);
            if (res.status === 201) {
                window.location.reload();
                alert("Bạn đã đăng ký thành công!");
                setShowRegisterForm(false);
                setShowLoginForm(true);
                return res.data.JSON;
            }
            throw Error("Tài khoản đã tồn tại")
        })
            .catch(function (error) {
                setShowSpace(false);
                setShowRegisterSuccess(true);
                console.log(error);
            });
    }

    return (
        <div>
            <div className={styles.header}>
                <img src={headerLogo} alt="logo" className={styles.header_logo_img} />
                <img src={headerClose} alt="close button" className={styles.header_close_img} />
            </div>

            <div className={styles.auth}>
                {showLoginForm && (
                    // Login form
                    <form action="" className={`${styles.auth_form} ${styles.login_form}`}>
                        <h2>Đăng nhập</h2>
                        <div className={styles.label_container}>
                            <label for="login_email" className={styles.auth_label}>Email</label>
                            <span className={styles.auth_span}>
                                Chưa có tài khoản?
                                <span className={`${styles.span_action}`}
                                    onClick={() => (setShowLoginForm(false), setShowRegisterForm(true), setShowLoginSuccess(false), setShowSpace(true))}> Đăng ký</span>
                            </span>
                        </div>
                        <input
                            type="text"
                            id="login_email"
                            value={loginUsername}
                            onChange={(e) => (setLoginUserName(e.target.value), setShowLoginSuccess(false), setShowSpace(true))}
                            className={styles.auth_input}
                        />
                        <div className={styles.label_container}>
                            <label for="login_password" className={styles.auth_label}>Mật khẩu</label>
                            <span className={`${styles.auth_span} ${styles.span_action}`}>
                                Xem
                            </span>
                        </div>
                        <input
                            type="password"
                            id="login_password"
                            value={loginPassword}
                            onChange={(e) => (setLoginPassword(e.target.value), setShowLoginSuccess(false), setShowSpace(true))}
                            className={styles.auth_input}
                        />
                        {showLoginSuccess && (<p className={styles.login_success}>Email đăng nhập hoặc Mật khẩu của bạn không chính xác, vui lòng thử lại.</p>)}

                        {showSpace && (<div style={{ height: 20 }}></div>)}

                        <button className={styles.auth_form_btn} onClick={handleLogin}>
                            Đăng nhập
                        </button>
                        <a href="#" className={styles.forgot_password}>Quên mật khẩu?</a>
                    </form>
                )}

                {showRegisterForm && (
                    // Register Form
                    <form action="" className={`${styles.auth_form} ${styles.register_form}`}>
                        <h2>Đăng ký</h2>
                        <div className={styles.label_container}>
                            <label for="register_email" className={styles.auth_label}>Email</label>
                            <span className={styles.auth_span}>
                                Đã có tài khoản?
                                <span className={`${styles.span_action}`}
                                    onClick={() => (setShowRegisterForm(false), setShowLoginForm(true), setShowLoginSuccess(false), setShowSpace(true))}> Đăng nhập</span>
                            </span>
                        </div>
                        <input
                            type="text"
                            id="register_email"
                            value={registerUsername}
                            onChange={(e) => (setRegisterUserName(e.target.value), setShowRegisterSuccess(false), setShowSpace(true))}
                            className={styles.auth_input}
                        />

                        <div className={styles.label_container}>
                            <label for="register_password" className={styles.auth_label}>Mật khẩu</label>
                            <span className={`${styles.auth_span} ${styles.span_action}`}>
                                Xem
                            </span>
                        </div>
                        <input
                            type="password"
                            id="register_password"
                            value={registerPassword}
                            onChange={(e) => (setRegisterPassword(e.target.value), setShowRegisterSuccess(false), setShowSpace(true))}
                            className={styles.auth_input}
                        />

                        {showRegisterSuccess && (<p className={styles.login_success}>Email đã đăng ký tài khoản trước đó, vui lòng thử lại.</p>)}

                        {showSpace && (<div style={{ height: 20 }}></div>)}

                        <button className={styles.auth_form_btn}
                            // onClick={() => (setShowRegisterForm(false), setShowRegisterProfileForm(true))}
                            onClick={handleRegister}
                        >
                            Đăng ký miễn phí
                        </button>
                        <p className={styles.auth_policy}>Bằng cách bấm nút “Đăng ký miễn phí, bạn đang tạo một tài khoản và đồng ý với "<a href="#">Điều khoản dịch vụ</a> và <a href="#">Chính sách bảo mật</a>" của Lịch Sử Việt Nam.
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
                        <input
                            type="text"
                            id="auth_last_name"
                            placeholder="Điền họ của bạn"
                            className={styles.auth_input}
                        />
                        <div className={styles.label_container}>
                            <label for="auth_first_name" className={styles.auth_label}>Tên</label>
                        </div>
                        <input
                            type="text"
                            id="auth_first_name"
                            placeholder="Điền tên của bạn"
                            className={styles.auth_input}
                        />
                        {showLoginSuccess && (<p className={styles.login_success}>Email đăng nhập hoặc Mật khẩu của bạn không chính xác, vui lòng thử lại.</p>)}

                        {showSpace && (<div style={{ height: 20 }}></div>)}
                        <button className={styles.auth_form_btn}
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
                        <div style={{ height: 20 }}></div>
                        <button className={styles.auth_form_btn}>Xác nhận</button>
                        <a href="#" className={styles.forgot_password}>Gửi lại mã xác minh</a>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Login;