import { useEffect, useState } from "react";
import style from "./TopScore.module.scss"
import qaApi from "../../../api/qa";
import TopItem from "./topItem/TopItem";

const TopScore = ({ isHistory }) => {
    const [numberQuest, setNumberQuest] = useState(25)
    const [period, setPeriod] = useState(0)
    const [currentItem, setCurrentItem] = useState(null)
    const [listItem, setListItem] = useState([])

    const eventTypeOptions = ['Thời kỳ tiền sử', 'Thời kỳ cổ đại', 'Thời kỳ Bắc Thuộc', 'Thời kỳ Bắc Thuộc lần thứ III',
        'Thời kỳ tự chủ', 'Thời kỳ quân chủ', 'Thời kỳ Bắc Thuộc lần thứ IV', 'Thời kỳ Trung Hưng - Nhà Hậu Lê',
        'Thời kỳ chia cắt', 'Thời kỳ Bắc Triều - Nam Triều', 'Thời kỳ Trịnh - Nguyễn', 'Thời kỳ thống nhất', 'Thời kỳ hiện đại'];

    useEffect(() => {
        document.body.style = 'background: #f1f1f1;';
        return (() => {
            document.body.style = 'background: white;';
        })
    }, [])

    useEffect(() => {
        if (isHistory) {
            qaApi.getHistoryScore()
                .then(res => setListItem(res.data))
        } else {
            qaApi.getTopScore(numberQuest, period)
                .then(res => setListItem(res.data))
        }
    }, [])

    useEffect(() => {
        qaApi.getTopScore(numberQuest, period)
                .then(res => setListItem(res.data))
    }, [numberQuest, period])
    return (
        <div className={style.container}>
            <div className={style.content}>
                <span className={style.title}>{isHistory ? "Lịch sử Q&A:" : "Bảng Xếp Hạng Q&A:"}</span>
                {
                    !isHistory &&
                    <div className={style.filter}>
                        <div>
                            <label htmlFor="status">Số Câu</label>
                            <select id="status" onChange={(e) => {
                                const selectedIndex = e.target.options.selectedIndex
                                setNumberQuest(e.target.options[selectedIndex].value)
                            }}>
                                <option value="25">25</option>
                                <option value="30">30</option>
                            </select>
                        </div>
                        <div className={style.period_container}>
                            <label htmlFor="period">Thời kỳ</label>
                            <select id="period" className={style.period_selector} onChange={(e) => {
                                const selectedIndex = e.target.options.selectedIndex
                                setPeriod(selectedIndex)
                            }}>
                                {
                                    eventTypeOptions.map((item, index) => (
                                        <option key={index} value={index}>{item}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                }
                {
                    listItem.map((item, index) => (
                        <TopItem key={index} showDetail={() => setCurrentItem(item)} item={item} isHistory={isHistory}></TopItem>
                    ))
                }
            </div>
            {
                currentItem &&
                <div className={style.popup}>
                    <div className={style.container}>
                        <span className={style.period}>{eventTypeOptions[currentItem.historicalPeriod]}</span>
                        <div className={style.line}></div>
                        <span>{`Người thực hiện: ${currentItem.username}`}</span>
                        <span>{`Điểm số: ${currentItem.score}`}</span>
                        <span>{`Số lượng câu hỏi: ${currentItem.numOfQuestion}`}</span>
                        <span>{`Ngày thực hiện: ${currentItem.timeExamStart.split("T")[0]}`}</span>
                        <button onClick={() => setCurrentItem(null)}>Đóng</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default TopScore
