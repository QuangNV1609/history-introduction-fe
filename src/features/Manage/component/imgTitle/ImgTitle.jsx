import style from "./imgTitle.module.scss"

const ImgTitle = ({ src, alt, title }) => {
    return (
        <div className={style.container}>
            <div className={style.title}>{title}</div>
            <img src={src} alt={alt}/>
        </div>
    )
}

export default ImgTitle
