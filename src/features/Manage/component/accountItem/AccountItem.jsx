import style from "./AccountItem.module.scss"
import userSample from "../../../../resource/user_default.svg"
import deleteIcon from "../../../../resource/delete.svg"
import lockIcon from "../../../../resource/icon_lock.svg"
import { useEffect, useState } from "react"

const AccountItem = ({ name, email, isActive, blockAccount, deleteAccount }) => {
    const [lock, setLock] = useState(true);
    useEffect(() => {
        setLock(isActive)
    }, [])

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
                {/* <img src={lockIcon} alt="lock" onClick={(e) => blockAccount(e)} /> */}
                {lock && (<i className="fa-solid fa-lock" onClick={(e) => (blockAccount(e), setLock(!lock))}></i>)}
                {!lock && (<i className="fa-solid fa-unlock" onClick={(e) => (blockAccount(e), setLock(!lock))}></i>)}
                <span className={isActive ? style.lock_span : style.unlock} onClick={(e) => (blockAccount(e), setLock(!lock))} >{lock === true ? 'Khóa tài khoản' : 'Huỷ khóa tài khoản'}</span>
                {/* <img src={deleteIcon} alt="delete" onClick={(e) => deleteAccount(e)} /> */}
                <i className="fa-solid fa-trash" onClick={(e) => deleteAccount(e)}></i>
                <span onClick={(e) => deleteAccount(e)}>Xóa tài khoản</span>
            </div>
        </div>
    )
}

export default AccountItem