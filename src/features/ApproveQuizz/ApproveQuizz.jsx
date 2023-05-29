import styles from './ApproveQuizz.module.scss';
import { useState, useEffect } from "react";
import "../../assets/scss/base.scss";
import { host } from '../../api/axiosClient';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import Select from 'react-select';
import DataTable from 'react-data-table-component';
import qaApi from '../../api/qa';


const ApproveQuizz = () => {
    const [toggleState, setToggleState] = useState(1);
    const [period, setPostState] = useState(0);
    const [refresh, setRefresh] = useState(0);
    const [listData, setListData] = useState([]);
    const [listId, setListId] = useState([]);
    const [eventType, setEventType] = useState('');

    const toggleTab = (index) => {
        setToggleState(index);
    }

    const rowClicked = (row, event) => { 
        console.log(row, "clicked")
    };

    useEffect(() => {
        qaApi.findAllQuizz()
        .then(res => setListData(res.data))
    }, [refresh])

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
            selector: row => row.content
        },
        {
            name: 'Đáp án',
            selector: row => {
                let result = ""
                row.answers.forEach((item) => {
                    if (item.answerTrue) {
                        result = item.content
                    }
                })
                return result
            }
        },
        {
            name: 'Bài viết',
            selector: row => row.articleTitle
        },
    ];

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
                                    onClick={ () => {
                                        console.log(listId)
                                        qaApi.approveQuizz(listId)
                                        .then(res => {
                                            setRefresh(refresh + 1)
                                            setListId([])
                                        })
                                    }}
                                >
                                    <i className="fa-solid fa-check"></i>Phê duyệt câu hỏi
                                </span>
                            )}
                            <span
                                className={styles.delete_btn}
                                onClick={() => {
                                    qaApi.removeQuizz(listId)
                                    .then(res => {
                                        setRefresh(refresh + 1)
                                        setListId([])
                                    })
                                }}
                            >
                                <i className="fa-solid fa-trash"></i>Xóa câu hỏi
                            </span>
                        </div>
                    </div>

                    <div>
                        <DataTable
                            columns={columns}
                            data={listData}
                            selectableRows
                            fixedHeader
                            pagination
                            className={styles.table}
                            onSelectedRowsChange={(data) => {
                                const newList = [...listId]
                                newList.push(data.selectedRows[0].id)
                                console.log(data.selectedRows[0].id)
                                setListId(newList)
                            }}
                        ></DataTable>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApproveQuizz;