import style from "./ManageAccount.module.scss"
import favicon from "../../resource/favicon.ico"
import search from "../../resource/search_black.svg"
import menu from "../../resource/menu_black.svg"
import arrowDown from "../../resource/arrow_down_black.svg"
import arrowUp from "../../resource/arrow_up.svg"
import iconUp from "../../resource/icon_up.svg"
import iconDown from "../../resource/icon_down.svg"
import iconLeft from "../../resource/icon_left.svg"
import iconRight from "../../resource/icon_right.svg"
import AccountItem from "./component/accountItem/AccountItem"
import { useEffect, useState } from "react"
import adminApi from "../../api/admin"

const ManageAccount = ({ showLoading }) => {
    const numberAccount = 30
    const numberActivity = 15
    const [listAccount, setListAccount] = useState([])
    const nameIndex = 0
    const activeIndex = 2


    useEffect(() => {
        const getListAdmin = async () => {
            const response = await adminApi.getListAdmin2()
            setListAccount(response.data)
            console.log(response.data)
            console.log(listAccount)
        }
        getListAdmin()
    }, [])
    // useEffect(() => {
    //     const getListRole = async () => {
    //         console.log(await adminApi.getListRole())
    //     }
    //     getListRole()
    // })

    const [showDialog, setShowDialog] = useState(false)

    const addAccountOnClick = (e) => {
        console.log(showLoading)
        setShowDialog(true)
        document.body.style.overflow = "hidden"
    }

    const hideDialog = (e) => {
        setShowDialog(false)
        console.log("hide")
        document.body.style.overflow = "auto"
    }
    return (
        <div className={style.relative}>
            <div className={style.header}>
                <div className={style.header_container}>
                    <div className={style.header_container_logo}>
                        <div className={style.header_container_logo_line}>
                            <img src={favicon} alt="logo" />
                            <div />
                        </div>
                        <span>LỊCH SỬ VIỆT NAM</span>
                    </div>
                </div>
                <div className={style.header_info}>
                    <span>Cường</span>
                    <img src={arrowDown} alt="drop down" />
                    <div className={style.line} />
                    <img src={search} alt="search" className={style.search} />
                    <img src={menu} alt="menu" className={style.menu} />
                </div>
            </div>
            <div className={style.content}>
                <div className={style.content_container}>
                    <div className={style.content_container_header}>
                        <div className={style.info}>
                            <span className={style.manage}>Quản lý tài khoản</span>
                            <div className={style.line} />
                            <span className={style.numberAccount}>{numberAccount + " tài khoản"}</span>
                            <div className={style.circle} />
                            <span className={style.numberActivity}>{numberActivity + " hoạt động"}</span>
                        </div>
                        <div className={style.function}>
                            <img src={search} alt="search" className={style.search} />
                            <span className={style.add_account} onClick={(e) => addAccountOnClick()}>Thêm tài khoản +</span>
                        </div>
                    </div>
                    <div className={style.content_container_sub_header}>
                        <div>
                            <span>Tên</span>
                            <img src={arrowUp} alt="arrow up" />
                        </div>
                    </div>
                </div>
                <div>
                    {
                        listAccount.map((item) => {
                            <AccountItem name={item[0]} />
                        })
                    }
                </div>
                <div className={style.footer}>
                    <div className={style.footer_before}>
                        <span className={style.text_number_item}>Số thẻ trên mỗi trang</span>
                        <span className={style.item_per_page}>10</span>
                        <div>
                            <img src={iconUp} alt="up" />
                            <img src={iconDown} alt="down" />
                        </div>
                    </div>
                    <div className={style.footer_after}>
                        <span>1 của 3 trang</span>
                        <img src={iconLeft} alt="left" className={style.previous_page} />
                        <img src={iconRight} alt="right" />
                    </div>
                </div>
            </div>
            {showDialog &&
                <div className={style.dialog_add_account}>
                    <div className={style.dialog}>
                        <span>Thêm tài khoản admin</span>
                        <label htmlFor="input_add_email">Email</label>
                        <input type="text" className={style.input_email} id="input_add_email" />
                        <label htmlFor="input_add_pass">Mật khẩu</label>
                        <input type="text" className={style.input_passWord} id="input_add_pass" />
                        <button className={style.btn_add_account}>Thêm tài khoản</button>
                        <button className={style.btn_cancel} onClick={(e) => hideDialog()}>Hủy</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default ManageAccount
