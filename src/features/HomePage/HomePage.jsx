import React, { useState } from "react";
import styles from "./HomePage.module.scss";
import "../../assets/scss/base.scss";
import articleApi from '../../api/article';
import { host } from "../../api/axiosClient";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Slider from "../Slider/Slider";

const HomePage = ({ input }) => {
    var curr = new Date();
    curr.setDate(curr.getDate());
    var date = curr.toISOString().substring(0, 10);
    const [results, setResults] = useState([]);
    const [historyDayPost, setHistoryDayPost] = useState([]);

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
        articleApi.getHistoryDay(date)
            .then((res) => {
                setHistoryDayPost(res.data);
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
                    {historyDayPost.length > 0 && (<Slider posts={historyDayPost} />)}

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
                                                {`${item.lastModifiedDate.substring(8, 10)}` + ` thg ` + `${item.lastModifiedDate.substring(5, 7)}` + `, ` + `${item.lastModifiedDate.substring(0, 4)}` + ` lúc ` + `${item.lastModifiedDate.substring(11, 16)}`}
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
                                                {`${item.lastModifiedDate.substring(8, 10)}` + ` thg ` + `${item.lastModifiedDate.substring(5, 7)}` + `, ` + `${item.lastModifiedDate.substring(0, 4)}` + ` lúc ` + `${item.lastModifiedDate.substring(11, 16)}`}
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