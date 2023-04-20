import HeaderAdmin2 from "../HeaderAdmin2/HeaderAdmin2";
import styles from "./PostDetail.module.scss";
import "../../assets/scss/base.scss"

const PostDetail = () => {
    return (
        <div className={styles.container}>
            <HeaderAdmin2></HeaderAdmin2>
            <div className={styles.main}>
                <div className={styles.heading}>
                    <div className={styles.heading_link}>
                        <a href="">Trang chủ</a><span> / </span>
                        <a href="">Thời kỳ</a><span> / </span>
                        <a href="">Tên Thời Kỳ</a><span> / </span>
                        <a href="" className={styles.last_link}>Tiêu đề bài viết</a>
                    </div>
                    <div className={styles.heading_title}>
                        <span>Tiêu đề bài viết</span>
                    </div>
                </div>
                <div className={styles.theme_img}>
                    <img src="https://images.pexels.com/photos/1532771/pexels-photo-1532771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="them_img" />
                </div>
                <div className={styles.gradient_line}></div>
                <div className={styles.content}>
                    {/* <div className={styles.content_heading}>
                        <div className={styles.content_heading_list}>
                            <span>Mục lục bài viết</span>
                            <a href="">Nguyên nhân</a>
                            <a href="">Diễn biến</a>
                            <a href="">Kết quả</a>
                        </div>
                    </div> */}
                    <div className={styles.content_body}>
                        <div className={styles.content_body_container}>
                            <h2>Luận điểm thứ nhất</h2>
                            <p>Khi những chiếc thuyền chiến đấu đầu tiên của quân Nam Hán vừa đến vùng cửa biển Bạch Đằng thì đội quân khiêu chiến của ta trên những chiếc thuyền nhẹ bỗng xuất hiện. Dưới quyền chỉ huy của tướng Nguyễn Tất Tố, quân ta chiến đấu rất dũng cảm, quyết liệt, vừa cố kìm chân giặc chờ cho nước triều lên cao, vừa để chúng không hoài nghi, giữ bí mật tuyệt đối cho trận địa mai phục. Quân Nam Hán vừa tiến vừa đánh, lợi dụng lòng quân đông, khí thế đương hăng và lúc triều dâng cao, chúng tăng tốc tiến sâu vào vùng cửa sông Bạch Đằng. Lúc nước triều dâng cao ngập cọc thì đội thuyền chiến của Nguyễn Tất Tố “dường như không còn sức”, họ vừa đánh vừa rút, để nhử địch vào trận địa đúng lúc, đúng chỗ, theo kế hoạch của Ngô Quyền. Thấy quân ta ít lại đang tìm cách tháo chạy, Hoàng Thao ra lệnh đuổi theo tiêu diệt. Càng đuổi, quân Nam Hán càng tiến sâu vào cửa sông và lọt vào trận địa mai phục của quân ta.</p>
                            <h2>Luận điểm thứ hai</h2>
                            <p>Khi những chiếc thuyền chiến đấu đầu tiên của quân Nam Hán vừa đến vùng cửa biển Bạch Đằng thì đội quân khiêu chiến của ta trên những chiếc thuyền nhẹ bỗng xuất hiện. Dưới quyền chỉ huy của tướng Nguyễn Tất Tố, quân ta chiến đấu rất dũng cảm, quyết liệt, vừa cố kìm chân giặc chờ cho nước triều lên cao, vừa để chúng không hoài nghi, giữ bí mật tuyệt đối cho trận địa mai phục. Quân Nam Hán vừa tiến vừa đánh, lợi dụng lòng quân đông, khí thế đương hăng và lúc triều dâng cao, chúng tăng tốc tiến sâu vào vùng cửa sông Bạch Đằng. Lúc nước triều dâng cao ngập cọc thì đội thuyền chiến của Nguyễn Tất Tố “dường như không còn sức”, họ vừa đánh vừa rút, để nhử địch vào trận địa đúng lúc, đúng chỗ, theo kế hoạch của Ngô Quyền. Thấy quân ta ít lại đang tìm cách tháo chạy, Hoàng Thao ra lệnh đuổi theo tiêu diệt. Càng đuổi, quân Nam Hán càng tiến sâu vào cửa sông và lọt vào trận địa mai phục của quân ta.</p>
                            <p><b>ĐỌC THÊM: </b><a href="">Chính sách ngụ binh ư nông là gì? Nội dung chính và ý nghĩa?</a></p>
                            <div className={styles.line_cross}></div>
                        </div>
                        <div className={styles.content_body_footer}>
                            <div>
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
                            </div>
                            <div>
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