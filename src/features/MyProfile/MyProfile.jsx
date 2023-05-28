import styles from './MyProfile.module.scss';
import avatar from '../../resource/userImg.png'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userApi from '../../api/user';
import { toast, Toaster } from "react-hot-toast";

const MyProfile = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [newPasswordShown, setNewPasswordShown] = useState(false);
    const [disabledBtn, setDisabledBtn] = useState(true);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const navigate = useNavigate();

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const toggleNewPassword = () => {
        setNewPasswordShown(!newPasswordShown);
    }

    console.log(currentPassword, newPassword);
    const fetchData = () => {
        userApi.getInfo()
            .then(res => {
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setUserName(res.data.username);
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleSave = (e) => {
        e.preventDefault();
        const userInfo = {
            lastName: lastName,
            firstName: firstName
        }

        const updatePassword = {
            password: currentPassword,
            newPassword: newPassword
        }

        userApi.insertInfo(userInfo).then(res => {
            if (res.status === 200) {
                if(currentPassword === '' || newPassword === '') {
                    toast.success('Cập nhật thông tin hồ sơ thành công!');
                } else {
                    userApi.changePassword(updatePassword).then(res => {
                        if (res.status === 200) {
                            toast.success('Cập nhật thông tin hồ sơ thành công!');
                        }
                    })
                        .catch(function (error) {
                            console.log(error);
                        });
                }
            }

            const timer = setTimeout(() => {
                navigate('/home');
                window.location.reload();
            }, 2000);
            return () => clearTimeout(timer);
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className={styles.container}>
            <Toaster toastOptions={{
                duration: 2000,
                style: {
                    padding: '16px 25px',
                    fontSize: '1.4rem'
                }
            }} />
            <div className={styles.avatar_wrapper}>
                <h1>Hồ sơ của tôi</h1>
                <img src={avatar} alt="" />
                <h3>{firstName} {lastName}</h3>
            </div>
            <div className={styles.user_info_wrapper}>
                <form action="" className={styles.form}>
                    <h2>Hồ sơ</h2>
                    <p className={styles.desc}>Thông tin này sẽ được hiển thị trên profile của bạn.</p>
                    <div className={styles.label_container}>
                        <label htmlFor="form_last_name" className={styles.form_label}>Họ</label>
                    </div>
                    <input
                        type="text"
                        id="form_last_name"
                        value={lastName}
                        className={styles.form_input}
                        onChange={(e) => (setLastName(e.target.value), setDisabledBtn(false))}
                    />
                    <div className={styles.label_container}>
                        <label htmlFor="form_first_name" className={styles.form_label}>Tên</label>
                    </div>
                    <input
                        type="text"
                        id="form_first_name"
                        value={firstName}
                        onChange={(e) => (setFirstName(e.target.value), setDisabledBtn(false))}
                        className={styles.form_input}
                    />
                    <h2 className={styles.form_label_login}>Đăng nhập</h2>
                    <p className={styles.desc}>Thông tin đăng nhập website lichsuvietnam.com của bạn.</p>
                    <div className={styles.label_container}>
                        <label htmlFor="form_email" className={styles.form_label}>Tài khoản</label>
                    </div>
                    <input
                        type="text"
                        id="form_email"
                        value={userName}
                        className={`${styles.form_input} ${styles.form_input_disable}`}
                        disabled
                    />
                    <div className={styles.label_container}>
                        <label htmlFor="form_current_password" className={styles.form_label}>Mật khẩu hiện tại</label>
                        <span className={styles.show_password}
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
                        id="form_current_password"
                        value={currentPassword}
                        placeholder='Nhập mật khẩu hiện tại'
                        className={`${styles.form_input} ${styles.form_password}`}
                        onChange={e => (setCurrentPassword(e.target.value), setDisabledBtn(false))}
                    />
                    <div className={styles.label_container}>
                        <label htmlFor="form_new_password" className={styles.form_label}>Mật khẩu mới</label>
                        <span className={styles.show_password}
                            onClick={toggleNewPassword}>
                            {!newPasswordShown && (
                                <div>
                                    <i className="fa-solid fa-eye"></i>
                                    Xem
                                </div>
                            )}
                            {newPasswordShown && (
                                <div>
                                    <i className="fa-solid fa-eye-slash"></i>
                                    Ẩn
                                </div>
                            )}
                        </span>
                    </div>
                    <input
                        type={newPasswordShown ? "text" : "password"}
                        id="form_new_password"
                        placeholder='Nhập mật khẩu mới'
                        value={newPassword}
                        className={`${styles.form_input} ${styles.form_password}`}
                        onChange={e => (setNewPassword(e.target.value), setDisabledBtn(false))}
                    />
                    <div className={styles.form_btn_wrapper}>
                        <button 
                            className={disabledBtn === true ? `${styles.form_btn_disable}` : `${styles.form_btn}`} 
                            onClick={handleSave}
                            disabled={disabledBtn}
                        >Lưu</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MyProfile;