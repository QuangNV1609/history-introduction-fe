import style from "./Answer.module.scss"

const Answer = ({ text, isSelect, index, onItemClick }) => {

    return (
        <div className={`${style.container} ${isSelect ? style.chosen : ""}`} onClick={() => onItemClick(index)}>
            <div className={isSelect ? style.select : style.non_select}><div className={style.inside} /></div>
            <span>{text}</span>
        </div>
    )
}

export default Answer
