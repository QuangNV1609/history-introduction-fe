import style from "./QuestionResult.module.scss"
import AnswerResult from "./AnswerResult"

const QuestionResult = ({ question, index }) => {
    return (
        <div className={style.container}>
            <div className={style.line}></div>
            <span className={style.title}>{`Câu hỏi số ${index + 1}: `}</span>
            <span className={style.question}>{question.question}</span>
            {
                question.answers.map((item, index) => (
                    <AnswerResult
                        isCorrect={index === question.correctAnswers}
                        isSelect={index === question.selectAnswers}
                        answer={item} />
                ))
            }
        </div>
    )
}

export default QuestionResult
