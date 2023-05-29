import style from "./QuestionResult.module.scss"
import AnswerResult from "./AnswerResult"

const QuestionResult = ({ question, index, userAnswer }) => {
    return (
        <div className={style.container}>
            <div className={style.line}></div>
            <span className={style.title}>{`Câu hỏi số ${index + 1}: `}</span>
            <span className={style.question}>{question.question}</span>
            {
                question.answers.map((item, index) => (
                    <AnswerResult
                        isCorrect={item.answerTrue}
                        isSelect={index === userAnswer}
                        answer={item.content} />
                ))
            }
        </div>
    )
}

export default QuestionResult
