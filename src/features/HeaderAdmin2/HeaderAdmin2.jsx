import styles from './HeaderAdmin2.module.scss';
import avatar from "../../resource/avatar.svg"
import logo from "../../resource/logo2.png";
import React from 'react';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import userApi from '../../api/user';

const HeaderAdmin2 = ({ getInputValue }) => {
    const navigate = useNavigate();
    const [role, setRole] = useState('');
    const [searchState, setSearchState] = useState(false);
    const [inputSearch, setInputSearch] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const userToken = window.localStorage.getItem('jwtToken');

    const titleNavbar = [["TRANG CHỦ", "home"], ["NGÀY NÀY TRONG LỊCH SỬ", "historyDay"], ["THỜI KỲ", "period"], ["NHÂN VẬT", "figure"], ["Q&A", "qa"]]
    const link = window.location.href.split("/")
    const currentPage = link[link.length - 1]
    let indexInitPage = 0;
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

    const fetchData = () => {
        if (userToken !== null) {
            userApi.getInfo()
                .then(res => {
                    if(res.data.firstName === null || res.data.lastName === null) {
                        setFirstName("NEW");
                        setLastName("USER")
                    } else {
                        setFirstName(res.data.firstName);
                        setLastName(res.data.lastName)
                    }
                    setRole(res.data.roleName[0]);
                })
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleBackHome = () => {
        window.location.href = '/';
        navigate('/');
    }

    const handleSearchChange = (e, value) => {
        if (e.key === 'Enter') {
            getInputValue(value);
        }
    }

    return (
        <div className={styles.header}>
            <div className={styles.header_left}>
                <div className={styles.header_logo} onClick={handleBackHome}>
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
                {searchState && (
                    <div className={styles.search_wrapper}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input
                            type="text"
                            placeholder='Tìm kiếm bài viết'
                            value={inputSearch}
                            onChange={(e) => setInputSearch(e.target.value)}
                            onKeyDown={(e) => handleSearchChange(e, e.target.value)}
                        />
                        <i className="fa-solid fa-xmark" onClick={() => (setSearchState(!searchState), setInputSearch(''), getInputValue(''))}></i>
                    </div>
                )}
                {!searchState && (
                    <div className={styles.user_info_wrapper}>
                        <div className={styles.header_search} onClick={() => setSearchState(!searchState)}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
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
                                    <span className={styles.header_user_name}>{firstName + ' ' + lastName}</span>
                                    <i className="fa-solid fa-chevron-down"></i>

                                    {(role === 'ROLE_ADMIN_2') && (
                                        <ul className={styles.header_user_list}>
                                            <li className={styles.header_user_item}>
                                                <a href="/myProfile">Hồ sơ của tôi</a>
                                            </li>
                                            <li className={styles.header_user_item}>
                                                <a href="/recentWatched">Đã xem gần đây</a>
                                            </li>
                                            <li className={styles.header_user_item}>
                                                <div className={styles.user_item_line}></div>
                                            </li>
                                            <li className={styles.header_user_item}>
                                                <a href="/createPost">Tạo bài viết mới</a>
                                            </li>
                                            <li className={styles.header_user_item}>
                                                <a href="/myCreatePost">Bài viết của tôi</a>
                                            </li>
                                            <li className={styles.header_user_item}>
                                                <a href="/listqa">Tạo Quiz mới</a>
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
                                    )}

                                    {(role === 'ROLE_ADMIN') && (
                                        <ul className={styles.header_user_list}>
                                            <li className={styles.header_user_item}>
                                                <a href="/myProfile">Hồ sơ của tôi</a>
                                            </li>
                                            <li className={styles.header_user_item}>
                                                <a href="/recentWatched">Đã xem gần đây</a>
                                            </li>
                                            <li className={styles.header_user_item}>
                                                <div className={styles.user_item_line}></div>
                                            </li>
                                            <li className={styles.header_user_item}>
                                                <a href="/admin">Quản lý tài khoản</a>
                                            </li>
                                            <li className={styles.header_user_item}>
                                                <a href="/approvePost">Quản lý bài viết</a>
                                            </li>
                                            <li className={styles.header_user_item}>
                                                <a href="/approveQuizz">Quản lý quizzes</a>
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
                                    )}
                                    {(role === undefined) && (
                                        <ul className={styles.header_user_list}>
                                            <li className={styles.header_user_item}>
                                                <a href="/myProfile">Hồ sơ của tôi</a>
                                            </li>
                                            <li className={styles.header_user_item}>
                                                <a href="/recentWatched">Đã xem gần đây</a>
                                            </li>
                                            <li className={styles.header_user_item}>
                                                <div className={styles.user_item_line}></div>
                                            </li>
                                            <li className={styles.header_user_item}>
                                                <a href="/historyscore">Lịch sử Quizz</a>
                                            </li>
                                            <li className={styles.header_user_item}>
                                                <a href="#">Trợ giúp</a>
                                            </li>
                                            <li className={styles.header_user_item}>
                                                <a href="#" onClick={HandleLogOut}>Đăng xuất</a>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default HeaderAdmin2;