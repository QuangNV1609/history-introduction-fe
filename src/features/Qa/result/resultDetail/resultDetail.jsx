import { useLocation, useNavigate } from "react-router";
import TabBar from "../../TabBar"
import style from "./resultDetail.module.scss"
import { useEffect, useState } from "react";
import qaApi from "../../../../api/qa";

const ResultDetail = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [time, setTime] = useState("--:--")
    const eventTypeOptions = ['Thời kỳ tiền sử', 'Thời kỳ cổ đại', 'Thời kỳ Bắc Thuộc', 'Thời kỳ Bắc Thuộc lần thứ III',
        'Thời kỳ tự chủ', 'Thời kỳ quân chủ', 'Thời kỳ Bắc Thuộc lần thứ IV', 'Thời kỳ Trung Hưng - Nhà Hậu Lê',
        'Thời kỳ chia cắt', 'Thời kỳ Bắc Triều - Nam Triều', 'Thời kỳ Trịnh - Nguyễn', 'Thời kỳ thống nhất', 'Thời kỳ hiện đại'];

    useEffect(() => {
        const time = location.state.time
        const minute = Math.floor(time / 60)
        const second = time - minute * 60
        const secondStr = second < 10 ? `0${second}` : `${second}`
        const minuteStr = minute < 10 ? `0${minute}` : `${minute}`
        setTime(`${minuteStr}:${secondStr}`)
    }, [])
    return (
        <div className={style.container}>
            <div className={style.empty}></div>
            <div className={style.content}>
                <div className={style.main_data}>
                    <span className={style.theme}>{eventTypeOptions[location.state.period]}</span>
                    <div className={style.data}>
                        <span className={style.result}>Kết quả</span>
                        <span className={style.number}>{`${location.state.score} trên ${location.state.totalQues}`}</span>
                        <span className={style.percent}>
                            {`${((location.state.score / location.state.totalQues) * 100).toFixed(1)}%`}
                        </span>
                        <span className={style.time_title}>Thời gian</span>
                        <span className={style.time}>{time}</span>
                        <div className={style.button_container}>
                            <button className={style.button_black} onClick={() => {
                                navigate("/result", {
                                    state: location.state
                                })
                            }}>Xem lại câu trả lời</button>
                            <button className={style.button_black} onClick={ () => {
                                navigate("/qa")
                            }}>Trở về bài quiz</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultDetail