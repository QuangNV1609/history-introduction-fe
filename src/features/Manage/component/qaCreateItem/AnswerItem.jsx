import style from "./AnswerItem.module.scss"
import icClose from "../../../../resource/close.svg"

const Answer = ({ text, index, indexItem, isShowRemove, isChosen, onAnswerChange, onRemoveAns, onAnswerChosen }) => {
    return (
        <div className={style.answer}>

            <input type="radio" name={`answer${indexItem}`} onChange={() => onAnswerChosen(index)} checked={isChosen || false}/>

            <input
                type="text"
                className={style.in_answer}
                placeholder="Nhập đáp án"
                value={text || ''} onChange={(e) => onAnswerChange(index, e.target.value)} />
            <img
                src={icClose}
                alt=""
                className={isShowRemove ? style.show : style.hidden}
                onClick={() => onRemoveAns(index)} />
        </div>
    )
}

export default Answer
