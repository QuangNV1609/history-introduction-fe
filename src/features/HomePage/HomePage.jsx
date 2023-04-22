import React from "react";
import styles from "./HomePage.module.scss";
import "../../assets/scss/base.scss";
import ArticlItem from "./ArticleItem/ArticleItem";
import sample from '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg'

const HomePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.history_day}>
                <div className={styles.history_day_info}>
                    <div>
                        <span className={styles.tag}>Nổi bật</span>
                        <p className={styles.history_day_title}>Tiêu đề bài viết Ngày này trong Lịch sử</p>
                        <p className={styles.history_day_update}>Mới cập nhật: <span>25 tháng Tư, 2023</span></p>
                    </div>
                </div>
                <div className={styles.history_day_img}>
                    <img src="https://cropper.watch.aetnd.com/cdn.watch.aetnd.com/sites/2/2023/03/the-secret-of-skinwalker-ranch-s4-2048x1152-priority-feature-16x9-1.jpg?w=1280" alt="History Day Image" />
                </div>
            </div>
            <div className={`${styles.article_container} ${styles.new_article}`}>
                <p>Bài Viết Mới Nhất</p>
                <div className={`${styles.article_grid} `}>
                    <ArticlItem image={sample} title="Tiêu đề bài viết"></ArticlItem>
                    <ArticlItem image={sample} title="Tiêu đề bài viết"></ArticlItem>
                    <ArticlItem image={sample} title="Tiêu đề bài viết"></ArticlItem>
                    <ArticlItem image={sample} title="Tiêu đề bài viết"></ArticlItem>
                    <ArticlItem image={sample} title="Tiêu đề bài viết"></ArticlItem>
                    <ArticlItem image={sample} title="Tiêu đề bài viết"></ArticlItem>
                </div>
            </div>
            <div className={`${styles.article_container} ${styles.view_article}`}>
                <p>Xem Nhiều Nhất</p>
                <div className={`${styles.article_grid} `}>
                    <ArticlItem image={sample} title="Tiêu đề bài viết"></ArticlItem>
                    <ArticlItem image={sample} title="Tiêu đề bài viết"></ArticlItem>
                    <ArticlItem image={sample} title="Tiêu đề bài viết"></ArticlItem>
                    <ArticlItem image={sample} title="Tiêu đề bài viết"></ArticlItem>
                    <ArticlItem image={sample} title="Tiêu đề bài viết"></ArticlItem>
                    <ArticlItem image={sample} title="Tiêu đề bài viết"></ArticlItem>
                    <ArticlItem image={sample} title="Tiêu đề bài viết"></ArticlItem>
                    <ArticlItem image={sample} title="Tiêu đề bài viết"></ArticlItem>
                    <ArticlItem image={sample} title="Tiêu đề bài viết"></ArticlItem>
                    <ArticlItem image={sample} title="Tiêu đề bài viết"></ArticlItem>
                    <ArticlItem image={sample} title="Tiêu đề bài viết"></ArticlItem>
                    <ArticlItem image={sample} title="Tiêu đề bài viết"></ArticlItem>
                    <ArticlItem image={sample} title="Tiêu đề bài viết"></ArticlItem>
                    <ArticlItem image={sample} title="Tiêu đề bài viết"></ArticlItem>
                    <ArticlItem image={sample} title="Tiêu đề bài viết"></ArticlItem>
                    <ArticlItem image={sample} title="Tiêu đề bài viết"></ArticlItem>
                    <ArticlItem image={sample} title="Tiêu đề bài viết"></ArticlItem>
                    <ArticlItem image={sample} title="Tiêu đề bài viết"></ArticlItem>
                </div>
            </div>
        </div>
    )

}

export default HomePage;