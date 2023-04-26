import Header from '../HeaderAdmin2/HeaderAdmin2';
import React, { useRef } from 'react';
import styles from './ApprovePost.module.scss';
import { useState, useEffect } from "react";
import ApprovePostItem from './ApprovePostItem/ApprovePostItem';
import image from '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg'

const ApprovePost = () => {
    const [toggleState, setToggleState] = useState(1);
    const [post, setPost] = useState('');

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
        }
    ]

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
                            <input type="checkbox" id='sellectAll' />
                            <label htmlFor="sellectAll">Chọn tất cả</label>
                        </div>
                        <div className={styles.approve_tool_right}>
                            <span className={styles.approve_btn}><i class="fa-solid fa-check"></i>Phê duyệt bài viết</span>
                            <span className={styles.delete_btn}><i class="fa-solid fa-trash"></i>Xóa bài viết</span>
                        </div>
                    </div>
                    {toggleState === 1 && (
                        <div className={styles.body_content_list}>
                            {Object.keys(myAllPost).map((item, index) => React.createElement(ApprovePostItem, {
                                image: image,
                                title: myAllPost[item].title,
                                date: '08 tháng 03 năm 2023',
                                id: myAllPost[item].id,
                                key: index
                            }))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ApprovePost;