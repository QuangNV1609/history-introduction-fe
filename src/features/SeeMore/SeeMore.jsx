import styles from './SeeMore.module.scss';
import { useEffect, useState } from 'react';
import Pagination from '../Pagination/Pagination';
import articleApi from '../../api/article';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Parser from 'html-react-parser';
import { host } from '../../api/axiosClient';

const SeeMore = () => {
    const location = useLocation();
    const [posts, setPosts] = useState([]);

    console.log(location.state.idPeriod)

    const eventTypeOptions = ['Thời kỳ tiền sử', 'Thời kỳ cổ đại', 'Thời kỳ Bắc Thuộc', 'Thời kỳ Bắc Thuộc lần thứ III',
        'Thời kỳ tự chủ', 'Thời kỳ quân chủ', 'Thời kỳ Bắc Thuộc lần thứ IV', 'Thời kỳ Trung Hưng - Nhà Hậu Lê',
        'Thời kỳ chia cắt', 'Thời kỳ Bắc Triều - Nam Triều', 'Thời kỳ Trịnh - Nguyễn', 'Thời kỳ thống nhất', 'Thời kỳ hiện đại'];

    const fetchData = () => {
        articleApi.getPeriodPost(location.state.idPeriod)
            .then(res => {
                setPosts(res.data);
            })
    }

    useEffect(() => {
        fetchData()
        window.scrollTo(0, 0)
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(12);


    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPostData = posts.slice(firstPostIndex, lastPostIndex);

    const navigate = useNavigate();

    const handlePostDetail = (e, id) => {
        navigate('/postDetail', { state: { idPost: id } });
    }

    return (
        <div className={styles.main}>
            <div className={styles.heading}>
                <div className={styles.heading_link}>
                    <a href="/home">Trang chủ</a><span> / </span>
                    <a href="/period">Thời kỳ</a><span> / </span>
                    <a href="#" className={styles.last_link}>{eventTypeOptions[location.state.idPeriod]}</a>
                </div>
                <div className={styles.heading_title}>
                    <span>{eventTypeOptions[location.state.idPeriod]}</span>
                </div>
            </div>
            <div className={styles.gradient_line}></div>
            <div className={styles.content}>
                <div className={styles.content_list}>
                    {currentPostData.map((item, index) => {
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
                                        <a href='' className={styles.post_items_readmore}>
                                            Đọc thêm
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.line}></div>

                <Pagination
                    totalPosts={posts.length}
                    postsPerPage={postsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                    lastPage={Math.ceil(posts.length / postsPerPage)}
                />
            </div>
        </div>
    )
}

export default SeeMore