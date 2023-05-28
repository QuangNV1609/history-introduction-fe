import style from "./QaCreateItem.module.scss"
import icClose from "../../../../resource/close.svg"
import icAdd from "../../../../resource/add.svg"
import Answer from "./AnswerItem"
import { useEffect } from "react"
import { json } from "react-router-dom"
import { useState } from "react"

const QaCreateItem = ({ 
    item, 
    index,
    listArticle, 
    isShowRemoveQuest, 
    onAddQuestionClick,
    onQuestionChange, 
    onAnswerChange, 
    onAddAnswer, 
    onRemoveQuest,
    onRemoveAns,
    onAnswerChosen,
    onArticleChange 
}) => {
    const [idArticle, setIdArticle] = useState(-1)
    let listAnswer = [...item.answers]
    const count = 2 - listAnswer.length
    if (count > 0) {
        for (let i = 0; i < count; i++) {
            listAnswer.push("")
        }
    }

    const answerChange = (indexAns, answer) => {
        onAnswerChange(index, indexAns, answer)
    }

    const removeAns = (indexAns) => {
        onRemoveAns(index, indexAns)
    }

    return (
        <div className={style.container}>
            <img 
            src={icClose} 
            className={`${style.close} ${isShowRemoveQuest ? style.show : style.hidden}`}
            onClick={() => onRemoveQuest(index)}
            ></img>
            <input
                type="text"
                className={style.question}
                placeholder="Nhập câu hỏi"
                onChange={(e) => onQuestionChange(index, e.target.value)}
                value={item.question} />
                <select type="text" className={`${style.article} ${idArticle == -1 ? style.placeholder : style.a}`}
                onChange={(e) => {
                    const selectedIndex = e.target.options.selectedIndex
                    console.log(e.target.options[selectedIndex].value)
                    onArticleChange(index, e.target.options[selectedIndex].value)
                }}
                >
                    <option value="" defaultValue className={style.option_disable}>Bài viết liên quan</option>
                    {
                        listArticle.map((item, index) => (
                            <option key={index} value={item.id}>{item.title}</option>
                        ))
                    }
                </select>
            {
                listAnswer.map((answer, indexItem) => (
                    <Answer
                        key={indexItem}
                        text={answer.content}
                        onAnswerChange={answerChange}
                        onRemoveAns={removeAns}
                        onAnswerChosen={(indexChosen) => onAnswerChosen(index, indexChosen)}
                        index={indexItem} 
                        indexItem={index}
                        isChosen={answer.answerTrue === 1}
                        isShowRemove={item.answers.length > 2}/>
                ))
            }
            <span className={style.addQuestion} onClick={() => onAddAnswer(index, listAnswer.length)}>+ Thêm đáp án</span>
            <div className={style.add_container} onClick={() => onAddQuestionClick(index)}>
                <img src={icAdd} alt="" />
                <span>Thêm câu hỏi</span>
            </div>
        </div>
    )
}

export default QaCreateItem
