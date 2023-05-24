import "./OtpTest.scss";
import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";

const OtpTest = () => {
    const [otp, setOtp] = useState('');
    const [phone, setPhone] = useState('');
    const [showRegisterProfileForm, setShowRegisterProfileForm] = useState(true);
    const [showVerifyForm, setShowVerifyForm] = useState(false);
    const [user, setUser] = useState(null);

    function onCaptchVerify() {
        if (!window.recaptchaVerifier) {
            // alert('hi');
            window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
                'size': 'invisible',
                'callback': (response) => {
                    // alert('hi');
                    onSignup()
                },
                'expired-callback': () => {
                    // alert('hi');
                }
            }, auth);
        }
    }

    function onSignup() {
        onCaptchVerify();

        const appVerifier = window.recaptchaVerifier;
        const formatPhone = '+' + phone;
        signInWithPhoneNumber(auth, formatPhone, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                setShowVerifyForm(true);
                setShowRegisterProfileForm(false);
                toast.success('OTP sended successfully!');
                // alert('hi');
            }).catch((error) => {
                console.log(error);
                // alert('hi');
            });
    }

    return (
        <div className='container'>
            <Toaster toastOptions={{ duration: 4000 }} />
            <div id='helo'>helo</div>
            <div id='recaptcha-container'></div>
            {user ? (<h2>Login Success</h2>) : (
                <div className="auth">
                    {showRegisterProfileForm && (
                        //Register Profile Form
                        <form action="" className="auth_form register_profile_form">
                            <h2>SĐT của bạn là gì?</h2>
                            <p className="fullName_desc">Tên này sẽ được hiển thị trên profile của bạn.</p>
                            <div className="label_container">
                                <label htmlFor="auth_phone" className="auth_label">Số điện thoại</label>
                            </div>
                            <PhoneInput inputStyle={{ height: '44px', width: '380px' }} country={"vn"} value={phone} onChange={setPhone} />

                            <button
                                onClick={onSignup}
                                className="auth_form_btn"
                            >
                                Gửi mã qua SMS
                            </button>
                        </form>
                    )}

                    {showVerifyForm && (
                        //Verify email
                        <form action="" className="auth_form verify_form">
                            <h2>Vui lòng xác minh email</h2>
                            <div className="verify_desc">
                                <p>☑️  Chúng tôi đã gửi mã xác thực đến auth@gmail.com của bạn.</p>
                            </div>
                            <h4>Nhập mã xác thực</h4>
                            <div className="otp_inputs">
                                <OtpInput
                                    value={otp}
                                    onChange={setOtp}
                                    OTPLength={6}
                                    otpType="number"
                                    disabled={false}
                                    autoFocus
                                    className="otp_container"
                                ></OtpInput>
                            </div>

                            <div className="verify_sub_desc">
                                <p>Nếu bạn không nhìn thấy email, hãy kiểm tra thư mục thư rác của bạn. Chúng tôi gửi từ login@lichsuvietnam.com</p>
                            </div>
                            <div style={{ height: 20 }}></div>
                            <button className="auth_form_btn">
                                Xác nhận
                            </button>
                            <a href="#" className="forgot_password">Gửi lại mã xác minh</a>
                        </form>
                    )}
                </div>
            )}
        </div>
    )
}

export default OtpTest;