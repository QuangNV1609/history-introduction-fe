import styles from './SeeMore.module.scss';
import image from '../../resource/Hai-ba-trung-ha2.jpg';
import { useEffect, useState } from 'react';
import Pagination from '../Pagination/Pagination';

const SeeMore = () => {
    const posts = [
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

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(12);

    
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPostData = posts.slice(firstPostIndex, lastPostIndex);

    return(
        <div className={styles.main}>
            <div className={styles.heading}>
                <div className={styles.heading_link}>
                    <a href="/home">Trang chủ</a><span> / </span>
                    <a href="/period">Thời kỳ</a><span> / </span> 
                    <a href="#" className={styles.last_link}>Tên Thời Kỳ</a>
                </div>
                <div className={styles.heading_title}>
                    <span>Tên Thời Kỳ</span>
                </div>
            </div>
            <div className={styles.gradient_line}></div>
            <div className={styles.content}>
                <div className={styles.content_container}>
                    <div className={styles.event_title}>Thời kỳ tiền sử</div>
                    <div className={styles.content_list}>
                        {currentPostData.map((item, index) => {
                            return (
                                <div className={styles.post_items} key={index}>
                                    <img src={image} alt="post thumbnail" className={styles.post_items_img}/>
                                    <div className={styles.post_items_content}>
                                        <div className={styles.post_items_title}>{item.title}</div>
                                        <p className={styles.post_items_desc}>{item.describe.substring(0, 165)}...</p>
                                        <a href='' className={styles.post_items_readmore}>
                                            Đọc thêm
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className={styles.line}></div>

                    <Pagination
                        totalPosts={posts.length}
                        postsPerPage={postsPerPage}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                        lastPage={Math.ceil(posts.length / postsPerPage)}
                    />
                </div>
            </div>
        </div>
    )
}

export default SeeMore