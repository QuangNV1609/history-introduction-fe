import style from "./Answer.module.scss"

const Answer = ({ text, isSelect, indexQues, index, onItemClick }) => {

    return (
        <div className={`${style.container} ${isSelect ? style.chosen : ""}`} onClick={() => onItemClick(indexQues, index)}>
            <div className={isSelect ? style.select : style.non_select}><div className={style.inside} /></div>
            <span>{text}</span>
        </div>
    )
}

export default Answer
