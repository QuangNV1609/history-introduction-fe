import styles from './Period.module.scss';
import "../../assets/scss/base.scss";
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import articleApi from '../../api/article';
import Parser from 'html-react-parser';
import { host } from '../../api/axiosClient';

const Period = () => {
    const [posts0, setPosts0] = useState([]);
    const [posts1, setPosts1] = useState([]);
    const [posts2, setPosts2] = useState([]);
    const [posts3, setPosts3] = useState([]);
    const [posts4, setPosts4] = useState([]);
    const [posts5, setPosts5] = useState([]);
    const [posts6, setPosts6] = useState([]);
    const [posts7, setPosts7] = useState([]);
    const [posts8, setPosts8] = useState([]);
    const [posts9, setPosts9] = useState([]);
    const [posts10, setPosts10] = useState([]);
    const [posts11, setPosts11] = useState([]);
    const [posts12, setPosts12] = useState([]);

    const fetchData = () => {
        articleApi.getPeriodPost(0)
            .then(res => {
                setPosts0(res.data);
            })

        articleApi.getPeriodPost(1)
            .then(res => {
                setPosts1(res.data);
            })

        articleApi.getPeriodPost(2)
            .then(res => {
                setPosts2(res.data);
            })
        articleApi.getPeriodPost(3)
            .then(res => {
                setPosts3(res.data);
            })

        articleApi.getPeriodPost(4)
            .then(res => {
                setPosts4(res.data);
            })

        articleApi.getPeriodPost(5)
            .then(res => {
                setPosts5(res.data);
            })
        articleApi.getPeriodPost(6)
            .then(res => {
                setPosts6(res.data);
            })

        articleApi.getPeriodPost(7)
            .then(res => {
                setPosts7(res.data);
            })

        articleApi.getPeriodPost(8)
            .then(res => {
                setPosts8(res.data);
            })
        articleApi.getPeriodPost(9)
            .then(res => {
                setPosts9(res.data);
            })

        articleApi.getPeriodPost(10)
            .then(res => {
                setPosts10(res.data);
            })

        articleApi.getPeriodPost(11)
            .then(res => {
                setPosts11(res.data);
            })
            
        articleApi.getPeriodPost(12)
        .then(res => {
            setPosts12(res.data);
        })
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        fetchData()
    }, [])

    
    console.log(posts0);

    const slice0 = posts0.slice(0, 3);
    const slice1 = posts1.slice(0, 3);
    const slice2 = posts2.slice(0, 3);
    const slice3 = posts3.slice(0, 3);
    const slice4 = posts4.slice(0, 3);
    const slice5 = posts5.slice(0, 3);
    const slice6 = posts6.slice(0, 3);
    const slice7 = posts7.slice(0, 3);
    const slice8 = posts8.slice(0, 3);
    const slice9 = posts9.slice(0, 3);
    const slice10 = posts10.slice(0, 3);
    const slice11 = posts11.slice(0, 3);
    const slice12 = posts12.slice(0, 3);

    const navigate = useNavigate();

    const loadMore = (e, value) => {
        navigate('/seeMore', { state: { idPeriod: value } });
    }
    
    const handlePostDetail = (e, id) => {
        navigate('/postDetail', { state: { idPost: id } });
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
                                <div className={styles.post_items} key={index} onClick={e => handlePostDetail(e, item.id)}>
                                    <div className={styles.img_container}>
                                        <img src={host + '/api/file/download/' + item.thumbnailImage} alt="post thumbnail" className={styles.post_items_img} />
                                    </div>
                                    <div className={styles.post_items_content}>
                                        <div className={styles.post_items_title}>{item.title}</div>
                                        <div className={styles.post_items_desc}>
                                            {Parser(item.content?.substring(0, 230) + '...')}
                                        </div>
                                        <div>
                                            <a className={styles.post_items_readmore}>
                                                Đọc thêm
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <span className={styles.see_more_btn} onClick={e => loadMore(e, 0)}>XEM THÊM</span>

                    <div className={styles.event_title}>Thời kỳ cổ đại</div>
                    <div className={styles.content_list}>
                        {slice1.map((item, index) => {
                            return (
                                <div className={styles.post_items} key={index} onClick={e => handlePostDetail(e, item.id)}>
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
                    <span className={styles.see_more_btn} onClick={e => loadMore(e, 1)}>XEM THÊM</span>

                    <div className={styles.event_title}>Thời kỳ Bắc Thuộc</div>
                    <div className={styles.content_list}>
                        {slice2.map((item, index) => {
                            return (
                                <div className={styles.post_items} key={index} onClick={e => handlePostDetail(e, item.id)}>
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
                    <span className={styles.see_more_btn} onClick={e => loadMore(e, 2)}>XEM THÊM</span>

                    <div className={styles.event_title}>Thời kỳ Bắc Thuộc lần thứ III</div>
                    <div className={styles.content_list}>
                        {slice3.map((item, index) => {
                            return (
                                <div className={styles.post_items} key={index} onClick={e => handlePostDetail(e, item.id)}>
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
                    <span className={styles.see_more_btn} onClick={e => loadMore(e, 3)}>XEM THÊM</span>

                    <div className={styles.event_title}>Thời kỳ tự chủ</div>
                    <div className={styles.content_list}>
                        {slice4.map((item, index) => {
                            return (
                                <div className={styles.post_items} key={index} onClick={e => handlePostDetail(e, item.id)}>
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
                    <span className={styles.see_more_btn} onClick={e => loadMore(e, 4)}>XEM THÊM</span>

                    <div className={styles.event_title}>Thời kỳ quân chủ</div>
                    <div className={styles.content_list}>
                        {slice5.map((item, index) => {
                            return (
                                <div className={styles.post_items} key={index} onClick={e => handlePostDetail(e, item.id)}>
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
                    <span className={styles.see_more_btn} onClick={e => loadMore(e, 5)}>XEM THÊM</span>

                    <div className={styles.event_title}>Thời kỳ Bắc Thuộc lần thứ IV</div>
                    <div className={styles.content_list}>
                        {slice6.map((item, index) => {
                            return (
                                <div className={styles.post_items} key={index} onClick={e => handlePostDetail(e, item.id)}>
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
                    <span className={styles.see_more_btn} onClick={e => loadMore(e, 6)}>XEM THÊM</span>

                    <div className={styles.event_title}>Thời kỳ Trung Hưng - Nhà Hậu Lê</div>
                    <div className={styles.content_list}>
                        {slice7.map((item, index) => {
                            return (
                                <div className={styles.post_items} key={index} onClick={e => handlePostDetail(e, item.id)}>
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
                    <span className={styles.see_more_btn} onClick={e => loadMore(e, 7)}>XEM THÊM</span>

                    <div className={styles.event_title}>Thời kỳ chia cắt</div>
                    <div className={styles.content_list}>
                        {slice8.map((item, index) => {
                            return (
                                <div className={styles.post_items} key={index} onClick={e => handlePostDetail(e, item.id)}>
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
                    <span className={styles.see_more_btn} onClick={e => loadMore(e, 8)}>XEM THÊM</span>

                    <div className={styles.event_title}>Thời kỳ Bắc Triều - Nam Triều</div>
                    <div className={styles.content_list}>
                        {slice9.map((item, index) => {
                            return (
                                <div className={styles.post_items} key={index} onClick={e => handlePostDetail(e, item.id)}>
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
                    <span className={styles.see_more_btn} onClick={e => loadMore(e, 9)}>XEM THÊM</span>

                    <div className={styles.event_title}>Thời kỳ Trịnh - Nguyễn</div>
                    <div className={styles.content_list}>
                        {slice10.map((item, index) => {
                            return (
                                <div className={styles.post_items} key={index} onClick={e => handlePostDetail(e, item.id)}>
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
                    <span className={styles.see_more_btn} onClick={e => loadMore(e, 10)}>XEM THÊM</span>

                    <div className={styles.event_title}>Thời kỳ thống nhất</div>
                    <div className={styles.content_list}>
                        {slice11.map((item, index) => {
                            return (
                                <div className={styles.post_items} key={index} onClick={e => handlePostDetail(e, item.id)}>
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
                    <span className={styles.see_more_btn} onClick={e => loadMore(e, 11)}>XEM THÊM</span>

                    <div className={styles.event_title}>Thời kỳ hiện đại</div>
                    <div className={styles.content_list}>
                        {slice12.map((item, index) => {
                            return (
                                <div className={styles.post_items} key={index} onClick={e => handlePostDetail(e, item.id)}>
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
                    <span className={styles.see_more_btn} onClick={e => loadMore(e, 12)}>XEM THÊM</span>
                </div>
            </div>
        </div>
    )
}

export default Period
