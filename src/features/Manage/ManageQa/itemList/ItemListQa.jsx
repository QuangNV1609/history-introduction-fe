import style from "./ItemListQa.module.scss"
import icView from "../../../../resource/ic_view.svg"
import icEdit from "../../../../resource/ic_edit.svg"
import Tippy from "@tippyjs/react"
import 'tippy.js/dist/tippy.css'

const ItemListQa = ({ item, showDetailPopUp, navigateToEdit }) => {
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
                <div>
                    <Tippy content="Xem chi tiết">
                        <img src={icView} alt="view detail" onClick={() => showDetailPopUp()} />
                    </Tippy>
                    {
                        !item.status &&
                        <Tippy content="Chỉnh sửa">
                            <img src={icEdit} alt="edit" onClick={() => navigateToEdit()} />
                        </Tippy>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemListQa