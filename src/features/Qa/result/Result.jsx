import style from "./Result.module.scss"
import TabBar from "../TabBar"
import QuestionResult from "./QuestionResult"

const Result = () => {
    const listQuestion = [
        {
            question: "Dấu tích người tối cổ đã được tìm thấy đầu tiên ở tỉnh nào của Việt Nam?",
            answers: ["Nghệ An", "Thanh Hóa", "Cao Bằng", "Lạng Sơn"],
            correctAnswers: 3,
            selectAnswers: 3 
        },
        {
            question: "Chất liệu để chế tác công cụ lãnh đạo phổ biến của cư dân đông sơn là:",
            answers: ["Đồng đỏ và Đồng thau", "Đồng Thau, bắt đầu có sắt", "Đồng đỏ và sắt"],
            correctAnswers: 1,
            selectAnswers: 0 
        }
    ]

    return (
        <div>
            <div className={style.container}>
                <div className={style.empty}></div>
                <div className={style.content}>
                    <TabBar />
                    <div className={style.result}>
                        <span className={style.title}>Kết quả quiz thời kỳ tiền sử</span>
                        <span className={style.point}>Điểm: 24/25</span>
                        <span className={style.correct_percent}>96% lựa chọn đúng</span>
                        {
                            listQuestion.map((item, index) => (
                                <QuestionResult question={item} index={index}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result
