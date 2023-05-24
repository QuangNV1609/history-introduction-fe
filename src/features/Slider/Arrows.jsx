import React from "react";
import styles from './Slider.module.scss';

function Arrows({ prevSlide, nextSlide }) {
    return (
        <div className={styles.arrows}>
            <span className={styles.prev} onClick={prevSlide}>
                &#10094;
            </span>
            <span className={styles.next} onClick={nextSlide}>
                &#10095;
            </span>
        </div>
    )
}

export default Arrows;