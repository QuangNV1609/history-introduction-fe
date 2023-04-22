import { Route, Routes } from "react-router";
import Header from "../HeaderAdmin2/HeaderAdmin2";
import Footer from "../Footer/Footer";
import Home from "../HomePage/HomePage";
import HistoryDay from "../HistoryDay/HistoryDay";
import Figure from "../Figure/Figure";
import Period from "../Period/Period";
import Qa from "../Qa/Qa";

const MainPage = () => {
    const jwt = window.localStorage.getItem('jwtToken');
    console.log(jwt);

    return (
        <div>
            <Header userToken={jwt}></Header>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/historyDay" element={<HistoryDay />}></Route>
                <Route path="/period" element={<Period />}></Route>
                <Route path="/figure" element={<Figure />}></Route>
                <Route path="/qa" element={<Qa />}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    )
}

export default MainPage
