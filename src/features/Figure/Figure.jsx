import styles from './Figure.module.scss';
import { useState } from 'react';
import image from '../../resource/Hai-ba-trung-ha2.jpg';
import { useEffect } from 'react';


const Figure = () => {
    const posts = [
        {
            eventType: 0,
            title: 'Quốc tổ Hùng Vương',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            describe: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        },
        {
            eventType: 0,
            title: 'Hai Bà Trưng',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            describe: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        },
        {
            eventType: 0,
            title: 'Lý Nam Đế - Lý Bí',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            describe: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        },
        {
            eventType: 0,
            title: 'Ngô Quyền',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            describe: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        },
        {
            eventType: 0,
            title: 'Đinh Bộ Lĩnh',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            describe: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        },
        {
            eventType: 0,
            title: 'Lê Hoàn',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            describe: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        },
        {
            eventType: 0,
            title: 'Lý Công Uẩn',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            describe: 'Con người xuất hiện từ khoảng từ 10.000 - 30.000 năm về trước, với các dấu tích của nền văn hóa núi Đọ, Thần Sa và Sơn Vi. Thời đại đồ đá cũ được đặc trưng bằng việc s...'
        }
    ]
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    const [numOfElement, setNumOfElement] = useState(3);
    const slice = posts.slice(0, numOfElement);

    const loadMore = () => {
        setNumOfElement(numOfElement + numOfElement);
    }

    return (
        <div className={styles.main}>
            <div className={styles.heading}>
                <div className={styles.heading_link}>
                    <a href="">Trang chủ</a><span> / </span>
                    <a href="" className={styles.last_link}>Nhân vật</a>
                </div>
                <div className={styles.heading_title}>
                    <span>Các Nhân Vật Lịch Sử</span>
                </div>
            </div>
            <div className={styles.gradient_line}></div>
            <div className={styles.content}>
                <div className={styles.content_container}>
                    <div className={styles.character_title}>Các anh hùng dân tộc</div>
                    <div className={styles.content_list}>
                        {slice.map((item, index) => {
                            return (
                                <div className={styles.post_items} key={index}>
                                    <img src={image} alt="post thumbnail" className={styles.post_items_img}/>
                                    <div className={styles.post_items_content}>
                                        <div className={styles.post_items_title}>{item.title}</div>
                                        <p className={styles.post_items_desc}>{item.describe.substring(0, 165)}...</p>
                                        <a href='' className={styles.post_items_readmore}>
                                            Read more
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </a>
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

export default Figure
