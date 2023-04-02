import style from "./Role.module.scss"

const Role = ({roleID}) => {
    const roles = [["Admin", style.admin], ["Đăng bài", style.up_data], ["Quản lý", style.manage], ["Thành viên", style.member]]

    return (
        <div className={style.component}>
            <span className={roles[roleID][1]}>{roles[roleID][0]}</span>
        </div>
    )
}

export default Role
