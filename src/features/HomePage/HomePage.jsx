import React from "react";
import styles from "./HomePage.module.scss";
import "../../assets/scss/base.scss";
import sample from '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg';

const HomePage = () => {
    const posts = [
        {
            eventType: 0,
            title: 'Tiêu đề',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            describe: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        },
        {
            eventType: 0,
            title: 'Tiêu đề 1',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            describe: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        },
        {
            eventType: 0,
            title: 'Tiêu đề 2',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            describe: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        },
        {
            eventType: 0,
            title: 'Tiêu đề 1',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            describe: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        },
        {
            eventType: 0,
            title: 'Tiêu đề 1',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            describe: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        },
        {
            eventType: 0,
            title: 'Tiêu đề 1',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            describe: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        }
    ]
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
                    {posts.map((item, index) => {
                        return (
                            <div className={styles.article_items} key={index}>
                                <img src={sample} alt="post thumbnail" className={styles.article_items_img} />
                                <div className={styles.article_items_title}>{item.title}</div>
                                <div className={styles.article_items_bonus}>
                                    <span className={styles.article_item_view}>
                                        33.123 lượt xem
                                    </span>
                                    <i className="fa-solid fa-circle"></i>
                                    <span className={styles.article_item_date}>
                                        2 giờ trước
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={`${styles.article_container} ${styles.view_article}`}>
                <p>Xem Nhiều Nhất</p>
                <div className={`${styles.article_grid} `}>
                    {posts.map((item, index) => {
                        return (
                            <div className={styles.article_items} key={index}>
                                <img src={sample} alt="post thumbnail" className={styles.article_items_img} />
                                <div className={styles.article_items_title}>{item.title}</div>
                                <div className={styles.article_items_bonus}>
                                    <span className={styles.article_item_view}>
                                        33.123 lượt xem
                                    </span>
                                    <i className="fa-solid fa-circle"></i>
                                    <span className={styles.article_item_date}>
                                        2 giờ trước
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )

}

export default HomePage;