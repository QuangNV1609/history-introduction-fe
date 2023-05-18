import React from 'react';
import styles from './Slider.module.scss';

function SliderContent({ activeIndex, posts }) {

    return (
        <section>
            {posts.map((slide, index) => (
                <div
                    key={index}
                    className={index === activeIndex ? `${styles.slides} ${styles.active}` : `${styles.inactive}`}
                >
                    <div className={styles.history_day_info}>
                        <div>
                            <span className={styles.tag}>Nổi bật</span>
                            <p className={styles.history_day_title}>{slide.title}</p>
                            <p className={styles.history_day_update}>Mới cập nhật: <span>{slide.date}</span></p>
                        </div>
                    </div>
                    <div className={styles.history_day_img}>
                        <img src={slide.thumbnail} alt="History Day Image" />
                    </div>
                </div>
            ))}
        </section>
    )
}

export default SliderContent;