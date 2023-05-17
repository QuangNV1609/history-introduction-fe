import React, { useState } from "react";
import CarouselItem from "./CarouselItem/CarouselItem";
import styles from './Carousel.module.scss';

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= posts.length) {
            newIndex = posts.length - 1;
        }

        setActiveIndex(newIndex);
    }

    const posts = [
        {
            eventType: 0,
            title: 'Tiêu đề',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            date: 'Ngày 30 tháng 04 năm 2023'
        },
        {
            eventType: 0,
            title: 'Tiêu đề 1',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            date: 'Ngày 30 tháng 04 năm 2023'

        },
        {
            eventType: 0,
            title: 'Tiêu đề 2',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            date: 'Ngày 30 tháng 04 năm 2023'

        }
    ]
    return (
        <div className={styles.carousel}>
            <div
                className={styles.inner}
                style={{ transform: `translate:(${activeIndex * 100}%)` }}
            >
                {posts.map((item) => {
                    return (<CarouselItem item={item} />)
                })}
            </div>

            <span
                className={styles.button_arrow_left}
                onClick={() => {
                    updateIndex(activeIndex - 1);
                }}>
                <i class="fa-solid fa-chevron-left"></i>
            </span>
            <span
                className={styles.button_arrow_right}
                onClick={() => {
                    updateIndex(activeIndex + 1);
                }}>
                <i class="fa-solid fa-chevron-right"></i>
            </span>


            <div className={styles.indicators}>
                {posts.map((item, index) => {
                    return (
                        <span
                            className={(index === activeIndex) ? `${styles.indicator_symbol_active}` : `${styles.indicator_symbol}`}
                            onClick={() => {
                                updateIndex(index);
                            }}
                        ></span>
                    )
                })}
            </div>
        </div>
    )
}

export default Carousel;