import React, { useEffect, useState } from "react";
import styles from './Slider.module.scss';
import SliderContent from './SliderContent';
import Arrows from './Arrows';
import Dots from './Dots';

function Slider({posts}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const len = posts.length - 1;
    console.log(posts);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div className={styles.slider_container}>
            <SliderContent activeIndex={activeIndex} posts={posts} />
            <Arrows
                prevSlide={() =>
                    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
                }
                nextSlide={() =>
                    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
                }
            />
            <Dots 
                activeIndex={activeIndex} 
                posts={posts} 
                onclick={activeIndex => setActiveIndex(activeIndex)}/>
        </div>
    )
}

export default Slider;