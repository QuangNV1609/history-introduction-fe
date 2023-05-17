import React, { useState } from "react";
import styles from "./HomePage.module.scss";
import "../../assets/scss/base.scss";
import sample from '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg';
import articleApi from '../../api/article';
import { host } from "../../api/axiosClient";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const HomePage = ({ input }) => {
    const [results, setResults] = useState([]);

    const navigate = useNavigate();
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

    const [post, setPost] = useState([]);

    const fetchData = () => {
        articleApi.getActivePost()
            .then(res => {
                setPost(res.data);
            })
    }

    const fetchSearchData = (value) => {
        fetch(`${host}` + `/api/article/search-article`)
            .then((response) => response.json())
            .then((json) => {
                const results = json.filter((post) => {
                    return value && post && post.title && post.title.toLowerCase().includes(value);
                });
                setResults(results);
            });
    }

    useEffect(() => {
        fetchSearchData(input);
    }, [input])

    useEffect(() => {
        fetchData()
        window.scrollTo(0, 0)
    }, [])

    const [numOfElement, setNumOfElement] = useState(12);
    const slice = post.slice(0, numOfElement);

    const handlePostDetail = (e, id) => {
        navigate('/postDetail', { state: { idPost: id } });
    }

    return (
        <div>
            {(input === undefined || input === '') && (
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
                        <p>
                            <i className="fa-solid fa-newspaper"></i>
                            Bài Viết Mới Nhất</p>
                        <div className={`${styles.article_grid} `}>
                            {slice.map((item, index) => {
                                return (
                                    <div className={styles.article_items} key={index}>
                                        <div className={styles.img_container} >
                                            <img
                                                src={host + '/api/file/download/' + item.thumbnailImage}
                                                alt="post thumbnail"
                                                className={styles.article_items_img}
                                                onClick={e => handlePostDetail(e, item.id)}
                                            />
                                        </div>
                                        <div className={styles.article_items_title} onClick={e => handlePostDetail(e, item.id)}>{item.title}</div>
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
                        <p><i className="fa-solid fa-fire"></i>Xem Nhiều Nhất</p>
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
            )}

            {(input !== undefined && input !== '') && (
                <div className={styles.search_result_container}>
                    <div className={styles.search_suggestion_container}>
                        <span className={styles.suggestion_label}>
                            Khám phá những bài viết liên quan đến:
                        </span>
                        <ul className={styles.suggestion_list}>
                            {results.map((item, index) => {
                                return (
                                    <li className={styles.suggestion_item} key={index}>
                                        <a href="">{item.title.substring(0, 40)}...</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className={styles.result_article_container}>
                        {results.map((item, index) => {
                            return (
                                <div className={styles.result_article_items} key={index}>
                                    <div className={styles.img_container}>
                                        <img src={host + '/api/file/download/' + item.thumbnailImage} alt="post thumbnail" className={styles.article_items_img} />
                                    </div>
                                    <div className={styles.article_items_title}>{item.title}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    )

}

export default HomePage;