import React from "react";
import styles from "./ArticlItem.module.scss";

const ArticlItem = ({ image, title }) => {
    return (
        <div className={styles.new_article_grid_item}>
            <img src={image} alt="post" />
            <div className={styles.title_container}>
                <h4>{title}</h4>
            </div>
        </div>
    )
}

export default ArticlItem;