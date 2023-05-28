import style from "./AnswerResult.module.scss"
import icCorrect from "../../../resource/correct.svg"
import icInCorrect from "../../../resource/incorrect.svg"

const AnswerResult = ({ isCorrect, isSelect, answer }) => {
    let text = ""
    if (isSelect) {
        text = "Câu trả lời của bạn"
    } else if (isCorrect) {
        text = "Câu trả lời đúng"
    }

    let ic = ""
    let answerType = ""
    if (isSelect && isCorrect) {
        ic = icCorrect
        answerType = style.correct_select
    } else if (isSelect) {
        ic = icInCorrect
        answerType = style.select
    } else if (isCorrect) {
        answerType = style.correct
    }

    return (
        <div className={`${style.container} ${answerType}`}>
            <img src={ic} alt=""/>
            <span className={ic === "" ? style.default : style.answer}>{answer}</span>
            <span className={style.description}>{text}</span>
        </div>
    )
}

export default AnswerResult
