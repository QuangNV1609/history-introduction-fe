import styles from './HistoryDay.module.scss';
import { useEffect, useState } from 'react';
import image from '../../resource/gettyimages-1382828716.jpg';
import articleApi from '../../api/article';
import { useNavigate } from 'react-router-dom';
import { host } from '../../api/axiosClient';

const HistoryDay = () => {
    const postData = [
        {
            eventType: 'Thời kỳ tiền sử',
            title: 'More than 1,000 schoolchildren protest segregation in the Children’s Crusade',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            year: '1963'
        },
        {
            eventType: 'Thời kỳ tiền sử',
            title: 'Tieu de so 2',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            year: '2005'
        },
        {
            eventType: 'Thời kỳ tiền sử',
            title: 'Tieu de so 3',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            year: '2005'
        },
        {
            eventType: 'Thời kỳ tiền sử',
            title: 'Tieu de so 4',
            thumbnail: '../../resource/alone-s9-2048x1152-promo-16x9-1.jpg',
            year: '2005'
        }
    ]

    const [posts, setPosts] = useState([]);
    const [historyDay, setHistoryDay] = useState('');
    const [title, setTitle] = useState('Tiêu đề mặc định');
    const [yearPost, setYearPost] = useState('----');
    const [theme, setTheme] = useState('259');
    const [idPost, setIdPost] = useState('');
    const navigate = useNavigate();

    const fetchData = () => {
        articleApi.getHistoryDay(historyDay)
            .then((res) => {
                setPosts(res.data);
                setTitle((Object.keys(res.data).length > 0) ? (Object.values(res.data)[0].title) : 'Tiêu đề mặc định');
                setYearPost((Object.keys(res.data).length > 0) ? (Object.values(res.data)[0].historyDay) : '----');
                setTheme((Object.keys(res.data).length > 0) ? (Object.values(res.data)[0].coverImage) : '259');
                setIdPost((Object.keys(res.data).length > 0) ? (Object.values(res.data)[0].id) : '');
            })
    }
    console.log(typeof theme);

    const months = [
        { value: 'Thời kỳ tiền sử', label: 'Tháng Một' },
        { value: 1, label: 'Tháng Hai' },
        { value: 2, label: 'Tháng Ba' },
        { value: 3, label: 'Tháng Tư' },
        { value: 4, label: 'Tháng Năm' },
        { value: 5, label: 'Tháng Sáu' },
        { value: 6, label: 'Tháng Bảy' },
        { value: 7, label: 'Tháng Tám' },
        { value: 8, label: 'Tháng Chín' },
        { value: 9, label: 'Tháng Mười' },
        { value: 10, label: 'Tháng Mười Một' },
        { value: 11, label: 'Tháng Mười Hai' }
    ]

    var curr = new Date();
    curr.setDate(curr.getDate());
    var date = curr.toISOString().substring(0, 10);

    const [selectedDate, setSelectedDate] = useState(curr.getDate());
    const [selectedMonth, setSelectedMonth] = useState(months.map(item => {
        if (item.value === curr.getMonth()) {
            return item.label;
        }
    }));

    const onChangeDate = (e) => {
        setHistoryDay(e.target.value);
        var selectedDay = new Date(e.target.value);
        setSelectedDate(selectedDay.getDate());
        months.map(month => {
            if (month.value === selectedDay.getMonth()) {
                setSelectedMonth(month.label);
            }
        })
    }

    useEffect(() => {
        fetchData()
        window.scrollTo(0, 0)
    }, [historyDay]);

    const handlePostDetail = (e, id) => {
        navigate('/postDetail', { state: { idPost: id } });
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.header_left}>
                    <div className={styles.header_left_link}>
                        <a href="">Trang chủ</a>
                        <span> / </span>
                        <a href="" className={styles.last_link}>Ngày này trong lịch sử</a>
                    </div>
                    <div>
                    <p>Ngày Này Trong Lịch Sử</p>
                    </div>
                </div>
                <div className={styles.gradient_line}></div>
                <div className={styles.header_right}>
                    <div className={styles.header_date}>
                        <span className={styles.get_month}>{selectedMonth}</span>
                        <span>|</span>
                        <span className={styles.get_date}>{selectedDate}</span>
                    </div>
                    <div className={styles.date_input}>
                        <span>Chọn ngày khác</span>
                        <input
                            type="date"
                            defaultValue={date}
                            onChange={onChangeDate}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.primary_post}>
                <div className={styles.primary_post_theme}>
                    <img className={styles.theme_img} src={host + '/api/file/download/' + theme} alt="theme history post" />
                    <div className={styles.primary_post_container} onClick={e => handlePostDetail (e, parseInt(idPost))}>
                        <div className={styles.post_info}>
                            <div>
                                <span>{yearPost.substring(0,4)}</span>
                            </div>
                            <p>{title.substring(0,50)}...</p>
                            <div className={styles.line}></div>
                            <a href='' className={styles.read_more}>
                                Đọc thêm
                                <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                        <div className={styles.post_img}>
                            <img src={host + '/api/file/download/' + theme} alt="img history post" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.also_post}>
                <div className={styles.also_post_title}>Cũng vào Ngày Này Trong Lịch Sử
                    <span className={styles.separate}>|</span>
                    <span className={styles.get_date}>{selectedMonth}</span>
                    <span className={styles.separate_red}>|</span>
                    <span className={styles.get_date}>{selectedDate}</span>
                </div>
                <div className={styles.also_post_line}></div>
                <p>Khám phá những gì đã xảy ra vào ngày
                    <span> {selectedDate} {selectedMonth} </span>
                    với các bài viết khác của Lịch Sử Việt Nam về các <br /> sự kiện lớn, ngày kỉ niệm, tưởng nhớ và tri ân các anh hùng, liệt sỹ.
                </p>

                <div className={styles.another_posts}>
                    {postData.map((item, index) => {
                        return (
                            <div className={styles.post_items} key={index}>
                                <div className={styles.post_items_cover_img}>
                                    <img src={image} alt="img thumb" />
                                </div>
                                <div className={styles.post_items_info}>
                                    <span className={styles.post_items_years}>{item.year}</span>
                                    <p className={styles.post_items_title}>{item.title}</p>
                                    <a href='' className={styles.post_items_period}>
                                        <i className="fa-solid fa-bolt-lightning"></i>
                                        {item.eventType}
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default HistoryDay
