import styles from './Period.module.scss';
import "../../assets/scss/base.scss";
import image from '../../resource/Hai-ba-trung-ha2.jpg';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import articleApi from '../../api/article';
import Parser from 'html-react-parser';
import { host } from '../../api/axiosClient';

const Period = () => {
    const [posts0, setPosts0] = useState([]);
    const [posts1, setPosts1] = useState([]);
    const post2 = [
        {
            eventType: 0,
            title: 'Tieu de so 1 Tieu de so 1 Tieu de so 1 Tieu de so 1 Tieu de so 1',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            content: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s  '
        },
        {
            eventType: 0,
            title: 'Tieu de so 2',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            content: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        },
        {
            eventType: 0,
            title: 'Tieu de so 3',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            content: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        },
        {
            eventType: 0,
            title: 'Tieu de so 4',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            content: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        },
        {
            eventType: 0,
            title: 'Tieu de so 5',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            content: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        },
        {
            eventType: 0,
            title: 'Tieu de so 6',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            content: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        },
        {
            eventType: 0,
            title: 'Tieu de so 7',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            content: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        },
        {
            eventType: 0,
            title: 'Tieu de so 4',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            content: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        },
        {
            eventType: 0,
            title: 'Tieu de so 5',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            content: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        },
        {
            eventType: 0,
            title: 'Tieu de so 6',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            content: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        },
        {
            eventType: 0,
            title: 'Tieu de so 7',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            content: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        },
        {
            eventType: 0,
            title: 'Tieu de so 4',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            content: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        },
        {
            eventType: 0,
            title: 'Tieu de so 5',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            content: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        },
        {
            eventType: 0,
            title: 'Tieu de so 6',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            content: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        },
        {
            eventType: 0,
            title: 'Tieu de so 7',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            content: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        },
        {
            eventType: 0,
            title: 'Tieu de so 4',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            content: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        },
        {
            eventType: 0,
            title: 'Tieu de so 5',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            content: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        },
        {
            eventType: 0,
            title: 'Tieu de so 6',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            content: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        },
        {
            eventType: 0,
            title: 'Tieu de so 7',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            content: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        }
    ]

    const fetchData = () => {
        articleApi.getPeriodPost(0)
            .then(res => {
                setPosts0(res.data);
            })

        articleApi.getPeriodPost(1)
            .then(res => {
                setPosts1(res.data);
            })
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        fetchData()
    }, [])

    const slice0 = posts0.slice(0, 3);
    const slice1 = posts1.slice(0, 3);

    const navigate = useNavigate();

    const loadMore = () => {
        navigate('/seeMore');
    }

    return (
        <div className={styles.main}>
            <div className={styles.heading}>
                <div className={styles.heading_link}>
                    <a href="/home">Trang chủ</a><span> / </span>
                    <a href="/period" className={styles.last_link}>Thời kỳ</a>
                </div>
                <div className={styles.heading_title}>
                    <span>Các Thời Kỳ Lịch Sử</span>
                </div>
            </div>
            <div className={styles.gradient_line}></div>
            <div className={styles.content}>
                <div className={styles.content_container}>
                    <div className={styles.event_title}>Thời kỳ tiền sử</div>
                    <div className={styles.content_list}>
                        {slice0.map((item, index) => {
                            return (
                                <div className={styles.post_items} key={index}>
                                    <div className={styles.img_container}>
                                        <img src={host + '/api/file/download/' + item.thumbnailImage} alt="post thumbnail" className={styles.post_items_img} />
                                    </div>
                                    <div className={styles.post_items_content}>
                                        <div className={styles.post_items_title}>{item.title}</div>
                                        <div className={styles.post_items_desc}>
                                            {Parser(item.content.substring(0, 230) + '...')}
                                        </div>
                                        <div>
                                            <a href='' className={styles.post_items_readmore}>
                                                Đọc thêm
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <span className={styles.see_more_btn} onClick={loadMore}>XEM THÊM</span>

                    <div className={styles.event_title}>Thời kỳ cổ đại</div>
                    <div className={styles.content_list}>
                        {slice1.map((item, index) => {
                            return (
                                <div className={styles.post_items} key={index}>
                                    <div className={styles.img_container}>
                                        <img src={host + '/api/file/download/' + item.thumbnailImage} alt="post thumbnail" className={styles.post_items_img} />
                                    </div>
                                    <div className={styles.post_items_content}>
                                        <div className={styles.post_items_title}>{item.title}</div>
                                        <div className={styles.post_items_desc}>
                                            {Parser(item.content.substring(0, 230) + '...')}
                                        </div>
                                        <div>
                                            <a href='' className={styles.post_items_readmore}>
                                                Đọc thêm
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <span className={styles.see_more_btn} onClick={loadMore}>XEM THÊM</span>
                </div>
            </div>
        </div>
    )
}

export default Period
