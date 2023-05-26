import { Route, Routes } from "react-router";
import Header from "../HeaderAdmin2/HeaderAdmin2";
import Home from "../HomePage/HomePage";
import HistoryDay from "../HistoryDay/HistoryDay";
import Figure from "../Figure/Figure";
import Period from "../Period/Period";
import styles from "../HomePage/HomePage.module.scss"
import Qa from "../Qa/Qa";
import SeeMore from "../SeeMore/SeeMore";
import ApprovePost from "../ApprovePost/ApprovePost";
import MyCreatePost from "../MyCreatePost/MyCreatePost";
import CreatePost from "../CreatePost/CreatePost";
import MyProfile from "../MyProfile/MyProfile";
import PostDetail from "../PostDetail/PostDetail";
import EditPost from "../EditPost/EditPost";
import RecentWatched from "../RecentWatched/RecentWatched";
import { useState } from "react";
import { host } from "../../api/axiosClient";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import articleApi from '../../api/article';

const MainPage = () => {
    const [input, setInput] = useState();
    const [results, setResults] = useState([]);
    const navigate = useNavigate();

    const getInputValue = (value) => {
        setInput(value);
    }

    const handlePostDetail = (e, id) => {
        navigate('/postDetail', { state: { idPost: id } });
    }

    const fetchSearchData = (value) => {
        fetch(`${host}` + `/api/article/search-article`)
            .then((response) => response.json())
            .then((json) => {
                const results = json.filter((post) => {
                    return value && post && post.title && post.title.toLowerCase().includes(value);
                });
                setResults(results);
            });
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        fetchSearchData(input);
    }, [input])

    return (
        <div className={styles.home_container}>
            <Header getInputValue={getInputValue}></Header>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/historyDay" element={<HistoryDay />}></Route>
                <Route path="/period" element={<Period />}></Route>
                <Route path="/figure" element={<Figure />}></Route>
                <Route path="/qa" element={<Qa />}></Route>
                <Route path="/seeMore" element={<SeeMore />}></Route>
                <Route path="/approvePost" element={<ApprovePost />}></Route>
                <Route path="/myCreatePost" element={<MyCreatePost />}></Route>
                <Route path="/postDetail" element={<PostDetail />}></Route>
                <Route path="/createPost" element={<CreatePost />}></Route>
                <Route path="/myProfile" element={<MyProfile />}></Route>
                <Route path="/editPost" element={<EditPost />}></Route>
                <Route path="/recentWatched" element={<RecentWatched />}></Route>
            </Routes>

            {(input !== undefined && input !== '') && (
                <div className={styles.search_result_container}>
                    <div className={styles.search_suggestion_container}>
                        <span className={styles.suggestion_label}>
                            Khám phá những bài viết liên quan đến:
                        </span>
                        <ul className={styles.suggestion_list}>
                            {results.map((item, index) => {
                                return (
                                    <li className={styles.suggestion_item} key={index}>
                                        <a href="" onClick={(e) => handlePostDetail(e, item.id)}>{item.title.substring(0, 40)}...</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className={styles.result_article_container}>
                        {results.map((item, index) => {
                            return (
                                <a href="" className={styles.result_article_items} key={index} onClick={(e) => handlePostDetail(e, item.id)}>
                                    <div className={styles.img_container}>
                                        <img src={host + '/api/file/download/' + item.thumbnailImage} alt="post thumbnail" className={styles.article_items_img} />
                                    </div>
                                    <div className={styles.article_items_title}>{item.title}</div>
                                </a>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}

export default MainPage
