import styles from './MyProfile.module.scss';
import avatar from '../../resource/userImg.png'
import { useState } from 'react';

const MyProfile = () => {
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <div className={styles.container}>
            <div className={styles.avatar_wrapper}>
                <h1>Hồ sơ của tôi</h1>
                <img src={avatar} alt="" />
                <h3>Họ Tên</h3>
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
                        className={styles.form_input}
                    />
                    <div className={styles.label_container}>
                        <label htmlFor="form_first_name" className={styles.form_label}>Tên</label>
                    </div>
                    <input
                        type="text"
                        id="form_first_name"
                        className={styles.form_input}
                    />
                    <h2 className={styles.form_label_login}>Đăng nhập</h2>
                    <p className={styles.desc}>Thông tin đăng nhập website lichsuvietnam.com của bạn.</p>
                    <div className={styles.label_container}>
                        <label htmlFor="form_email" className={styles.form_label}>Email</label>
                    </div>
                    <input
                        type="text"
                        id="form_email"
                        className={styles.form_input}
                    />
                    <div className={styles.label_container}>
                        <label htmlFor="form_password" className={styles.form_label}>Mật khẩu</label>
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
                        id="form_password"
                        className={styles.form_input}
                    />
                    <div className={styles.form_btn_wrapper}>
                        <button className={styles.form_btn}>Lưu</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MyProfile;