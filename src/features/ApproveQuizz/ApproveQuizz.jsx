import styles from './ApproveQuizz.module.scss';
import { useState, useEffect } from "react";
import "../../assets/scss/base.scss";
import { host } from '../../api/axiosClient';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import Select from 'react-select';
import DataTable from 'react-data-table-component';


const ApproveQuizz = () => {
    const [toggleState, setToggleState] = useState(1);
    const [postState, setPostState] = useState(0);
    const [eventType, setEventType] = useState('');

    const toggleTab = (index) => {
        setToggleState(index);
    }

    const eventTypeOptions = [
        { value: '0', label: 'Thời kỳ tiền sử' },
        { value: '1', label: 'Thời kỳ cổ đại' },
        { value: '2', label: 'Thời kỳ Bắc Thuộc' },
        { value: '3', label: 'Thời kỳ Bắc Thuộc lần thứ III' },
        { value: '4', label: 'Thời kỳ tự chủ' },
        { value: '5', label: 'Thời kỳ quân chủ' },
        { value: '6', label: 'Thời kỳ Bắc Thuộc lần thứ IV' },
        { value: '7', label: 'Thời kỳ Trung Hưng - Nhà Hậu Lê' },
        { value: '8', label: 'Thời kỳ chia cắt' },
        { value: '9', label: 'Thời kỳ Bắc Triều - Nam Triều' },
        { value: '10', label: 'Thời kỳ Trịnh - Nguyễn' },
        { value: '11', label: 'Thời kỳ thống nhất' },
        { value: '12', label: 'Thời kỳ hiện đại' }
    ];

    const columns = [
        {
            name: 'Nội dung câu hỏi',
            selector: row => row.quizzContent
        },
        {
            name: 'Đáp án',
            selector: row => row.answer
        },
        {
            name: 'Ngày đăng',
            selector: row => row.creatAt,
            sortable: true
        },
        {
            name: 'Tác giả',
            selector: row => row.author
        },
    ];

    const data = [
        {
            idQuizz: 1,
            quizzContent: "Bác Hồ sinh vào ngày tháng năm nào?",
            answer: "19-05-1890",
            creatAt: "20-02-2023",
            author: "Nguyễn A"
        },
        {
            idQuizz: 2,
            quizzContent: "Bác Hồ sinh vào ngày tháng năm nào?",
            answer: "19-05-1890",
            creatAt: "21-02-2023",
            author: "Nguyễn A"
        },
        {
            idQuizz: 3,
            quizzContent: "Bác Hồ sinh vào ngày tháng năm nào?",
            answer: "19-05-1890",
            creatAt: "01-01-2021",
            author: "Nguyễn A"
        },
        {
            idQuizz: 4,
            quizzContent: "Bác Hồ sinh vào ngày tháng năm nào?",
            answer: "19-05-1890",
            creatAt: "21-06-2023",
            author: "Nguyễn A"
        },
        {
            idQuizz: 5,
            quizzContent: "Bác Hồ sinh vào ngày tháng năm nào?",
            answer: "19-05-1890",
            creatAt: "20-02-2023",
            author: "Nguyễn A"
        },
        {
            idQuizz: 6,
            quizzContent: "Bác Hồ sinh vào ngày tháng năm nào?",
            answer: "19-05-1890",
            creatAt: "20-02-2023",
            author: "Nguyễn A"
        }
    ]
    return (
        <div className={styles.container}>
            <div className={styles.body}>
                <div className={styles.body_heading}>
                    <h2>Quản lý câu hỏi trắc nghiệm</h2>
                    <h5>Phê duyệt và xóa câu hỏi trên trang web.<a href=''>Tìm hiểu thêm</a></h5>
                </div>

                <div className={styles.body_content}>
                    <div className={styles.approve_tool}>
                        <div className={styles.approve_tool_left}>
                            <Select
                                className={styles.post_type_select}
                                options={eventTypeOptions}
                                defaultValue={eventType}
                                placeholder="Thời kỳ lịch sử"
                                onChange={setEventType}
                                styles={{
                                    control: (baseStyles) => ({
                                        ...baseStyles,
                                        borderColor: "#e9e9e9",
                                    }),
                                    menu: base => ({ ...base, zIndex: 999 })
                                }}
                            />
                        </div>
                        <div className={styles.approve_tool_right}>
                            {toggleState === 1 && (
                                <span
                                    className={styles.approve_btn}
                                >
                                    <i className="fa-solid fa-check"></i>Phê duyệt câu hỏi
                                </span>
                            )}
                            <span
                                className={styles.delete_btn}
                            >
                                <i className="fa-solid fa-trash"></i>Xóa câu hỏi
                            </span>
                        </div>
                    </div>

                    <div>
                        <DataTable
                            columns={columns}
                            data={data}
                            selectableRows
                            fixedHeader
                            pagination
                            className={styles.table}
                        ></DataTable>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApproveQuizz;