import style from "./AccountItem.module.scss"
import userSample from "../../../../resource/user_default.svg"
import deleteIcon from "../../../../resource/delete.svg"
import lockIcon from "../../../../resource/icon_lock.svg"

const AccountItem = ({ name, email, isActive }) => {
    return (
        <div className={style.item}>
            <div className={style.item_before}>
                <input type="checkbox" />
                <img src={userSample} alt="avatar default" className={style.avatar} />
                <div className={style.name_email}>
                    <span className={style.name}>{name}</span>
                    <span className={style.email}>{email}</span>
                </div>
            </div>
            <div className={style.item_after}>
                <img src={lockIcon} alt="lock" />
                <span className={style.lock_span}>Khóa tài khoản</span>
                <img src={deleteIcon} alt="delete" />
                <span>Xóa tài khoản</span>
            </div>
        </div>
    )
}

export default AccountItem