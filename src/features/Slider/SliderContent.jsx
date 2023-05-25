import React from 'react';
import styles from './Slider.module.scss';
import { host } from '../../api/axiosClient';

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
                            <p className={styles.history_day_update}>Mới cập nhật: {slide.lastModifiedDate.substring(8,10)} thg {slide.lastModifiedDate.substring(5,7)}, {slide.lastModifiedDate.substring(0,4)}</p>
                        </div>
                    </div>
                    <div className={styles.history_day_img}>
                        <img src={host + '/api/file/download/' + slide.coverImage} alt="History Day Image" />
                    </div>
                </div>
            ))}
        </section>
    )
}

export default SliderContent;