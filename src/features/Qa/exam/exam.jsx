import style from "./exam.module.scss"
import Answer from "../Answer"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router"
import qaApi from "../../../api/qa"

const Exam = () => {
    const navigate = useNavigate()
    const [time, setTime] = useState(0)
    const [currentIndexQuest, setCurrentIndexQuest] = useState(-1)
    const [listSelect, setListSelect] = useState([])
    const [listQuestion, setListQuestion] = useState([])
    const location = useLocation()
    const [timeString, setTimeString] = useState("00:00")
    const [timeStart, setTimeStart] = useState(new Date())
    const eventTypeOptions = ['Thời kỳ tiền sử', 'Thời kỳ cổ đại', 'Thời kỳ Bắc Thuộc', 'Thời kỳ Bắc Thuộc lần thứ III',
        'Thời kỳ tự chủ', 'Thời kỳ quân chủ', 'Thời kỳ Bắc Thuộc lần thứ IV', 'Thời kỳ Trung Hưng - Nhà Hậu Lê',
        'Thời kỳ chia cắt', 'Thời kỳ Bắc Triều - Nam Triều', 'Thời kỳ Trịnh - Nguyễn', 'Thời kỳ thống nhất', 'Thời kỳ hiện đại'];    

    const finish = () => {
        const data = {
            numOfQuestion: listQuestion.length,
            historicalPeriod: location.state.period,
            timeExamStart: (new Date(timeStart)).toISOString(),
            timeExamEnd: (new Date()).toISOString()
        }
        let score = 0
        listSelect.forEach((item, index) => {
            if (item > -1 && listQuestion[index].answers[item].answerTrue) {
                score++
            }
        })
        data.score = ((score / listQuestion.length)*10).toFixed(1)
        console.log(score)
        qaApi.saveUserScore(data)
        .then(res => console.log(res))
        navigate("/resultdetail", {
            state: {
                period: location.state.period,
                score: score,
                totalQues: listQuestion.length,
                time: location.state.time - time,
                listQuestion: listQuestion,
                listSelect: listSelect
            }
        })
    }

    const onAnswerClick = (indexQues, indexAns) => {
        const newList = [...listSelect]
        while (indexQues >= newList.length) {
            newList.push(-1)
        }
        newList[indexQues] = indexAns
        setListSelect(newList)
    }
    const timeCounter = () => {
        setTime(time => time - 1)
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

    useEffect(() => {
        setListQuestion(location.state.listQuestion)
        setTime(location.state.time)
        setCurrentIndexQuest(0)
        setTimeStart(Date())
    }, [])

    return (
        <div className={style.container}>
            <div className={style.ques_containt}>
                <div className={style.map_question}>
                    {
                        listQuestion.map((item, index) => (
                            <span className={listSelect[index] > -1 ? style.filled : style.default} key={index} onClick={() => {
                                setCurrentIndexQuest(index)
                            }}>{index + 1}</span>
                        ))
                    }
                </div>
            </div>
            <div className={style.question}>
                <span className={style.title}>{eventTypeOptions[location.state.period]}</span>
                <span className={style.time}>{`Thời gian: ${timeString}`}</span>
                <span className={style.progress}>{`Câu hỏi ${currentIndexQuest + 1} của ${listQuestion.length}`}</span>
                <span className={style.question_title}>{currentIndexQuest > -1 ? listQuestion[currentIndexQuest].content : ""}</span>
                {
                    currentIndexQuest > -1 &&
                    listQuestion[currentIndexQuest].answers.map((item, index) => (
                        <Answer key={index} indexQues={currentIndexQuest} text={item.content} isSelect={listSelect[currentIndexQuest] === index} onItemClick={onAnswerClick} index={index} />
                    ))
                }
                <div className={style.footer}>
                    <button onClick={() => {
                        if (currentIndexQuest > 0) {
                            setCurrentIndexQuest(currentIndexQuest - 1)
                        }
                    }}>&lt; Quay Lại</button>
                    {
                        currentIndexQuest == listQuestion.length - 1
                        &&
                        <button onClick={() => finish()}>Nộp bài</button>
                    }
                    <button onClick={() => {
                        if (currentIndexQuest < listQuestion.length - 1) {
                            setCurrentIndexQuest(currentIndexQuest + 1)
                        }
                    }}>Tiếp &gt;</button>
                </div>
            </div>
        </div>
    )
}

export default Exam
