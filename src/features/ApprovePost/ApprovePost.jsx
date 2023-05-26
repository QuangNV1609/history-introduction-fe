import React, { useRef } from 'react';
import styles from './ApprovePost.module.scss';
import { useState, useEffect } from "react";
import "../../assets/scss/base.scss";
import articleApi from '../../api/article';
import { host } from '../../api/axiosClient';
import { useNavigate } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import { toast, Toaster } from "react-hot-toast";
import Swal from 'sweetalert2';

const ApprovePost = () => {

    const [posts, setPosts] = useState([]);
    const [selectPost, setSelectPost] = useState('');
    const [listSelectPost, setListSelectPost] = useState([]);
    const navigate = useNavigate();
    const [toggleState, setToggleState] = useState(1);
    const [postState, setPostState] = useState(0);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(12);

    const [aprrovePosts, setApprovePosts] = useState([]);
    const [publishPosts, setPublishPosts] = useState([]);

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    const fetchData = () => {
        articleApi.getPostApproved(postState)
            .then(res => {
                setPosts(res.data);
            })
    }

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

    useEffect(() => {
        fetchData()
    }, [toggleState])

    const toggleTab = (index) => {
        setToggleState(index);
    }

    const handleChange = (e) => {
        const { id, checked } = e.target;
        console.log(id, checked);
        if (id === "allSelect") {
            let tempPost = posts.map((post) => {
                return { ...post, isChecked: checked };
            });
            setPosts(tempPost);
        } else {
            let tempPost = posts.map((post) =>
                (post.id === parseInt(id)) ? { ...post, isChecked: checked } : post
            );
            setPosts(tempPost);
        }
        if (checked === true) {
            if (id !== "allSelect") {
                setSelectPost(id);
                setListSelectPost(oldArray => [...oldArray, id]);
            }
            else {
                posts.map(post => {
                    setSelectPost(post.id.toString());
                    setListSelectPost(oldArray => [...oldArray, post.id.toString()]);
                })
                console.log(listSelectPost);
            }
        } else {
            if (id !== "allSelect") {
                setListSelectPost((current) =>
                    current.filter((element) => {
                        return element !== id;
                    })
                );
            } else {
                setListSelectPost([]);
            }
        }
    }

    const handleApprove = (e) => {
        e.preventDefault();
        articleApi.approveMultiple(listSelectPost).then(res => {
            if (res.status === 200) {
                toast.success('Đã phê duyệt bài viết!');
                const timer = setTimeout(() => {
                    window.location.reload();
                }, 1000);
                return () => clearTimeout(timer);
            }
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleDelete = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Bạn chắc chắn muốn xóa?',
            text: "Lựa chọn sẽ không được hoàn tác!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                articleApi.deletePost(listSelectPost).then(res => {
                    if (res.status === 200) {
                        window.location.reload();
                    }
                })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        })
    }

    const handlePostDetail = (e, id) => {
        navigate('/postDetail', { state: { idPost: id } });
    }

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPostData = posts.slice(firstPostIndex, lastPostIndex);

    return (
        <div className={styles.container}>
            <Toaster toastOptions={{ duration: 1000 }} />
            <div className={styles.body}>
                <div className={styles.body_heading}>
                    <h2>Quản lý bài viết</h2>
                    <h5>Phê duyệt và xóa bài viết trên trang web.<a href=''>Tìm hiểu thêm</a></h5>
                </div>
                <ul className={styles.body_navbar}>
                    <li
                        className={toggleState === 1 ? `${styles.body_navbar_item_active}` : `${styles.body_navbar_item}`}
                        onClick={() => (toggleTab(1), setPostState(0))}>
                        <span className={styles.body_navbar_key}>Phê duyệt bài viết</span>
                        <span className={styles.body_navbar_value}>{Object.keys(aprrovePosts).length}</span>
                    </li>
                    <li
                        className={toggleState === 2 ? `${styles.body_navbar_item_active}` : `${styles.body_navbar_item}`}
                        onClick={() => (toggleTab(2), setPostState(1))}>
                        <span className={styles.body_navbar_key}>Bài viết đã đăng</span>
                        <span className={styles.body_navbar_value}>{Object.keys(publishPosts).length}</span>
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
                            {toggleState === 1 && (
                                <span
                                    className={styles.approve_btn}
                                    onClick={handleApprove}
                                >
                                    <i className="fa-solid fa-check"></i>Phê duyệt bài viết
                                </span>
                            )}
                            <span
                                className={styles.delete_btn}
                                onClick={handleDelete}
                            >
                                <i className="fa-solid fa-trash"></i>Xóa bài viết
                            </span>
                        </div>
                    </div>
                    {toggleState === 1 && (
                        <div>
                            <div className={styles.body_content_list}>
                                {currentPostData.map((item, index) => {
                                    return (
                                        <div className={styles.post_items} key={index}>
                                            <div className={styles.img_container}>
                                                <img
                                                    src={host + '/api/file/download/' + item.thumbnailImage}
                                                    alt="thumbnail image"
                                                    onClick={e => handlePostDetail(e, item.id)}
                                                />
                                                <input
                                                    type="checkbox"
                                                    id={item.id}
                                                    checked={item?.isChecked || false}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div
                                                className={styles.post_items_title}
                                                onClick={e => handlePostDetail(e, item.id)}
                                            >
                                                {item.title}
                                            </div>
                                            <div className={styles.post_items_bonus}>
                                                <i className="fa-regular fa-clock"></i>
                                                <span className={styles.article_item_date}>
                                                    {`Ngày ` + `${item.lastModifiedDate.substring(8, 10)}` + ` tháng ` + `${item.lastModifiedDate.substring(5, 7)}` + ` năm ` + `${item.lastModifiedDate.substring(0, 4)}` + ` lúc ` + `${item.lastModifiedDate.substring(11, 16)}`}
                                                </span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            {posts.length === 0 && (
                                <p className={styles.message}>Không có bài viết nào cần phê duyệt!</p>
                            )}
                            <div className={styles.line}></div>
                            <Pagination
                                totalPosts={posts.length}
                                postsPerPage={postsPerPage}
                                setCurrentPage={setCurrentPage}
                                currentPage={currentPage}
                                lastPage={Math.ceil(posts.length / postsPerPage)}
                            />
                        </div>
                    )}

                    {toggleState === 2 && (
                        <div>
                            <div className={styles.body_content_list}>
                                {currentPostData.map((item, index) => {
                                    return (
                                        <div className={styles.post_items} key={index}>
                                            <div className={styles.img_container} >
                                                <img
                                                    src={host + '/api/file/download/' + item.thumbnailImage}
                                                    alt="thumbnail image"
                                                    onClick={e => handlePostDetail(e, item.id)}
                                                />
                                                <input
                                                    type="checkbox"
                                                    id={item.id}
                                                    checked={item?.isChecked || false}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div
                                                className={styles.post_items_title}
                                                onClick={e => handlePostDetail(e, item.id)}
                                            >
                                                {item.title}
                                            </div>
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
                                totalPosts={posts.length}
                                postsPerPage={postsPerPage}
                                setCurrentPage={setCurrentPage}
                                currentPage={currentPage}
                                lastPage={Math.ceil(posts.length / postsPerPage)}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ApprovePost;