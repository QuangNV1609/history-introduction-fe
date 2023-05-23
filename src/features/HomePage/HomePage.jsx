import React, { useState } from "react";
import styles from "./HomePage.module.scss";
import "../../assets/scss/base.scss";
import sample from '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg';
import articleApi from '../../api/article';
import { host } from "../../api/axiosClient";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Slider from "../Slider/Slider";
import photo1 from "../../resource/ho-chi-minh-gettyimages-89865152.jpg";
import photo2 from "../../resource/the-secret-of-skinwalker-ranch-s4-2048x1152-priority-feature-16x9-1.jpg";
import photo3 from "../../resource/gettyimages-1382828716.jpg";

const HomePage = ({ input }) => {
    const [results, setResults] = useState([]);

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

    const navigate = useNavigate();
    const posts = [
        {
            eventType: 0,
            title: 'Kỉ niệm lần thứ 103 Ngày sinh Chủ tịch Hồ Chí Minh',
            thumbnail: photo1,
            describe: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        },
        {
            eventType: 0,
            title: 'Kỉ niệm lần thứ 103 Ngày sinh Chủ tịch Hồ Chí Minh',
            thumbnail: photo1,
            describe: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        },
        {
            eventType: 0,
            title: 'Kỉ niệm lần thứ 103 Ngày sinh Chủ tịch Hồ Chí Minh',
            thumbnail: photo1,
            describe: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        },
        {
            eventType: 0,
            title: 'Kỉ niệm lần thứ 103 Ngày sinh Chủ tịch Hồ Chí Minh',
            thumbnail: photo1,
            describe: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        },
        {
            eventType: 0,
            title: 'Kỉ niệm lần thứ 103 Ngày sinh Chủ tịch Hồ Chí Minh',
            thumbnail: photo1,
            describe: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        },
        {
            eventType: 0,
            title: 'Kỉ niệm lần thứ 103 Ngày sinh Chủ tịch Hồ Chí Minh',
            thumbnail: photo1,
            describe: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        }
        // {
        //     eventType: 0,
        //     title: 'Tiêu đề 1',
        //     thumbnail: photo2,
        //     describe: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        // },
        // {
        //     eventType: 0,
        //     title: 'Tiêu đề 2',
        //     thumbnail: photo3,
        //     describe: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        // },
        // {
        //     eventType: 0,
        //     title: 'Tiêu đề 3',
        //     thumbnail: photo1,
        //     describe: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        // },
        // {
        //     eventType: 0,
        //     title: 'Tiêu đề 4',
        //     thumbnail: photo2,
        //     describe: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        // },
        // {
        //     eventType: 0,
        //     title: 'Tiêu đề 5',
        //     thumbnail: photo3,
        //     describe: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        // }
    ]

    const [post, setPost] = useState([]);
    const [topViewPost, setTopViewPost] = useState([]);

    const fetchData = () => {
        console.log("hi");
        articleApi.getPostHome()
            .then(res => {
                setPost(res.data);
            })
        articleApi.getTopView()
            .then(res => {
                setTopViewPost(res.data);
            })
    }

    useEffect(() => {
        fetchData()
        window.scrollTo(0, 0)
    }, [])

    const [numOfElement, setNumOfElement] = useState(12);
    const slice = post.slice(0, numOfElement);
    const slice1 = topViewPost.slice(0, numOfElement);

    const handlePostDetail = (e, id) => {
        navigate('/postDetail', { state: { idPost: id } });
    }

    return (
        <div>
            {(input === undefined || input === '') && (
                <div className={styles.container}>
                    <Slider posts={posts} />

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
                                                {item.quantity === null ? 0 : item.quantity} lượt xem
                                            </span>
                                            <i className="fa-solid fa-circle"></i>
                                            <span className={styles.article_item_date}>
                                                {`${item.lastModifiedDate.substring(8, 10)}` + ` thg ` + `${item.lastModifiedDate.substring(5, 7)}` + `, ` + `${item.lastModifiedDate.substring(0, 4)}` + ` lúc `+ `${item.lastModifiedDate.substring(11, 16)}`}
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
                            {slice1.map((item, index) => {
                                return (
                                    <div className={styles.article_items} key={index} onClick={e => handlePostDetail(e, item.articleID)}>
                                        <div className={styles.img_container} >
                                            <img
                                                src={host + '/api/file/download/' + item.coverImage}
                                                alt="post thumbnail"
                                                className={styles.article_items_img}
                                                onClick={e => handlePostDetail(e, item.articleID)}
                                            />
                                        </div>
                                        <div className={styles.article_items_title}>{item.articleTitle}</div>
                                        <div className={styles.article_items_bonus}>
                                            <span className={styles.article_item_view}>
                                                {item.quantity} lượt xem
                                            </span>
                                            <i className="fa-solid fa-circle"></i>
                                            <span className={styles.article_item_date}>
                                            {`${item.lastModifiedDate.substring(8, 10)}` + ` thg ` + `${item.lastModifiedDate.substring(5, 7)}` + `, ` + `${item.lastModifiedDate.substring(0, 4)}` + ` lúc `+ `${item.lastModifiedDate.substring(11, 16)}`}
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
                                        <a href="" onClick={(e) => handlePostDetail(e, item.id)}>{item.title.substring(0, 40)}...</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className={styles.result_article_container}>
                        {results.map((item, index) => {
                            return (
                                <a href="" className={styles.result_article_items} key={index} onClick={(e) => handlePostDetail(e, item.id)}>
                                    <div className={styles.img_container}>
                                        <img src={host + '/api/file/download/' + item.thumbnailImage} alt="post thumbnail" className={styles.article_items_img} />
                                    </div>
                                    <div className={styles.article_items_title}>{item.title}</div>
                                </a>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    )

}

export default HomePage;