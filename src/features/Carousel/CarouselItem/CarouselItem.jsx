import React from "react";
import styles from "./CarouselItem.module.scss";
import thumbnail from "../../../resource/alone-s9-2048x1152-promo-16x9-1.jpg"

const CarouselItem = ({ item }) => {
    return (
        <div className={styles.carousel_item}>
            <div className={styles.history_day_info}>
                <div>
                    <span className={styles.tag}>Nổi bật</span>
                    <p className={styles.history_day_title}>{item.title}</p>
                    <p className={styles.history_day_update}>Mới cập nhật: <span>{item.date}</span></p>
                </div>
            </div>
            <div className={styles.history_day_img}>
                <img src={thumbnail} alt="History Day Image" />
            </div>
        </div>
    )
}

export default CarouselItem;