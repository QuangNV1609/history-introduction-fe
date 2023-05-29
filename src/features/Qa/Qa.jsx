import React, { useState } from "react"
import style from "./Qa.module.scss"
import TabBar from "./TabBar"
import Exam from "./exam/exam"
import { useNavigate } from "react-router"
import qaApi from "../../api/qa"

const Qa = () => {
    const navigate = useNavigate()
    const [numberQuestion, setNumberQuestion] = useState(-1)
    const [isShowPopup, setShowPopup] = useState(false)
    const [itemSelect, setItemSelect] = useState(-1)
    const time = [[25, 1500], [30, 1800]]
    const eventTypeOptions = ['Thời kỳ tiền sử', 'Thời kỳ cổ đại', 'Thời kỳ Bắc Thuộc', 'Thời kỳ Bắc Thuộc lần thứ III',
        'Thời kỳ tự chủ', 'Thời kỳ quân chủ', 'Thời kỳ Bắc Thuộc lần thứ IV', 'Thời kỳ Trung Hưng - Nhà Hậu Lê',
        'Thời kỳ chia cắt', 'Thời kỳ Bắc Triều - Nam Triều', 'Thời kỳ Trịnh - Nguyễn', 'Thời kỳ thống nhất', 'Thời kỳ hiện đại'];

    return (
        <div className={style.container}>
            <div className={style.empty}></div>
            <div className={style.content}>
                <div className={style.head}>
                    <span className={style.title}>Lựa chọn bài thi</span>
                    <button onClick={() => {
                        navigate("/topscore")
                    }

                    }>Top Quizz</button>
                </div>
                {
                    eventTypeOptions.map((item, index) => (
                        <span key={index} className={style.item} onClick={() => {
                            setShowPopup(true)
                            setItemSelect(index)
                        }}>{item}</span>
                    ))
                }
            </div>
            {
                isShowPopup &&
                <div className={style.popup}>
                    <div className={style.container}>
                        <div className={style.in_containt}>
                            <span className={style.title}>Lựa chọn số câu hỏi:</span>
                            <input type="radio" id="num_25" name="num_ques" onChange={() => setNumberQuestion(0)} />
                            <label htmlFor="num_25">25</label>
                            <input type="radio" id="num_30" name="num_ques" onChange={() => setNumberQuestion(1)} />
                            <label htmlFor="num_30">30</label>
                        </div>
                        <div className={style.in_containt}>
                            <span className={style.title}>Thời gian:</span>
                            <span className={style.time}>{numberQuestion > -1 ? `${time[numberQuestion][0]} phút` : "--:--"}</span>
                        </div>
                        <div className={style.button_container}>
                            <button onClick={() => {
                                if (numberQuestion <= -1) {
                                    alert("Bạn chưa chọn số câu hỏi")
                                } else {
                                    qaApi.getExam(time[numberQuestion][0], itemSelect)
                                        .then(res => {
                                            console.log(res)
                                            navigate("/exam", {
                                                state: {
                                                    listQuestion: res.data,
                                                    time: time[numberQuestion][1],
                                                    period: itemSelect
                                                }
                                            })
                                        })
                                }
                            }}>Làm bài</button>
                            <button onClick={() => {
                                setNumberQuestion(-1)
                                setItemSelect(-1)
                                setShowPopup(false)
                            }}>Hủy</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Qa
