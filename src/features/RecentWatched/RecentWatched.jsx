import styles from './RecentWatched.module.scss';
import { useEffect, useState } from 'react';
import { host } from '../../api/axiosClient';
import { useNavigate } from "react-router";
import articleApi from '../../api/article';

const RecentWatched = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    const fetchData = () => {
        articleApi.getRecentWatched()
            .then(res => {
                setPosts(res.data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handlePostDetail = (e, id) => {
        navigate('/postDetail', { state: { idPost: id } });
    }

    return (
        <div className={`${styles.article_container} ${styles.new_article}`}>
            <p>
                <i className="fa-solid fa-clock"></i>
                Đã xem gần đây
            </p>
            <div className={`${styles.article_grid} `}>
                {posts.map((item, index) => {
                    return (
                        <div className={styles.article_items} key={index} onClick={e => handlePostDetail(e, item.articleID)}>
                            <div className={styles.img_container} >
                                <img
                                    src={host + '/api/file/download/' + item.coverImage}
                                    alt="post thumbnail"
                                    className={styles.article_items_img}
                                />
                            </div>
                            <div className={styles.article_items_title}>{item.articleTitle}</div>
                            <div className={styles.article_items_bonus}>
                                <i className="fa-regular fa-clock"></i>
                                <span className={styles.article_item_date}>
                                    {`Ngày ` + `${item.lastDateView.substring(8, 10)}` + ` tháng ` + `${item.lastDateView.substring(6, 7)}` + ` năm ` + `${item.lastDateView.substring(0, 4)}` + ` lúc ` + `${item.lastDateView.substring(11, 16)}`}
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RecentWatched;