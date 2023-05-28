import TabBar from "../../TabBar"
import style from "./resultDetail.module.scss"

const ResultDetail = () => {
    return (
        <div className={style.container}>
            <div className={style.empty}></div>
            <div className={style.content}>
                <TabBar />
                <div className={style.main_data}> 
                    <span className={style.theme}>Thời Kỳ XXXXX</span>
                    <div className={style.data}>
                        <span className={style.result}>Kết quả</span>
                        <span className={style.number}>24 trên 25</span>
                        <span className={style.percent}>96%</span>
                        <span className={style.time_title}>Thời gian</span>
                        <span className={style.time}>15:24</span>
                        <div className={style.button_container}>
                            <button className={style.button_black}>Xem lại câu trả lời</button>
                            <button className={style.button_blue}>Thử lại</button>
                            <button className={style.button_black}>Trở về bài quiz</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultDetail