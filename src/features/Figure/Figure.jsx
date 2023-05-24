import styles from './Figure.module.scss';
import { useState } from 'react';
import image from '../../resource/Hai-ba-trung-ha2.jpg';
import { useEffect } from 'react';
import articleApi from '../../api/article';
import { useNavigate } from 'react-router-dom';
import Parser from 'html-react-parser';
import { host } from '../../api/axiosClient';

const Figure = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const fetchData = () => {
        articleApi.getFigurePost()
            .then(res => {
                setPosts(res.data);
            })
    }

    useEffect(() => {
        fetchData()
        window.scrollTo(0, 0)
    }, [])

    const [numOfElement, setNumOfElement] = useState(3);
    const slice = posts.slice(0, numOfElement);

    const loadMore = () => {
        setNumOfElement(numOfElement + numOfElement);
    }

    const handlePostDetail = (e, id) => {
        navigate('/postDetail', { state: { idPost: id } });
    }

    return (
        <div className={styles.main}>
            <div className={styles.heading}>
                <div className={styles.heading_link}>
                    <a href="/home">Trang chủ</a><span> / </span>
                    <a href="#" className={styles.last_link}>Nhân vật</a>
                </div>
                <div className={styles.heading_title}>
                    <span>Các Nhân Vật Lịch Sử</span>
                </div>
            </div>
            <div className={styles.gradient_line}></div>
            <div className={styles.content}>
                <div className={styles.content_container}>
                    <div className={styles.character_title}>Các anh hùng dân tộc</div>
                    <div className={styles.content_list}>
                        {slice.map((item, index) => {
                            return (
                                <div className={styles.post_items} key={index} onClick={e => handlePostDetail(e, item.id)}>
                                    <div className={styles.img_container}>
                                        <img src={host + '/api/file/download/' + item.thumbnailImage} alt="post thumbnail" className={styles.post_items_img} />
                                    </div>
                                    <div className={styles.post_items_content}>
                                        <div className={styles.post_items_title}>{item.title}</div>
                                        <div className={styles.post_items_desc}>
                                            {Parser(item.content.substring(0, 230) + '...')}
                                        </div>
                                        <div>
                                            <a className={styles.post_items_readmore}>
                                                Đọc thêm
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <span className={styles.see_more_btn} onClick={loadMore}>XEM THÊM</span>
                </div>
            </div>
        </div>
    )
}

export default Figure
