import React, { useState } from "react"
import style from "./TabBar.module.scss"
import { Link } from "react-router-dom"

const TabBar = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const onThemeClick = (e) => {
        setActiveIndex(Number(e.target.getAttribute("index")))
    }
    const listTitle = ["Thời kỳ lịch sử", "Thời kỳ cổ đại", "Thời kỳ cổ đại", "Thời kỳ cổ đại", "Thời kỳ cổ đại", "Thời kỳ cổ đại", "Thời kỳ cổ đại",]
    return (
        <div className={style.container}> 
            <div className={style.tab_bar}>
                <h2>Lịch sử VN Quizzes</h2>
                {listTitle.map((item, index) => React.createElement(Link, {
                    className: style.link_quest,
                    key: index,
                    index: index,
                    active: (activeIndex === index).toString(),
                    to: "/qa",
                    onClick: onThemeClick
                }, item))}  
            </div>
        </div>
    )
}

export default TabBar