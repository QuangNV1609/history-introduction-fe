import HeaderAdmin2 from "../HeaderAdmin2/HeaderAdmin2";
import styles from "./PostDetail.module.scss";
import { useState, useEffect } from "react";
import "../../assets/scss/base.scss";
import articleApi from '../../api/article';
import { host } from "../../api/axiosClient";
import {useLocation} from 'react-router-dom';

const PostDetail = () => {
    const [post, setPost] = useState('');
    const location = useLocation();

    console.log(typeof location.state.idPost);

    const fetchData = () => {
        articleApi.showDetail(location.state.idPost)
            .then(res => {
                console.log(res.data);
                setPost(res.data);
            })
    }
    //console.log(post);

    useEffect(() => {
        fetchData()
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={styles.container}>
            <HeaderAdmin2></HeaderAdmin2>
            <div className={styles.main}>
                <div className={styles.heading}>
                    <div className={styles.heading_link}>
                        <a href="">Trang chủ</a><span> / </span>
                        <a href="">Thời kỳ</a><span> / </span>
                        <a href="">Tên Thời Kỳ</a><span> / </span>
                        <a href="" className={styles.last_link}>{post.title}</a>
                    </div>
                    <div className={styles.heading_title}>
                        <span>{post.title}</span>
                    </div>
                </div>
                <div className={styles.theme_img}>
                    <img src={host + '/api/file/download/' + post.coverImage} alt="them_img" />
                </div>
                <div className={styles.gradient_line}></div>
                <div className={styles.content}>
                    <div className={styles.content_body}>
                        <div className={styles.content_body_container}>
                            <div dangerouslySetInnerHTML={{__html: post.content}}></div>
                        </div>
                        <div className={styles.content_body_footer}>
                            <div className={styles.content_body_footer_info}>
                                <p className={styles.article_info}>Thông tin trích dẫn</p>
                                <p>
                                    <span className={styles.article_info_key}>Tiêu đề bài viết</span>
                                    <span className={styles.article_info_value}>Tên tiêu đề</span>
                                </p>
                                <p>
                                    <span className={styles.article_info_key}>Tác giả</span>
                                    <span className={styles.article_info_value}>Biên tập viên Lịch Sử Việt Nam</span>
                                </p>
                                <p>
                                    <span className={styles.article_info_key}>Ngày cập nhật</span>
                                    <span className={styles.article_info_value}>18 tháng Năm, 2023</span>
                                </p>
                                <p>
                                    <span className={styles.article_info_key}>Ngày xuất bản</span>
                                    <span className={styles.article_info_value}>13 tháng Chín, 2022</span>
                                </p>
                                <span className={styles.print_btn}>
                                    <i className="fa-solid fa-print"></i>
                                    IN TRANG
                                </span>
                            </div>
                            <div className={styles.content_body_footer_fact}>
                                <div className={styles.line_cross_fact}></div>
                                <span className={styles.article_info}>Fact Check</span>
                                <p>Chúng tôi luôn cố gắng đem đến sự chính xác và công bằng. Nếu bạn phát hiện điều gì đó, hãy <a href="">nhấp vào đây</a> để liên hệ với chúng tôi! LỊCH SỬ VIỆT NAM sẽ xem xét và cập nhật nội dung thường xuyên để đảm bảo nội dung đầy đủ và chính xác.</p>
                                <div className={styles.line_cross_fact}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PostDetail;