import { useEffect } from "react"
import style from "./ListQa.module.scss"
import ItemListQa from "./itemList/ItemListQa"
import { useNavigate } from "react-router-dom";
import qaApi from "../../../api/qa";
import { useState } from "react";

const ListQa = () => {
    const navigate = useNavigate()
    const [qas, setListQa] = useState([])
    const [periodChoose, setShowPeriod] = useState(false)
    const [itemDetail, setItemDetail] = useState(null)
    const [period, setPeriod] = useState(-1)
    const [status, setStatus] = useState(-1)
    const [periodFilter, setPeriodFilter] = useState(-1)
    const navigateToEdit = (item) => {
        console.log("navigate")
        navigate("/manageQa", {
            state: {
                itemRequest: item,
                isUpdate: true
            }
        })
    }
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
        qaApi.searchQa()
            .then(res => setListQa(res.data))
    }, [])

    useEffect(() => {
        if (periodChoose) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [periodChoose])

    useEffect(() => {
        qaApi.searchQa(status, periodFilter)
            .then(res => setListQa(res.data))
    }, [status, periodFilter])

    return (
        <div className={style.out}>
            <div className={style.container}>
                <div className={style.empty}></div>
                <span className={style.quizzes}>Quizzes</span>
                <div>
                    <span className={style.create_msg}>Tạo và chỉnh sửa bộ câu hỏi trên trang web.</span>
                    <span className={style.find_more}> Tìm hiểu thêm</span>
                </div>
                <div className={style.content}>
                    <span>Bộ Quizzes</span>
                    <button className={style.add} onClick={() => {
                        setShowPeriod(true)
                    }
                    }>Thêm bộ câu hỏi</button>
                </div>
                <div>
                    <div className={style.filter}>
                        <div>
                            <label htmlFor="status">Trạng thái</label>
                            <select id="status" onChange={(e) => {
                                const selectedIndex = e.target.options.selectedIndex
                                setStatus(selectedIndex - 1)
                            }}>
                                <option value="0">Tất cả</option>
                                <option value="1">Chờ duyệt</option>
                                <option value="2">Đã duyệt</option>
                            </select>
                        </div>
                        <div className={style.period_container}>
                            <label htmlFor="period">Thời kỳ</label>
                            <select id="period" className={style.period_selector} onChange={(e) => {
                                const selectedIndex = e.target.options.selectedIndex
                                setPeriodFilter(selectedIndex - 1)
                            }}>
                                <option value="-1">Tất cả</option>
                                {
                                    eventTypeOptions.map((item, index) => (
                                        <option key={index} value={index}>{item}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                </div>
                {
                    qas.map((item, index) => (
                        <ItemListQa
                            item={item} key={index}
                            showDetailPopUp={() => setItemDetail(item)}
                            navigateToEdit={() => navigateToEdit(item)}
                        />
                    ))
                }
            </div>
            {
                periodChoose &&
                <div className={style.popup}>
                    <div className={style.container}>
                        <span className={style.qa_title}>Bạn muốn tạo câu hỏi cho thời kỳ nào ?</span>
                        <select onChange={(e) => {
                            const selectedIndex = e.target.options.selectedIndex
                            setPeriod(selectedIndex - 1)
                        }}>
                            <option value="-1">Chọn thời kỳ</option>
                            {
                                eventTypeOptions.map((item, index) => (
                                    <option key={index} value={index}>{item}</option>
                                ))
                            }
                        </select>
                        <div className={style.button_container}>
                            <button onClick={(e) => {
                                if (period > -1) {
                                    navigate("/manageQa", {
                                        state: {
                                            period: period,
                                            isUpdate: false
                                        }
                                    })
                                } else {
                                    alert("Bạn chưa chọn thời kỳ")
                                }
                            }}>Đồng ý</button>
                            <button onClick={() => {
                                setShowPeriod(false)
                            }}>Hủy</button>
                        </div>
                    </div>
                </div>
            }
            {
                itemDetail &&
                <div className={style.popup}>
                    <div className={style.container}>
                        <span className={style.title}>Chi tiết câu hỏi</span>
                        <div className={style.line}></div>
                        <span className={style.ques}>{`Câu hỏi: ${itemDetail.content}`}</span>
                        {
                            itemDetail.answers.map((item, index) => (
                                <span key={index} className={item.answerTrue ? style.ans_true : style.default}>{item.content}</span>
                            ))
                        }
                        <div className={style.button_container}>
                            {
                                !itemDetail.status && 
                                <button onClick={() => navigateToEdit(itemDetail)}>Chỉnh sửa</button>
                            }
                            <button onClick={() => setItemDetail(null)}>Đóng</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default ListQa
