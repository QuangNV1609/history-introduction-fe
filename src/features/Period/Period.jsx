import styles from './Period.module.scss';
import image from '../../resource/gettyimages-1382828716.jpg';
import "../../assets/scss/base.scss";
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import articleApi from '../../api/article';
// import { Markup } from 'interweave';

const Period = () => {
    const [posts, setPosts] = useState([]);

    const postss = [
        {
            eventType: 0,
            title: 'Tieu de so 1',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            describe: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        },
        {
            eventType: 0,
            title: 'Tieu de so 2',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            describe: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        },
        {
            eventType: 0,
            title: 'Tieu de so 3',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            describe: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        },
        {
            eventType: 0,
            title: 'Tieu de so 4',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            describe: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        },
        {
            eventType: 0,
            title: 'Tieu de so 5',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            describe: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        },
        {
            eventType: 0,
            title: 'Tieu de so 6',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            describe: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        },
        {
            eventType: 0,
            title: 'Tieu de so 7',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            describe: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        }
    ]

    const fetchData = () => {
        articleApi.getPeriodPost(0)
            .then(res => {
                setPosts(res.data);
            })
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        fetchData()
    }, [])

    const [numOfElement, setNumOfElement] = useState(3);
    const slice = posts.slice(0, numOfElement);
    const navigate = useNavigate();

    const loadMore = () => {
        // setNumOfElement(numOfElement + numOfElement);
        navigate('/seeMore');
    }
    console.log(posts);

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
                        {slice.map((item, index) => {
                            return (
                                <div className={styles.post_items} key={index}>
                                    <img src={image} alt="post thumbnail" className={styles.post_items_img} />
                                    <div className={styles.post_items_content}>
                                        <div>
                                        <div className={styles.post_items_title}>{item.title}</div>
                                        <div className={styles.post_items_desc}>
                                            {/* <div dangerouslySetInnerHTML={{ __html: item.content }}></div> */}
                                            {/* <Markup content={item.content} /> */}
                                        </div>
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
