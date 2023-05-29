import style from "./Result.module.scss"
import TabBar from "../TabBar"
import QuestionResult from "./QuestionResult"
import { useLocation } from "react-router"
import { useEffect, useState } from "react"

const Result = () => {
    const location = useLocation()
    const [listQuestion, setListQuestion] = useState([])
    const [listSelect, setListSelect] = useState([])

    const eventTypeOptions = ['Thời kỳ tiền sử', 'Thời kỳ cổ đại', 'Thời kỳ Bắc Thuộc', 'Thời kỳ Bắc Thuộc lần thứ III',
        'Thời kỳ tự chủ', 'Thời kỳ quân chủ', 'Thời kỳ Bắc Thuộc lần thứ IV', 'Thời kỳ Trung Hưng - Nhà Hậu Lê',
        'Thời kỳ chia cắt', 'Thời kỳ Bắc Triều - Nam Triều', 'Thời kỳ Trịnh - Nguyễn', 'Thời kỳ thống nhất', 'Thời kỳ hiện đại'];

    return (
        <div>
            <div className={style.container}>
                <div className={style.empty}></div>
                <div className={style.content}>
                    <div className={style.result}>
                        <span className={style.title}>{`Kết quả quiz ${eventTypeOptions[location.state.period]}`}</span>
                        <span className={style.point}>{`Điểm: ${location.state.score}/${location.state.totalQues}`}</span>
                        <span className={style.correct_percent}>
                            {`${((location.state.score / location.state.totalQues)*100).toFixed(1)}% lựa chọn đúng`}
                        </span>
                        {
                            location.state.listQuestion.map((item, index) => (
                                <QuestionResult question={item} index={index} userAnswer={location.state.listSelect[index]} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result
