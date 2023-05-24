import styles from './MyCreatePost.module.scss';
import React, { useRef } from 'react';
import { useState, useEffect } from "react";
import Header from '../HeaderAdmin2/HeaderAdmin2';
import { host } from '../../api/axiosClient';
import articleApi from '../../api/article';
import { useNavigate } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';


const MyCreatePost = () => {
    const [toggleState, setToggleState] = useState(1);
    const [post, setPost] = useState([]);
    const [aprrovePosts, setApprovePosts] = useState([]);
    const [publishPosts, setPublishPosts] = useState([]);

    const [postState, setPostState] = useState(0);
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(12);

    console.log(post);

    const fetchNumPost = () => {
        articleApi.getPostApproved(0)
            .then(res => {
                setApprovePosts(res.data);
            })
        articleApi.getPostApproved(1)
            .then(res => {
                setPublishPosts(res.data);
            })
    }

    useEffect(() => {
        fetchNumPost()
    }, [])

    const fetchData = () => {
        articleApi.getPostApproved(postState)
            .then(res => {
                setPost(res.data);
            })
    }
    console.log(post);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchData()
    }, [toggleState])

    const toggleTab = (index) => {
        setToggleState(index);
    }

    const handlePostDetail = (e, id) => {
        navigate('/postDetail', { state: { idPost: id } });
    }

    const handleEditPost = (e, id) => {
        navigate('/editPost', { state: { idPost: id } });
    }

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPostData = post.slice(firstPostIndex, lastPostIndex);

    return (
        <div className={styles.container}>
            <Header></Header>
            <div className={styles.body}>
                <div className={styles.body_heading}>
                    <h2>Bài viết của tôi</h2>
                    <h5>Tạo và chỉnh sửa bài viết trên trang web.<a href='/createPost'>Tạo Bài Viết Ngay</a></h5>
                </div>
                <ul className={styles.body_navbar}>
                    <li
                        className={toggleState === 1 ? `${styles.body_navbar_item_active}` : `${styles.body_navbar_item}`}
                        onClick={() => (toggleTab(1), setPostState(0))}>
                        <span className={styles.body_navbar_key}>Chờ Phê Duyệt</span>
                        <span className={styles.body_navbar_value}>{Object.keys(aprrovePosts).length}</span>
                    </li>
                    <li
                        className={toggleState === 2 ? `${styles.body_navbar_item_active}` : `${styles.body_navbar_item}`}
                        onClick={() => (toggleTab(2), setPostState(1))}>
                        <span className={styles.body_navbar_key}>Đã đăng</span>
                        <span className={styles.body_navbar_value}>{Object.keys(publishPosts).length}</span>
                    </li>
                    <li
                        className={toggleState === 3 ? `${styles.body_navbar_item_active}` : `${styles.body_navbar_item}`}
                        onClick={() => toggleTab(3)}>
                        <span className={styles.body_navbar_key}>Đang chờ</span>
                        <span className={styles.body_navbar_value}>2</span>
                    </li>
                </ul>
                <div className={styles.body_content}>
                    {toggleState === 1 && (
                        <div>
                            <div className={styles.body_content_list}>
                                {currentPostData.map((item, index) => {
                                    return (
                                        <div className={styles.container} key={index}>
                                            <div className={styles.img_container}>
                                                <div className={styles.edit_review}>
                                                    <a onClick={e => handleEditPost(e, item.id)}><i className="fa-solid fa-pencil"></i></a>
                                                    <a onClick={e => handlePostDetail(e, item.id)}><i className="fa-solid fa-eye"></i></a>
                                                </div>
                                                <div className={styles.thumbnail_img}>
                                                    <img src={host + '/api/file/download/' + item.thumbnailImage} alt="thumbnail image" />
                                                </div>
                                            </div>
                                            <div className={styles.post_title} onClick={e => handlePostDetail(e, item.id)}>{item.title}</div>
                                            <div className={styles.post_items_bonus}>
                                                <i className="fa-regular fa-clock"></i>
                                                <span className={styles.article_item_date}>
                                                    {`Ngày ` + `${item.lastModifiedDate.substring(8, 10)}` + ` tháng ` + `${item.lastModifiedDate.substring(6, 7)}` + ` năm ` + `${item.lastModifiedDate.substring(0, 4)}` + ` lúc ` + `${item.lastModifiedDate.substring(11, 16)}`}
                                                </span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className={styles.line}></div>
                            <Pagination
                                totalPosts={post.length}
                                postsPerPage={postsPerPage}
                                setCurrentPage={setCurrentPage}
                                currentPage={currentPage}
                                lastPage={Math.ceil(post.length / postsPerPage)}
                            />
                        </div>
                    )}
                    {toggleState === 2 && (
                        <div>
                            <div className={styles.body_content_list}>
                                {currentPostData.map((item, index) => {
                                    return (
                                        <div className={styles.container} key={index}>
                                            <div className={styles.img_container}>
                                                <div className={styles.edit_review}>
                                                    <a onClick={e => handleEditPost(e, item.id)}><i className="fa-solid fa-pencil"></i></a>
                                                    <a onClick={e => handlePostDetail(e, item.id)}><i className="fa-solid fa-eye"></i></a>
                                                </div>
                                                <div className={styles.thumbnail_img}>
                                                    <img src={host + '/api/file/download/' + item.thumbnailImage} alt="thumbnail image" />
                                                </div>
                                            </div>
                                            <div className={styles.post_title} onClick={e => handlePostDetail(e, item.id)}>{item.title}</div>
                                            <div className={styles.post_items_bonus}>
                                                <i className="fa-regular fa-clock"></i>
                                                <span className={styles.article_item_date}>
                                                    {`Ngày ` + `${item.lastModifiedDate.substring(8, 10)}` + ` tháng ` + `${item.lastModifiedDate.substring(6, 7)}` + ` năm ` + `${item.lastModifiedDate.substring(0, 4)}` + ` lúc ` + `${item.lastModifiedDate.substring(11, 16)}`}
                                                </span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className={styles.line}></div>
                            <Pagination
                                totalPosts={post.length}
                                postsPerPage={postsPerPage}
                                setCurrentPage={setCurrentPage}
                                currentPage={currentPage}
                                lastPage={Math.ceil(post.length / postsPerPage)}
                            />
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default MyCreatePost;