import styles from "./PostDetail.module.scss";
import { useState, useEffect } from "react";
import "../../assets/scss/base.scss";
import articleApi from '../../api/article';
import { host } from "../../api/axiosClient";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import userApi from "../../api/user";
import { toast, Toaster } from "react-hot-toast";
import 'suneditor/dist/css/suneditor.min.css';
import Swal from 'sweetalert2';

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
    console.log(post);

    const handlePeriod = () => {
        navigate('/seeMore', { state: { idPeriod: post.historicalPeriod } })
    }

    console.log(location.state.idPost);

    const handleApprove = (e) => {
        e.preventDefault();
        articleApi.approve(location.state.idPost).then(res => {
            if (res.status === 200) {
                toast.success('Đã phê duyệt bài viết!');
                const timer = setTimeout(() => {
                    navigate('/approvePost');
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
                articleApi.deleteOnePost(location.state.idPost).then(res => {
                    if (res.status === 200) {
                        navigate('/approvePost');
                    }
                })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        })
    }

    return (
        <div className={styles.main}>
            <Toaster toastOptions={{ duration: 1000 }} />
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
                                <span className={styles.article_info_value}>{post.lastName + ' '+ post.firstName}</span>
                            </p>
                            <p>
                                <span className={styles.article_info_key}>Ngày cập nhật</span>
                                
                                <span className={styles.article_info_value}>{post.lastModifiedDate !== undefined ? `${post.lastModifiedDate.substring(8, 10)}` + ` tháng ` + `${post.lastModifiedDate.substring(5, 7)}` + ` năm ` + `${post.lastModifiedDate.substring(0, 4)}` : ''}</span>
                            </p>
                            <p>
                                <span className={styles.article_info_key}>Ngày xuất bản</span>
                                <span className={styles.article_info_value}>{post.lastModifiedDate !== undefined ? `${post.lastModifiedDate.substring(8, 10)}` + ` tháng ` + `${post.lastModifiedDate.substring(5, 7)}` + ` năm ` + `${post.lastModifiedDate.substring(0, 4)}` : ''}</span>
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
                    <div className={styles.approve_btn} onClick={handleApprove}><i className="fa-solid fa-check"></i>Phê duyệt bài viết</div>
                    <div className={styles.delete_btn} onClick={handleDelete}><i className="fa-solid fa-trash"></i>Xóa bài viết</div>
                </div>
            )}
            {(role === 'ROLE_ADMIN' && post.status === 1) && (
                <div className={styles.approve_btn_container}>
                    <div className={styles.delete_btn} onClick={handleDelete}><i className="fa-solid fa-trash"></i>Xóa bài viết</div>
                </div>
            )}
        </div>
    )
}

export default PostDetail;