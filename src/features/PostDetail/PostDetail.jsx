import HeaderAdmin2 from "../HeaderAdmin2/HeaderAdmin2";
import styles from "./PostDetail.module.scss";
import { useState, useEffect } from "react";
import "../../assets/scss/base.scss";
import articleApi from '../../api/article';
import { host } from "../../api/axiosClient";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import userApi from "../../api/user";

const PostDetail = () => {

    const [post, setPost] = useState('');
    const navigate = useNavigate();
    const [role, setRole] = useState('');
    const location = useLocation();
    const userToken = window.localStorage.getItem('jwtToken');

    const eventTypeOptions = ['Thời kỳ tiền sử', 'Thời kỳ cổ đại', 'Thời kỳ Bắc Thuộc', 'Thời kỳ Bắc Thuộc lần thứ III',
        'Thời kỳ tự chủ', 'Thời kỳ quân chủ', 'Thời kỳ Bắc Thuộc lần thứ IV', 'Thời kỳ Trung Hưng - Nhà Hậu Lê',
        'Thời kỳ chia cắt', 'Thời kỳ Bắc Triều - Nam Triều', 'Thời kỳ Trịnh - Nguyễn', 'Thời kỳ thống nhất', 'Thời kỳ hiện đại'];

    const fetchData = () => {
        articleApi.showDetail(location.state.idPost)
            .then(res => {
                setPost(res.data);
            })
    }

    const fetchUserData = () => {
        if (userToken !== null) {
            userApi.getInfo()
                .then(res => {
                    setRole(res.data.roleName[0]);
                })
        }
    }

    useEffect(() => {
        fetchData()
        fetchUserData()
        window.scrollTo(0, 0)
    }, [])
    console.log(role);

    const handlePeriod = () => {
        navigate('/seeMore', { state: { idPeriod: post.historicalPeriod } })
    }

    console.log(location.state.idPost);
    return (
        <div className={styles.main}>
            <div className={styles.heading}>
                <div className={styles.heading_link}>
                    <a href="/home">Trang chủ</a><span> / </span>
                    <a href="/period">Thời kỳ</a><span> / </span>
                    <a href="" onClick={handlePeriod}>{eventTypeOptions[post.historicalPeriod]}</a><span> / </span>
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
                        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                    </div>
                    <div className={styles.content_body_footer}>
                        <div className={styles.content_body_footer_info}>
                            <p className={styles.article_info}>Thông tin trích dẫn</p>
                            <p>
                                <span className={styles.article_info_key}>Tiêu đề bài viết</span>
                                <span className={styles.article_info_value}>{post.title}</span>
                            </p>
                            <p>
                                <span className={styles.article_info_key}>Tác giả</span>
                                <span className={styles.article_info_value}>Biên tập viên Lịch Sử Việt Nam</span>
                            </p>
                            <p>
                                <span className={styles.article_info_key}>Ngày cập nhật</span>
                                <span className={styles.article_info_value}>{String(post.lastModifiedDate).substring(0, 10)}</span>
                            </p>
                            <p>
                                <span className={styles.article_info_key}>Ngày xuất bản</span>
                                <span className={styles.article_info_value}>{String(post.creatAt).substring(0, 10)}</span>
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
            {(role === 'ROLE_ADMIN' && post.status === 0) && (
                <div className={styles.approve_btn_container}>
                <div className={styles.approve_btn}><i class="fa-solid fa-check"></i>Phê duyệt bài viết</div>
                <div className={styles.delete_btn}><i class="fa-solid fa-trash"></i>Xóa bài viết</div>
            </div>
            )}
        </div>
    )
}

export default PostDetail;