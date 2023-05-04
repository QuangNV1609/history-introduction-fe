import Header from '../HeaderAdmin2/HeaderAdmin2';
import React, { useRef } from 'react';
import styles from './ApprovePost.module.scss';
import { useState, useEffect } from "react";
import "../../assets/scss/base.scss";
import articleApi from '../../api/article';
import { host } from '../../api/axiosClient';
import { useNavigate } from 'react-router-dom';

const ApprovePost = () => {

    const [posts, setPosts] = useState([]);
    const [selectPost, setSelectPost] = useState('');
    const [listSelectPost, setListSelectPost] = useState([]);
    const navigate = useNavigate();

    const fetchData = () => {
        articleApi.getMyPost()
            .then(res => {
                setPosts(res.data);
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    const handleChange = (e) => {
        const { id, checked } = e.target;
        if (id === "allSelect") {
            let tempPost = posts.map(post => {
                return { ...post, isChecked: checked };
            });
            setPosts(tempPost);
        } else {
            let tempPost = posts.map((post) =>
                (post.id === parseInt(id)) ? { ...post, isChecked: checked } : post
            );
            setPosts(tempPost);
        }
        console.log(id, checked);
        if (checked === true) {
            setSelectPost(id);
            setListSelectPost(oldArray => [...oldArray, id]);
        }
        else {
            setListSelectPost((current) =>
                current.filter((element) => {
                    return element !== id;
                })
            );

        }
    }
    //console.log(listSelectPost);


    const handleApprove = (e) => {
        // articleApi.approve(parseInt(selectPost)).then(res => {
        //     if (res.status === 200) {
        //         alert("Da duyet bai viet");
        //     }
        //     throw Error("Approve post failed")
        // })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
        articleApi.approveMultiple(listSelectPost).then(res => {
            if (res.status === 200) {
                alert("Da duyet bai viet");
            }
            throw Error("Approve post failed")
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handlePostDetail = (e, id) => {
        navigate('/postDetail', { state: { idPost: id } });
    }

    return (
        <div>
            <Header></Header>
            <div className={styles.body}>
                <div className={styles.body_heading}>
                    <h2>Quản lý bài viết</h2>
                    <h5>Phê duyệt và xóa bài viết trên trang web.<a href=''>Tìm hiểu thêm</a></h5>
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
                        <span className={styles.body_navbar_key}>Bài viết mới</span>
                        <span className={styles.body_navbar_value}>1</span>
                    </li>
                    <li
                        className={toggleState === 3 ? `${styles.body_navbar_item_active}` : `${styles.body_navbar_item}`}
                        onClick={() => toggleTab(3)}>
                        <span className={styles.body_navbar_key}>Yêu cầu chỉnh sửa</span>
                        <span className={styles.body_navbar_value}>2</span>
                    </li>
                </ul>

                <div className={styles.body_content}>
                    <div className={styles.approve_tool}>
                        <div className={styles.approve_tool_left}>
                            <input
                                type="checkbox"
                                id='allSelect'
                                checked={posts.filter(post => post?.isChecked !== true).length < 1}
                                onChange={handleChange}

                            />
                            <label htmlFor="allSelect" >Chọn tất cả</label>
                        </div>
                        <div className={styles.approve_tool_right}>
                            <span
                                className={styles.approve_btn}
                                onClick={handleApprove}
                            >
                                <i className="fa-solid fa-check"></i>
                                Phê duyệt bài viết
                            </span>
                            <span className={styles.delete_btn}><i className="fa-solid fa-trash"></i>Xóa bài viết</span>
                        </div>
                    </div>
                    {toggleState === 1 && (
                        <div className={styles.body_content_list}>
                            {posts.map((item, index) => {
                                return (
                                    <div className={styles.post_items} key={index}>
                                        <div className={styles.img_container} onClick={e => handlePostDetail(e, item.id)}>
                                            <img
                                                src={host + '/api/file/download/' + item.thumbnailImage}
                                                alt="thumbnail image"
                                            />
                                            <input
                                                type="checkbox"
                                                id={item.id}
                                                checked={item?.isChecked || false}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div>
                                            <div 
                                                className={styles.post_items_title}
                                                onClick={e => handlePostDetail(e, item.id)}
                                            >
                                                {item.title}
                                            </div>
                                            <h4><i className="fa-solid fa-clock"></i>Ngày 30 tháng 4 năm 2023 lúc 22:10</h4>
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

export default ApprovePost;