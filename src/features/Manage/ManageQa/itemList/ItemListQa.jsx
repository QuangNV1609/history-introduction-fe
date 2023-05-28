import style from "./ItemListQa.module.scss"
import icClock from "../../../../resource/clock.svg"

const ItemListQa = ({ item }) => {
    return (
        <div className={style.container}>
            <div className={style.data}>
                <span className={style.title}>{item.content}</span>
                {/* <div className={style.time_container}>
                    <img src={icClock} alt="" />
                    <span className={style.time}>{item.time}</span>
                </div> */}
            </div>
            <div className={style.menu_container}>
                <span>&#8942;</span>
                <div className={style.menu}>
                    <span>Chi tiết</span>
                    <span>Chỉnh sửa</span>
                    <span>Xóa</span>
                </div>
            </div>
        </div>
    )
}

export default ItemListQa