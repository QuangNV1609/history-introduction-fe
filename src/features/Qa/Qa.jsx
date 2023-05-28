import React from "react"
import style from "./Qa.module.scss"
import TabBar from "./TabBar"
import Exam from "./exam/exam"

const Qa = () => {

    return (
        <div className={style.container}>
            <div className={style.empty}></div>
            <div className={style.content}>
                <TabBar />
                <Exam />
            </div>
        </div>
    )
}

export default Qa
