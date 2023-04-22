import styles from './HeaderAdmin2.module.scss';
import avatar from "../../resource/avatar.svg"
import logo from "../../resource/logo2.png";
import React from 'react';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const HeaderAdmin2 = ({ userToken }) => {
    const navigate = useNavigate();
    console.log(userToken);

    const titleNavbar = [["TRANG CHỦ", "home"], ["NGÀY NÀY TRONG LỊCH SỬ", "historyDay"], ["THỜI KỲ", "period"], ["NHÂN VẬT", "figure"], ["Q&A", "qa"]]
    const link = window.location.href.split("/")
    const currentPage = link[link.length - 1]
    let indexInitPage = 0
    titleNavbar.forEach((item, index) => {
        if (item[1] === currentPage) {
            indexInitPage = index;
        }
    })
    const [activeIndex, setActiveIndex] = useState(indexInitPage)
    const onNavbarTitleClick = (event) => {
        setActiveIndex(Number(event.target.getAttribute("index")))
    }

    const HandleLogOut = (e) => {
        localStorage.clear();
        window.location.href = '/';
    }

    return (
        <div className={styles.header}>
            <div className={styles.header_left}>
                <div className={styles.header_logo}>
                    <img src={logo} alt="logo" className={styles.header_logo_img} />
                </div>

                <div className={styles.header_navbar}>
                    {titleNavbar.map((item, index) => React.createElement(Link, {
                        className: styles.header_navbar_title,
                        key: index,
                        index: index,
                        active: (activeIndex === index).toString(),
                        to: "/" + item[1],
                        onClick: onNavbarTitleClick
                    }, item[0]))}
                </div>
            </div>

            <div className={styles.header_right}>
                <div className={`${styles.header_user_info}`}>

                    {(userToken === null) && (
                        <span
                            className={styles.header_user_name}
                            onClick={(e) => { navigate('/login') }}
                        >
                            ĐĂNG NHẬP | ĐĂNG KÝ</span>
                    )}

                    {(userToken !== null) && (
                        <div>
                            <img src={avatar} alt="avatar" className={styles.header_user_img} />
                            <span className={styles.header_user_name}>TÊN USER</span>
                            <i className="fa-solid fa-chevron-down"></i>

                            <ul className={styles.header_user_list}>
                                <li className={styles.header_user_item}>
                                    <a href="#">Hồ sơ của tôi</a>
                                </li>
                                <li className={styles.header_user_item}>
                                    <div className={styles.user_item_line}></div>
                                </li>
                                <li className={styles.header_user_item}>
                                    <a href="#">Tạo bài viết mới</a>
                                </li>
                                <li className={styles.header_user_item}>
                                    <a href="#">Bài viết của tôi</a>
                                </li>
                                <li className={styles.header_user_item}>
                                    <a href="#">Tạo Quiz mới</a>
                                </li>
                                <li className={styles.header_user_item}>
                                    <a href="#">Quiz của tôi</a>
                                </li>
                                <li className={styles.header_user_item}>
                                    <div className={styles.user_item_line}></div>
                                </li>
                                <li className={styles.header_user_item}>
                                    <a href="#">Trợ giúp</a>
                                </li>
                                <li className={styles.header_user_item}>
                                    <a href="#" onClick={HandleLogOut}>Đăng xuất</a>
                                </li>
                            </ul>

                            {/* <ul className={styles.header_user_list}>
                                <li className={styles.header_user_item}>
                                    <a href="#">Hồ sơ của tôi</a>
                                </li><ul className={styles.header_user_list}>
                                <li className={styles.header_user_item}>
                                    <a href="#">Hồ sơ của tôi</a>
                                </li>
                                <li className={styles.header_user_item}>
                                    <div className={styles.user_item_line}></div>
                                </li>
                                <li className={styles.header_user_item}>
                                    <a href="#">Quản lý tài khoản</a>
                                </li>
                                <li className={styles.header_user_item}>
                                    <a href="#">Quản lý phê duyệt</a>
                                </li>
                                <li className={styles.header_user_item}>
                                    <div className={styles.user_item_line}></div>
                                </li>
                                <li className={styles.header_user_item}>
                                    <a href="#">Trợ giúp</a>
                                </li>
                                <li className={styles.header_user_item}>
                                    <a href="#" onClick={HandleLogOut}>Đăng xuất</a>
                                </li>
                            </ul>
                                <li className={styles.header_user_item}>
                                    <a href="#">Đã xem gần đây</a>
                                </li>
                                <li className={styles.header_user_item}>
                                    <div className={styles.user_item_line}></div>
                                </li>
                                <li className={styles.header_user_item}>
                                    <a href="#">Trợ giúp</a>
                                </li>
                                <li className={styles.header_user_item}>
                                    <a href="#" onClick={HandleLogOut}>Đăng xuất</a>
                                </li>
                            </ul> */}

                            {/*  */}
                        </div>
                    )}
                </div>
                <div className={styles.header_search}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className={styles.header_menu}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>
        </div>
    )
}

export default HeaderAdmin2;