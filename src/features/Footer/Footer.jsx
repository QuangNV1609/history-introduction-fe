import "./Footer.scss"
import favicon from "../../resource/favicon.ico"

const Footer = () => {
    return (
        <div className="footer">
            <img src={favicon} alt="" />
            <div>
                <span>© năm 2023 bởi Lịch Sử Việt Nam. Đã đăng ký bản quyền.</span>
                <span>Điều khoản Sử dụng Chính Sách Quyền Riêng Tư Trợ Năng Tùy Chọn Cookie</span>
            </div>
        </div>
    )
}

export default Footer