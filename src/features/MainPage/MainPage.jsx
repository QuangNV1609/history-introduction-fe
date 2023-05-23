import { Route, Routes } from "react-router";
import Header from "../HeaderAdmin2/HeaderAdmin2";
import Home from "../HomePage/HomePage";
import HistoryDay from "../HistoryDay/HistoryDay";
import Figure from "../Figure/Figure";
import Period from "../Period/Period";
import Qa from "../Qa/Qa";
import SeeMore from "../SeeMore/SeeMore";
import SearchPage from "../SearchPage/SearchPage";
import ApprovePost from "../ApprovePost/ApprovePost";
import MyCreatePost from "../MyCreatePost/MyCreatePost";
import CreatePost from "../CreatePost/CreatePost";
import MyProfile from "../MyProfile/MyProfile";
import PostDetail from "../PostDetail/PostDetail";
import EditPost from "../EditPost/EditPost";
import RecentWatched from "../RecentWatched/RecentWatched";
import { useState } from "react";

const MainPage = () => {
    const [input, setInput] = useState();

    const getInputValue = (value) => {
        setInput(value);
    }

    return (
        <div>
            <Header getInputValue={getInputValue}></Header>
            <Routes>
                <Route path="/" element={<Home input={input} />}></Route>
                <Route path="/home" element={<Home input={input} />}></Route>
                <Route path="/historyDay" element={<HistoryDay />}></Route>
                <Route path="/period" element={<Period />}></Route>
                <Route path="/figure" element={<Figure />}></Route>
                <Route path="/qa" element={<Qa />}></Route>
                <Route path="/seeMore" element={<SeeMore />}></Route>
                <Route path="/searchPage" element={<SearchPage />}></Route>
                <Route path="/approvePost" element={<ApprovePost />}></Route>
                <Route path="/myCreatePost" element={<MyCreatePost />}></Route>
                <Route path="/postDetail" element={<PostDetail />}></Route>
                <Route path="/createPost" element={<CreatePost />}></Route>
                <Route path="/myProfile" element={<MyProfile />}></Route>
                <Route path="/editPost" element={<EditPost />}></Route>
                <Route path="/recentWatched" element={<RecentWatched />}></Route>
            </Routes>
            {/* <Footer></Footer> */}
        </div>
    )
}

export default MainPage
