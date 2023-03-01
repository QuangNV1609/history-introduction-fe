import "./HomeItem.scss"

const HomeItem = ({image, title}) => {
    return (
        <div className="homeItem">
            <img src={image} alt="post"/>
            <span>{title}</span>
        </div>
    )
}

export default HomeItem