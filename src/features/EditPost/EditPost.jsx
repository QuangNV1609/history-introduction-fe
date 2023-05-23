import styles from "./EditPost.module.scss";
import React, { useRef } from 'react';
import { useState } from "react";
import Select from 'react-select';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import articleApi from '../../api/article';
import { host } from "../../api/axiosClient";
import {
    align,
    font,
    fontColor,
    fontSize,
    formatBlock,
    hiliteColor,
    horizontalRule,
    lineHeight,
    list,
    table,
    template,
    textStyle,
    image,
    video,
    link
} from "suneditor/src/plugins";
import { useEffect } from "react";


const EditPost = () => {
    const [content, setContent] = useState('')
    const [title, setTitle] = useState('');
    const [theme, setTheme] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [postType, setPostType] = useState();
    const [dateEvent, setDateEvent] = useState('');
    const [eventType, setEventType] = useState();
    const [post, setPost] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    const postTypeOptions = [
        { value: '0', label: 'Sự kiện lịch sử' },
        { value: '1', label: 'Tiểu sử nhân vật' }
    ];

    console.log(location.state.idPost);
    console.log(post);

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

    const fetchData = () => {
        articleApi.showDetail(location.state.idPost)
            .then(res => {
                setPost(res.data);
                setTitle(res.data.title);
                setPostType(postTypeOptions[res.data.postType]);
                setDateEvent(String(res.data.historyDay).substring(0, 10));
                setEventType(eventTypeOptions[res.data.historicalPeriod]);
                setContent(res.data.content);
            })
    }

    useEffect(() => {
        fetchData()
        window.scrollTo(0, 0)
    }, [])

    const handlePreviewTheme = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)

        setTheme(file)
    }

    const handlePublish = (e) => {
        e.preventDefault();

        const post = {
            coverImage: theme,
            thumbnailImage: theme,
            title: title,
            content: content,
            historyDay: dateEvent,
            postType: parseInt(postType.value),
            historicalPeriod: parseInt(eventType.value),
            parentID: location.state.idPost
        };

        var fd = new FormData();
        for (var key in post) {
            console.log(key, post[key]);
            fd.append(key, post[key]);
        }

        console.log(post);
        articleApi.create(fd).then(res => {
            console.log(res.status);
            if (res.status === 200) {
                alert("Da xuat ban bai viet");
                navigate('/myCreatePost');
            }
            throw Error("Create post failed")
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className={styles.container}>
            <div className={styles.body}>
                <div className={styles.theme_container}>
                    {theme && (
                        <img src={theme.preview} alt="theme" />
                    )}
                    {!theme && (
                        <img src={host + '/api/file/download/' + post.thumbnailImage} alt="theme" />
                    )}

                    <input
                        type="file"
                        id="theme_upload"
                        onChange={handlePreviewTheme}
                    />
                    <label htmlFor="theme_upload" className={styles.theme_upload_label}>
                        <i className="fa-solid fa-camera"></i>
                        Tải ảnh bìa
                    </label>
                </div>

                <div className={styles.content_container}>
                    <div className={styles.content}>
                        <input
                            type="text"
                            value={title}
                            className={styles.title_input}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        {/* The loai bai viet, ngay su kien, xuat ban bai viet */}
                        <div className={styles.content_post}>
                            <div className={styles.content_post_left}>
                                <div className={styles.content_post_type}>
                                    <Select
                                        className={styles.content_post_type_select}
                                        options={postTypeOptions}
                                        value={postType}
                                        placeholder="Thể loại bài viết"
                                        onChange={setPostType}
                                        styles={{
                                            control: (baseStyles) => ({
                                                ...baseStyles,
                                                borderColor: "#e9e9e9",
                                            }),
                                            menu: base => ({ ...base, zIndex: 999 })
                                        }}
                                    />
                                </div>
                                <input
                                    type="date"
                                    className={styles.post_event_date}
                                    value={dateEvent}
                                    onChange={e => setDateEvent(e.target.value)}
                                />
                                <div className={styles.content_event_type}>
                                    <Select
                                        className={styles.content_post_type_select}
                                        options={eventTypeOptions}
                                        value={eventType}
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
                            </div>
                            <div className={styles.content_post_right}>
                                <button
                                    className={styles.publish_btn}
                                    onClick={handlePublish}>
                                    Xuất bản bài viết
                                    <i className="fa-solid fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>

                        <div className={styles.post_editor}>
                            <SunEditor
                                lang="en"
                                setContents={content}
                                onChange={e => setContent(e)}
                                setOptions={{
                                    showPathLabel: false,
                                    width: 'auto',
                                    height: 'auto',
                                    minHeight: '300px',
                                    maxHeight: '400px',
                                    placeholder: "Bắt đầu viết...",
                                    plugins: [
                                        align,
                                        font,
                                        fontColor,
                                        fontSize,
                                        formatBlock,
                                        hiliteColor,
                                        horizontalRule,
                                        lineHeight,
                                        list,
                                        table,
                                        template,
                                        textStyle,
                                        image,
                                        video,
                                        link
                                    ],
                                    buttonList: [
                                        ["undo", "redo"],
                                        ["font", "fontSize", "formatBlock"],
                                        ["removeFormat"],
                                        [
                                            "bold",
                                            "underline",
                                            "italic",
                                            "strike",
                                            "subscript",
                                            "superscript"
                                        ],
                                        ["fontColor", "hiliteColor"],
                                        ["align", "horizontalRule", "list", "lineHeight"],
                                        "/", // Line break
                                        ["outdent", "indent"],
                                        ["table", "link", "image", "video"]
                                    ],
                                    formats: ["p", "div", "h1", "h2", "h3", "h4", "h5", "h6"],
                                    font: [
                                        "Arial",
                                        "Calibri",
                                        "Comic Sans",
                                        "Courier",
                                        "Garamond",
                                        "Georgia",
                                        "Impact",
                                        "Lucida Console",
                                        "Palatino Linotype",
                                        "Segoe UI",
                                        "Tahoma",
                                        "Times New Roman",
                                        "Trebuchet MS"
                                    ]
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditPost;