import React from "react";
import styles from './Slider.module.scss';

function Dots({ activeIndex, onclick, posts }) {
    return (
        <div className={styles.all_dots}>
            {posts.map((slide, index) => {
                return (
                    <span
                        key={index}
                        className={activeIndex === index ? `${styles.active_dot} ${styles.dot}` : `${styles.dot}`}
                        onClick={() => onclick(index)}
                    ></span>
                )
            })}
        </div>
    )
}

export default Dots;