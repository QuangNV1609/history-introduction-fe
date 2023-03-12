import React from 'react'
import HomeItem from './HomeItem/HomeItem'
import sample from '../../resource/sample.svg'
import "./Home.scss"

const Home = () => {
    return (
        <div className="home">
<<<<<<< HEAD
            Home page QuangNV
=======
            <h1>BÀI VIẾT MỚI NHẤT</h1>
            <div className='home-line' />
            <div className="home-content">
                <HomeItem image={sample} title="Tiêu đề" />
                <HomeItem image={sample} title="Tiêu đề" />
                <HomeItem image={sample} title="Tiêu đề" />
                <HomeItem image={sample} title="Tiêu đề" />
                <HomeItem image={sample} title="Tiêu đề" />
                <HomeItem image={sample} title="Tiêu đề" />
            </div>
            <span className="home-more">XEM THÊM</span>
            <h1>XEM NHIỀU NHẤT</h1>
            <div className='home-line' />
            <div className="home-content">
                <HomeItem image={sample} title="Tiêu đề" />
                <HomeItem image={sample} title="Tiêu đề" />
                <HomeItem image={sample} title="Tiêu đề" />
                <HomeItem image={sample} title="Tiêu đề" />
                <HomeItem image={sample} title="Tiêu đề" />
                <HomeItem image={sample} title="Tiêu đề" />
            </div>
            <span className="home-more">XEM THÊM</span>
>>>>>>> 69302bb475caf2c2b4ce94f65b5f4ef1563775de
        </div>
    )
}

export default Home;