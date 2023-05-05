import styles from './MyCreatePost.module.scss';
import React, { useRef } from 'react';
import { useState, useEffect } from "react";
import Header from '../HeaderAdmin2/HeaderAdmin2';
import image from '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg';
import { host } from '../../api/axiosClient';
import articleApi from '../../api/article';
import { useNavigate } from 'react-router-dom';


const MyCreatePost = () => {
    const [toggleState, setToggleState] = useState(1);
    const [post, setPost] = useState([]);
    const [allPost, setAllPost] = useState(true);
    const [publishedPost, setPublishedPost] = useState(false);
    const [waitingPost, setWaitingPost] = useState(false);
    const navigate = useNavigate();


    const jwt = window.localStorage.getItem('jwtToken');
    console.log(jwt);

    const fetchData = () => {
        articleApi.getMyPost()
            .then(res => {
                setPost(res.data);
            })
    }
    console.log(post);

    useEffect(() => {
        fetchData()
    }, [])

    const toggleTab = (index) => {
        setToggleState(index);
    }

    const myAllPost = [
        {
            id: 1,
            title: 'Tieu de so 1',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg'
        },
        {
            id: 2,
            title: 'Tieu de so 2',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg'
        },
        {
            id: 3,
            title: 'Tieu de so 3',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg'
        },
        {
            id: 2,
            title: 'Tieu de so 2',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg'
        },
        {
            id: 3,
            title: 'Tieu de so 3',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg'
        },
        {
            id: 2,
            title: 'Tieu de so 2',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg'
        },
        {
            id: 3,
            title: 'Tieu de so 3',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg'
        },
        {
            id: 2,
            title: 'Tieu de so 2',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg'
        },
        {
            id: 3,
            title: 'Tieu de so 3',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg'
        },
        {
            id: 2,
            title: 'Tieu de so 2',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg'
        },
        {
            id: 3,
            title: 'Tieu de so 3',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg'
        },
        {
            id: 2,
            title: 'Tieu de so 2',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg'
        },
        {
            id: 3,
            title: 'Tieu de so 3',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg'
        },
        {
            id: 2,
            title: 'Tieu de so 2',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg'
        },
        {
            id: 3,
            title: 'Tieu de so 3',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg'
        },
        {
            id: 2,
            title: 'Tieu de so 2',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg'
        },
        {
            id: 3,
            title: 'Tieu de so 3',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg'
        },
        {
            id: 2,
            title: 'Tieu de so 2',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg'
        },
        {
            id: 3,
            title: 'Tieu de so 3',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg'
        },
        {
            id: 2,
            title: 'Tieu de so 2',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg'
        },
        {
            id: 3,
            title: 'Tieu de so 3',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg'
        },
        {
            id: 2,
            title: 'Tieu de so 2',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg'
        },
        {
            id: 3,
            title: 'Tieu de so 3',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg'
        },
        {
            id: 2,
            title: 'Tieu de so 2',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg'
        },
        {
            id: 3,
            title: 'Tieu de so 3',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg'
        }
    ]
    
    const handlePostDetail = (e, id) => {
        navigate('/postDetail', { state: { idPost: id } });
    }

    // useEffect(() => {
    //     setPost(myAllPost);
    // }, []);

    return (
        <div className={styles.container}>
            <Header></Header>
            <div className={styles.body}>
                <div className={styles.body_heading}>
                    <h2>Bài viết của tôi</h2>
                    <h5>Tạo và chỉnh sửa bài viết trên trang web.<a href=''>Tìm hiểu thêm</a></h5>
                </div>
                <ul className={styles.body_navbar}>
                    <li
                        className={toggleState === 1 ? `${styles.body_navbar_item_active}` : `${styles.body_navbar_item}`}
                        onClick={() => toggleTab(1)}>
                        <span className={styles.body_navbar_key}>Tất cả</span>
                        <span className={styles.body_navbar_value}>3</span>
                    </li>
                    <li
                        className={toggleState === 2 ? `${styles.body_navbar_item_active}` : `${styles.body_navbar_item}`}
                        onClick={() => toggleTab(2)}>
                        <span className={styles.body_navbar_key}>Đã đăng</span>
                        <span className={styles.body_navbar_value}>1</span>
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
                        <div className={styles.body_content_list}>
                            {/* {Object.keys(post).map((item, index) => React.createElement(CreatePostItem, {
                                image: post[item].thumbnailImage,
                                title: post[item].title,
                                date: '08 tháng 03 năm 2023',
                                key: index
                            }))} */}
                            {post.map((item, index) => {
                                return (
                                    <div className={styles.container} key={index}>
                                        <div className={styles.img_container}>
                                            <div className={styles.edit_review}>
                                                <a href=""><i className="fa-solid fa-pencil"></i></a>
                                                <a onClick={e => handlePostDetail(e, item.id)}><i className="fa-solid fa-eye"></i></a>
                                            </div>
                                            <div className={styles.thumbnail_img}>
                                                <img src={host + '/api/file/download/' + item.thumbnailImage} alt="thumbnail image" />
                                            </div>
                                        </div>
                                        <div>
                                            <a onClick={e => handlePostDetail(e, item.id)}>{item.title}</a>
                                            <h4><i className="fa-solid fa-clock"></i>08 tháng 03 năm 2023</h4>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default MyCreatePost;