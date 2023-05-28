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
    const [numberAccount, setNumberAccount] = useState(0)
    const [numberActive, setNumberActive] = useState(0)
    const roleAdmin2 = "ROLE_ADMIN_2"
    const itemPerPage = 10
    const [listAccount, setListAccount] = useState([])
    const [listAllAccount, setListAllAccount] = useState([])
    const [refreshData, setRefreshData] = useState(0)
    const [userNameRegis, setUserName] = useState("")
    const [passwordRegis, setPassword] = useState("")
    const [idAdmin2, setIdAdmin2] = useState(null)
    const [page, setPage] = useState(0)
    const [pageChange, setPageChange] = useState(0)
    const [listCurrentAccount, setListCurrentAccount] = useState([])
    const [totalPage, setTotalPage] = useState(0)
    const [isShowInput, setShowInput] = useState(false)
    const [query, setQuery] = useState("")
    const nameIndex = 0
    const activeIndex = 2

    const blockAccount = (name, isActive) => {
        if (isActive) {
            showLoading(true)
            adminApi.blockAccount(name)
                .then(res => {
                    setRefreshData(refreshData + 1)
                })
        }
    }

    const deleteAccount = (name) => {
        showLoading(true)
        adminApi.deleteAccount(name)
            .then(res => {
                setRefreshData(refreshData + 1)
                showLoading(false)
            })
    }

    const addAccount = () => {
        showLoading(true)
        const data = {
            username: userNameRegis,
            password: passwordRegis,
            active: true,
            roles: [
                {
                    id: idAdmin2
                }
            ]
        }
        adminApi.createUser(data)
            .then(res => {
                console.log(res)
                hideDialog()
                showLoading(false)
                setRefreshData(refreshData + 1)
            })
    }

    useEffect(() => {
        adminApi.getListRole()
            .then(res => {
                res.data.forEach(item => {
                    if (item.roleName === roleAdmin2) {
                        setIdAdmin2(item.id)
                    }
                })
            })
            .catch(e => {
                console.log(e)
            })

    }, [])

    useEffect(() => {
        showLoading(true)
        console.log("reload data")
        adminApi.getListAdmin2()
            .then(response => {
                setListAccount(response.data)
                setListAllAccount(response.data)
                setNumberAccount(response.data.length)
                let count = 0
                response.data.forEach(item => {
                    if (item[activeIndex]) {
                        count++
                    }
                })
                setNumberActive(count)
                setPage(1)
                setPageChange(pageChange + 1)
                console.log("a")
                if (response.data.length % itemPerPage === 0) {
                    setTotalPage(response.data.length / itemPerPage)
                } else {
                    setTotalPage(Math.ceil(response.data.length / itemPerPage))
                }
                showLoading(false)
            })
    }, [refreshData])

    useEffect(() => {
        console.log(`pageChange: ${page} ${listAccount.length}`)
        const startIndex = (page - 1) * itemPerPage
        let endIndex = page * itemPerPage
        if (endIndex > listAccount.length) {
            endIndex = listAccount.length
        }
        setListCurrentAccount(listAccount.slice(startIndex, endIndex))
    }, [pageChange, listAccount])

    useEffect(() => {
        if (query.trim() !== "") {
            const tempList = []
            listAllAccount.forEach((item) => {
                if (item[nameIndex].includes(query.trim())) {
                    tempList.push(item)
                }
            })
            setListAccount(tempList)
            setTotalPage(Math.ceil(tempList.length / itemPerPage))
        } else {
            setListAccount(listAllAccount)
            setTotalPage(Math.ceil(listAllAccount.length / itemPerPage))
        }

        setPage(1)
        setPageChange(pageChange + 1)
    }, [query])

    const [showDialog, setShowDialog] = useState(false)

    const addAccountOnClick = (e) => {
        setShowDialog(true)
        document.body.style.overflow = "hidden"
    }

    const hideDialog = () => {
        setShowDialog(false)
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
                            <span className={style.numberActivity}>{numberActive + " hoạt động"}</span>
                        </div>
                        <div className={style.function}>
                            {
                                !isShowInput && <img src={search} alt="search" className={style.search}
                                    onClick={() => setShowInput(true)} />
                            }
                            {
                                isShowInput && <input type="text" className={style.search_input} placeholder="Tìm kiếm"
                                    onKeyDown={e => {
                                        if (e.key === "Enter") {
                                            console.log(`enter: ${e.target.value}`)
                                            setQuery(e.target.value)
                                        }
                                    }} />
                            }
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
                {
                    listCurrentAccount.map((item, index) => (
                        <AccountItem
                            name={item[nameIndex]}
                            key={index}
                            blockAccount={(e) => blockAccount(item[nameIndex], item[activeIndex])}
                            deleteAccount={(e) => deleteAccount(item[nameIndex])}
                            isActive={item[activeIndex]} />
                    ))
                }
                <div className={style.footer}>
                    <div className={style.footer_before}>
                        <span className={style.text_number_item}>Số thẻ trên mỗi trang</span>
                        <span className={style.item_per_page}>{itemPerPage}</span>
                        {/* <div>
                            <img src={iconUp} alt="up" />
                            <img src={iconDown} alt="down" />
                        </div> */}
                    </div>
                    <div className={style.footer_after}>
                        <span>{`${page} của ${totalPage} trang`}</span>
                        <img src={iconLeft} alt="left" className={style.previous_page}
                            onClick={
                                () => {
                                    console.log(page)
                                    if (page > 1) {
                                        setPage(page - 1)
                                        setPageChange(pageChange + 1)
                                    }
                                }
                            } />
                        <img src={iconRight} alt="right"
                            onClick={
                                () => {
                                    if (page < totalPage) {
                                        setPage(page + 1)
                                        setPageChange(pageChange + 1)
                                    }
                                }
                            } />
                    </div>
                </div>
            </div>
            {showDialog &&
                <div className={style.dialog_add_account}>
                    <div className={style.dialog}>
                        <span>Thêm tài khoản admin</span>
                        <label htmlFor="input_add_email">Email</label>
                        <input
                            type="text"
                            className={style.input_email}
                            id="input_add_email"
                            onChange={e => setUserName(e.target.value)} />
                        <label htmlFor="input_add_pass">Mật khẩu</label>
                        <input
                            type="password"
                            className={style.input_passWord}
                            id="input_add_pass"
                            onChange={e => setPassword(e.target.value)} />
                        <button className={style.btn_add_account} onClick={e => addAccount()}>Thêm tài khoản</button>
                        <button className={style.btn_cancel} onClick={(e) => hideDialog()}>Hủy</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default ManageAccount
