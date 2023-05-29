import style from "./TopItem.module.scss"
import icView from "../../../../resource/ic_view.svg"
import Tippy from "@tippyjs/react"

const TopItem = ({ item, showDetail, isHistory }) => {
    const eventTypeOptions = ['Thời kỳ tiền sử', 'Thời kỳ cổ đại', 'Thời kỳ Bắc Thuộc', 'Thời kỳ Bắc Thuộc lần thứ III',
        'Thời kỳ tự chủ', 'Thời kỳ quân chủ', 'Thời kỳ Bắc Thuộc lần thứ IV', 'Thời kỳ Trung Hưng - Nhà Hậu Lê',
        'Thời kỳ chia cắt', 'Thời kỳ Bắc Triều - Nam Triều', 'Thời kỳ Trịnh - Nguyễn', 'Thời kỳ thống nhất', 'Thời kỳ hiện đại'];
    return (
        <div className={style.container}>
            <span>{isHistory ? eventTypeOptions[item.historicalPeriod] : item.username}</span>
            <span>{item.score}</span>
            <Tippy content="Xem chi tiết">
                <img src={icView} alt="" onClick={() => showDetail()}/>
            </Tippy>
        </div>
    )
}

export default TopItem
