import styles from './CreatePost.module.scss';
import React, { useRef } from 'react';
import { useState } from "react"
import Select from 'react-select';
import JoditEditor from 'jodit-react';
import HeaderAdmin2 from '../HeaderAdmin2/HeaderAdmin2';
import SunEditor from 'suneditor-react'
import 'suneditor/dist/css/suneditor.min.css'

const CreatePost = () => {
    

    const editor = useRef(null)
    const [content, setContent] = useState('')
    const [title, setTitle] = useState('');
    const [theme, setTheme] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [postType, setPostType] = useState('');
    const [dateEvent, setDateEvent] = useState('');

    const options = [
        { value: 'event', label: 'Sự kiện lịch sử' },
        { value: 'character', label: 'Tiểu sử nhân vật' }
    ]

    console.log(title);
    console.log(content);
    console.log(dateEvent);
    console.log(postType.value);

    const handlePreviewTheme = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)

        setTheme(file)
        console.log(file.preview);
    }

    const handlePreviewThumbnail = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)
        setThumbnail(file)
    }

    return (
        <div className={styles.container}>

            <HeaderAdmin2></HeaderAdmin2>
            <div className={styles.body}>
                <div className={styles.theme_container}>
                    {theme && (
                        <img src={theme.preview} alt="theme" />
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
                    <div className={styles.thumbnail}>
                        <input
                            type="file"
                            id='thumbnail_upload'
                            onChange={handlePreviewThumbnail}
                        />
                        <label htmlFor="thumbnail_upload" className={styles.thumbnail_upload_label}>
                            <i className="fa-solid fa-camera"></i>
                        </label>
                        {thumbnail && (
                            <img src={thumbnail.preview} alt="thumbnail" />
                        )}
                    </div>

                    <div className={styles.content}>
                        <input
                            type="text"
                            placeholder='Nhập tiêu đề'
                            value={title}
                            className={styles.title_input}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        {/* The loai bai viet, ngay su kien, xuat ban bai viet */}
                        <div className={styles.content_post}>
                            <div className={styles.content_post_left}>
                                <div className={styles.content_post_type}>
                                    <Select
                                        options={options}
                                        defaultValue={postType}
                                        placeholder="Thể loại bài viết"
                                        onChange={setPostType}
                                        styles={{
                                            control: (baseStyles) => ({
                                                ...baseStyles,
                                                borderColor: "#e9e9e9"
                                            })
                                        }}
                                    />
                                </div>
                                <input 
                                    type="date" 
                                    className={styles.post_event_date} 
                                    value={dateEvent}
                                    onChange={e => setDateEvent(e.target.value)}
                                />
                            </div>
                            <div className={styles.content_post_right}>
                                <button className={styles.publish_btn}>
                                    Xuất bản bài viết
                                    <i className="fa-solid fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>

                        <div className={styles.message}>Cái này là dán link ảnh</div>

                        <div className={styles.post_editor}>
                            <JoditEditor
                                ref={editor}
                                value={content}
                                onChange={newContent => setContent(newContent)}
                            />
                        </div>
                        <div className={styles.message}>Cái này là load được ảnh</div>
                        <div>
                        <SunEditor 
                                autoFocus = {true}
                                placeholder='Bắt đầu viết...'
                                height='300'
                                onChange={e => setContent(e)}
                                setDefaultStyle='font-size:14px'
                                setOptions={{
                                    buttonList:[
                                        [
                                            "bold",
                                            "underline",
                                            "italic",
                                            "strike",
                                            "list",
                                            "align",
                                            "fontSize",
                                            "formatBlock",
                                            "table",
                                            "image",
                                            "video",
                                            "audio"
                                        ]
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

export default CreatePost;