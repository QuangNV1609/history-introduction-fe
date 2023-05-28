import style from "./exam.module.scss"
import Answer from "../Answer"
import { useEffect, useState } from "react"

const Exam = () => {
    const [time, setTime] = useState(0)
    const [timeString, setTimeString] = useState("00:00")
    const [indexSelect, setSelected] = useState(-1)

    const listAnswer = ["Đáp án 1", "Đáp án 2", "Đáp án 3", "Đáp án 4"]

    const onAnswerClick = (index) => {
        setSelected(index)
    }
    const timeCounter = () => {
        setTime(time => time + 1)
    }

    useEffect(() => {
        const id = setInterval(timeCounter, 1000)

        return (() => {
            clearInterval(id)
        })
    }, [])


    useEffect(() => {
        const minute = Math.floor(time / 60)
        const second = time - minute * 60
        const secondStr = second < 10 ? `0${second}` : `${second}`
        const minuteStr = minute < 10 ? `0${minute}` : `${minute}`
        setTimeString(`${minuteStr}:${secondStr}`)
    }, [time])

    return (
        <div className={style.question}>
            <span className={style.title}>Thời kỳ tiền sử</span>
            <span className={style.progress}>Câu hỏi 1 của 25</span>
            <span className={style.question_title}>Dấu aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span>
            {
                listAnswer.map((item, index) => (
                    <Answer text={item} isSelect={indexSelect === index} onItemClick={onAnswerClick} index={index}/>
                ))
            }
            <div className={style.footer}>
                <button>Tiếp &gt;</button>
                <span>{timeString}</span>
            </div>
        </div>
    )
}

export default Exam
