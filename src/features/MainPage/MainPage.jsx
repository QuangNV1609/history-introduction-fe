import { Route, Routes } from "react-router";
import Header from "../HeaderAdmin2/HeaderAdmin2";
import Footer from "../Footer/Footer";
import Home from "../HomePage/HomePage";
import HistoryDay from "../HistoryDay/HistoryDay";
import Figure from "../Figure/Figure";
import Period from "../Period/Period";
import Qa from "../Qa/Qa";
import SeeMore from "../SeeMore/SeeMore";
import SearchPage from "../SearchPage/SearchPage";
import ApprovePost from "../ApprovePost/ApprovePost";
import MyCreatePost from "../MyCreatePost/MyCreatePost";
import { useState } from "react";

const MainPage = () => {
    const jwt = window.localStorage.getItem('jwtToken');
    console.log(jwt);
    const [inputSearch, setInputSearch] = useState('');

    const getDataSearch = (value) => {
        setInputSearch(value);
    }

    return (
        <div>
            <Header userToken={jwt} dataSearch={getDataSearch}></Header>
            <Routes>
                <Route path="/" element={<Home inputSearch={inputSearch} />}></Route>
                <Route path="/home" element={<Home inputSearch={inputSearch} />}></Route>
                <Route path="/historyDay" element={<HistoryDay />}></Route>
                <Route path="/period" element={<Period />}></Route>
                <Route path="/figure" element={<Figure />}></Route>
                <Route path="/qa" element={<Qa />}></Route>
                <Route path="/seeMore" element={<SeeMore />}></Route>
                <Route path="/searchPage" element={<SearchPage />}></Route>
                <Route path="/approvePost" element={<ApprovePost />}></Route>
                <Route path="/myCreatePost" element={<MyCreatePost />}></Route>
            </Routes>
            {/* <Footer></Footer> */}
        </div>
    )
}

export default MainPage
