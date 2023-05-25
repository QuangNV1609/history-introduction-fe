import { useState } from "react";
import React from 'react'
import styles from './Login.module.scss';
import userApi from "../../api/user";
import headerLogo from '../../assets/image/header-logo.png';
import headerClose from '../../assets/image/header-close.png';
import OtpInput from 'otp-input-react';
import { useNavigate } from 'react-router-dom';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";

const Login = () => {
    //Login
    const [loginUsername, setLoginUserName] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    //Register
    const [otp, setOtp] = useState('');
    const [registerUsername, setRegisterUserName] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [active, setActive] = useState(true);
    const [user, setUser] = useState(null);

    const [showLoginForm, setShowLoginForm] = useState(true);
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const [showRegisterProfileForm, setShowRegisterProfileForm] = useState(false);
    const [showVerifyForm, setShowVerifyForm] = useState(false);
    const [showLoginSuccess, setShowLoginSuccess] = useState(false);
    const [showRegisterSuccess, setShowRegisterSuccess] = useState(false);
    const [showSpace, setShowSpace] = useState(true);
    const [passwordShown, setPasswordShown] = useState(false);
    const [showValidation, setShowValidation] = useState(false);

    const navigate = useNavigate();

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const user = {
            username: loginUsername,
            password: loginPassword
        }

        if (loginUsername === '' || loginPassword === '') {
            setShowValidation(true);
        }
        else {
            userApi.login(user).then(res => {
                if (res.status === 200) {
                    window.localStorage.setItem("jwtToken", res.data);
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
    }

    const handleCheckUsername = (e) => {
        e.preventDefault();
        if (registerUsername === '' || registerPassword === '') {
            setShowValidation(true);
            setShowSpace(false);
        } else {
            userApi.checkUsername(registerUsername).then(res => {
                if (res.data === false) {
                    setShowRegisterForm(false);
                    setShowRegisterProfileForm(true);
                } else {
                    setShowSpace(false);
                    setShowRegisterSuccess(true);
                }
            })
        }
    }

    function onCaptchVerify() {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
                'size': 'invisible',
                'callback': (response) => {
                    onSignup()
                },
                'expired-callback': () => {
                }
            }, auth);
        }
    }

    function onSignup() {
        if (lastName === '' || firstName === '' || phone === '') {
            // setShowSpace(false);
            setShowValidation(true)
        } else {
            onCaptchVerify();
            const appVerifier = window.recaptchaVerifier;
            const formatPhone = '+' + phone;
            signInWithPhoneNumber(auth, formatPhone, appVerifier)
                .then((confirmationResult) => {
                    window.confirmationResult = confirmationResult;
                    setShowVerifyForm(true);
                    setShowRegisterProfileForm(false);
                    toast.success('Đã gửi OTP thành công!');
                }).catch((error) => {
                    console.log(error);
                });
        }
    }

    function onOTPVerify(e) {
        e.preventDefault();
        window.confirmationResult.confirm(otp).then(async (res) => {
            console.log(res);
            setUser(res.user);
            const user = {
                username: registerUsername,
                password: registerPassword,
                active: active
            }
            const userLogin = {
                username: registerUsername,
                password: registerPassword
            }
            const userInfo = {
                lastName: lastName,
                firstName: firstName
            }

            console.log(userInfo.lastName, userInfo.firstName);
            // Dang ky 
            userApi.signIn(user).then(res => {
                console.log(res.status);
                if (res.status === 201) {
                    // dang nhap
                    userApi.login(userLogin).then(res => {
                        console.log(res.status);
                        if (res.status === 200) {
                            console.log(res.data);
                            window.localStorage.setItem("jwtToken", res.data);
                            //insert info
                            userApi.insertInfo(userInfo).then(res => {
                                if (res.status === 200) {
                                    toast.success('Đăng ký thành công!');
                                    const timer = setTimeout(() => {
                                        navigate('/home');
                                    }, 3000);
                                    return () => clearTimeout(timer);
                                }
                            })
                        }
                    })
                }
            })
                .catch(function (error) {
                    setShowSpace(false);
                    setShowRegisterSuccess(true);
                    console.log(error);
                });

        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className={styles.container}>
            <Toaster toastOptions={{ duration: 4000 }} />
            <div id='recaptcha-container'></div>
            <div className={styles.auth}>
                <img src={headerLogo} alt="logo" className={styles.header_logo_img} onClick={e => navigate('/')} />
                <img src={headerClose} alt="close button" className={styles.header_close_img} onClick={e => navigate('/')} />
                {showLoginForm && (
                    // Login form
                    <form action="" className={`${styles.auth_form} ${styles.login_form}`}>
                        <h2>Đăng nhập</h2>
                        <div className={styles.label_container}>
                            <label htmlFor="login_email" className={`${styles.auth_label} ${styles.first_label}`}>Tài khoản</label>
                            <span className={`${styles.auth_span} ${styles.first_label}`}>
                                Chưa có tài khoản?
                                <span className={`${styles.span_action}`}
                                    onClick={() => (setShowLoginForm(false), setShowRegisterForm(true), setShowLoginSuccess(false), setShowSpace(true), setShowValidation(false))}> Đăng ký</span>
                            </span>
                        </div>
                        <input
                            type="text"
                            id="login_email"
                            value={loginUsername}
                            onChange={(e) => (setLoginUserName(e.target.value), setShowLoginSuccess(false), setShowSpace(true), setShowValidation(false))}
                            className={styles.auth_input}
                        />
                        <div className={styles.label_container}>
                            <label htmlFor="login_password" className={styles.auth_label}>Mật khẩu</label>
                            <span className={`${styles.auth_span} ${styles.span_action}`}
                                onClick={togglePassword}>
                                {!passwordShown && (
                                    <div>
                                        <i className="fa-solid fa-eye"></i>
                                        Xem
                                    </div>
                                )}
                                {passwordShown && (
                                    <div>
                                        <i className="fa-solid fa-eye-slash"></i>
                                        Ẩn
                                    </div>
                                )}
                            </span>
                        </div>
                        <input
                            type={passwordShown ? "text" : "password"}
                            id="login_password"
                            value={loginPassword}
                            onChange={(e) => (setLoginPassword(e.target.value), setShowLoginSuccess(false), setShowSpace(true), setShowValidation(false))}
                            className={styles.auth_input}
                        />

                        {showValidation && <p className={styles.login_success}><i className="fa-solid fa-triangle-exclamation"></i>Vui lòng nhập đầy đủ thông tin tài khoản và mật khẩu.</p>}

                        {showLoginSuccess && (<p className={styles.login_success}><i className="fa-solid fa-triangle-exclamation"></i>Email hoặc mật khẩu không chính xác, vui lòng thử lại.</p>)}

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
                            <label htmlFor="register_email" className={`${styles.auth_label} ${styles.first_label}`}>Tài khoản</label>
                            <span className={`${styles.auth_span} ${styles.first_label}`}>
                                Đã có tài khoản?
                                <span className={`${styles.span_action}`}
                                    onClick={() => (setShowRegisterForm(false), setShowLoginForm(true), setShowLoginSuccess(false), setShowSpace(true), setShowValidation(false))}> Đăng nhập</span>
                            </span>
                        </div>
                        <input
                            type="text"
                            id="register_email"
                            value={registerUsername}
                            onChange={(e) => (setRegisterUserName(e.target.value), setShowRegisterSuccess(false), setShowSpace(true), setShowValidation(false))}
                            className={styles.auth_input}
                        />

                        <div className={styles.label_container}>
                            <label htmlFor="register_password" className={styles.auth_label}>Mật khẩu</label>
                            <span className={`${styles.auth_span} ${styles.span_action}`}
                                onClick={togglePassword}>
                                {!passwordShown && (
                                    <div>
                                        <i className="fa-solid fa-eye"></i>
                                        Xem
                                    </div>
                                )}
                                {passwordShown && (
                                    <div>
                                        <i className="fa-solid fa-eye-slash"></i>
                                        Ẩn
                                    </div>
                                )}
                            </span>
                        </div>
                        <input
                            type={passwordShown ? "text" : "password"}
                            id="register_password"
                            value={registerPassword}
                            onChange={(e) => (setRegisterPassword(e.target.value), setShowRegisterSuccess(false), setShowSpace(true), setShowValidation(false))}
                            className={styles.auth_input}
                        />
                        {showValidation && <p className={styles.login_success}><i className="fa-solid fa-triangle-exclamation"></i>Vui lòng nhập đầy đủ thông tin tài khoản và mật khẩu.</p>}
                        {showRegisterSuccess && (<p className={styles.login_success}><i className="fa-solid fa-triangle-exclamation"></i>Tài khoản đã đăng ký trước đó, vui lòng thử lại.</p>)}

                        {showSpace && (<div style={{ height: 20 }}></div>)}

                        <button className={styles.auth_form_btn}
                            // ham kiem tra tai khoan da ton tai chua, kiem tra xem co de trong ko, neu chua thi show loi va show form verify
                            onClick={handleCheckUsername}
                        >
                            Đăng ký miễn phí
                        </button>
                        <p className={styles.auth_policy}>Bằng cách bấm nút “Đăng ký miễn phí", bạn đang tạo một tài khoản và đồng ý với "<a href="#">Điều khoản dịch vụ</a> và <a href="#">Chính sách bảo mật</a>" của Lịch Sử Việt Nam.
                        </p>
                    </form>
                )}

                {showRegisterProfileForm && (
                    //Register Profile Form
                    <div className={`${styles.auth_form} ${styles.register_profile_form}`}>
                        <h2>Thông tin của bạn là gì?</h2>
                        <p className={styles.fullName_desc}>Thông tin này sẽ được hiển thị trên profile của bạn.</p>
                        <div className={styles.label_container}>
                            <label htmlFor="auth_last_name" className={`${styles.auth_label} ${styles.first_label}`}>Họ</label>
                        </div>
                        <input
                            type="text"
                            id="auth_last_name"
                            placeholder="Điền họ của bạn"
                            className={styles.auth_input}
                            onChange={e => (setLastName(e.target.value), setShowValidation(false))}
                        />
                        <div className={styles.label_container}>
                            <label htmlFor="auth_first_name" className={styles.auth_label}>Tên</label>
                        </div>
                        <input
                            type="text"
                            id="auth_first_name"
                            placeholder="Điền tên của bạn"
                            className={styles.auth_input}
                            onChange={e => (setFirstName(e.target.value), setShowValidation(false))}
                        />
                        <div className={styles.label_container}>
                            <label htmlFor="auth_phone" className={styles.auth_label}>Số điện thoại</label>
                        </div>
                        <PhoneInput inputStyle={{ height: '44px', width: '382.5px' }} country={"vn"} value={phone} onChange={setPhone} inputClass="auth_phone" />
                        {/* {showLoginSuccess && (<p className={styles.login_success}><i className="fa-solid fa-circle-exclamation"></i>Email đăng nhập hoặc Mật khẩu của bạn không chính xác, vui lòng thử lại.</p>)} */}
                        <div style={{ height: 10 }}></div>
                        {showValidation && <p className={styles.login_success}><i className="fa-solid fa-triangle-exclamation"></i>Vui lòng nhập đầy đủ thông tin cá nhân của bạn.</p>}
                        {showSpace && (<div style={{ height: 20 }}></div>)}
                        <button className={styles.auth_form_btn}
                            //kiem tra xem co de trong khong, co thi show loi
                            onClick={onSignup}>Gửi OTP qua SMS</button>
                    </div>
                )}

                {showVerifyForm && (
                    //Verify email
                    <div className={`${styles.auth_form} ${styles.verify_form}`}>
                        <h2>Vui lòng xác minh tài khoản</h2>
                        <div className={styles.verify_desc}>
                            <p>☑️  Chúng tôi đã gửi mã xác thực đến SMS thông qua số điện thoại của bạn. Vui lòng không tiết lộ mã OTP!</p>
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
                            <p>Nếu bạn không nhìn thấy tin nhắn, hãy kiểm tra thư mục thư rác của bạn. Chúng tôi gửi từ login@lichsuvietnam.com</p>
                        </div>
                        <div style={{ height: 20 }}></div>
                        {/* kiem tra otp dung khong, neu ko thi show loi, neu dung thi cho dang nhap */}
                        <button className={styles.auth_form_btn} onClick={onOTPVerify}>Xác nhận</button>
                        <a href="#" className={styles.forgot_password}>Gửi lại mã xác minh</a>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Login;