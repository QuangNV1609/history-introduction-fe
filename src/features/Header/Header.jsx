import favicon from "../../resource/favicon.ico"
import avatar from "../../resource/avatar.svg"
import menu from "../../resource/menu.svg"
import search from "../../resource/search.svg"
import './Header.scss'
import { Link } from "react-router-dom"
import React from "react"
import { useState } from "react"

const Header = () => {
    const titleNavbar = [["TRANG CHỦ", "home"], ["NGÀY NÀY TRONG LỊCH SỬ", "historyDay"], ["THỜI KỲ", "period"], ["NHÂN VẬT", "figure"], ["Q&A", "qa"]]
    const link = window.location.href.split("/")
    const currentPage = link[link.length - 1]
    let indexInitPage = 0 
    titleNavbar.forEach((item, index) => {
        if (item[1] === currentPage) {
            indexInitPage = index
        }
    })
    const [activeIndex, setActiveIndex] = useState(indexInitPage)
    const onNavbarTitleClick = (event) => {
        setActiveIndex(Number(event.target.getAttribute("index")))
    }

    return (
        <div className="header">
            <div className="header-container">
                <div className="header-container-logo">
                    <img src={favicon} alt="logo"/>
                    <div />
                    <h1>LỊCH SỬ VIỆT NAM</h1>
                </div>
                <div className="header-container-avatar">
                    <img src={avatar} alt="avatar"/>
                    <span>Đăng ký để xem những<br />bài viết yêu thích của bạn</span>
                </div>
            </div>
            <div className="header-navbar">
                <div className="header-navbar-content">
                    <img src={menu} alt="menu"/>
                    {titleNavbar.map((item, index) => React.createElement(Link, {
                        className: "header-navbar-title",
                        key: index,
                        index: index,
                        active: (activeIndex === index).toString(),
                        to: "/" + item[1],
                        onClick: onNavbarTitleClick
                    }, item[0]))}
                </div>
                <div className="header-navbar-search">
                    <img src={search} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header;
