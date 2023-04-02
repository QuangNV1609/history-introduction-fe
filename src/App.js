import { Route, Routes } from "react-router";
import style from './App.module.scss';
import Login from './features/Login/Login';
import MainPage from "./features/MainPage/MainPage";
import ManageAccount from "./features/Manage/ManageAccount";
import CreatePost from "./features/CreatePost/CreatePost";
import PostDetail from "./features/PostDetail/PostDetail";
import HomePage from "./features/HomePage/HomePage";
import React from 'react'
import { useState } from "react";

function App() {
  const [isShowLoading, setShowLoading] = useState(false)

  function showLoading(isShow) {
    if (isShow) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    setShowLoading(true)
  }


  return (
    <>
      <div className={style.loading_container}>
        <Routes onUpdate={() => window.scrollTo(0, 0)>
          <Route path="/*" element={<MainPage />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/createPost" element={<CreatePost />}></Route>
          <Route path="/admin" element={<ManageAccount showLoading={(isShow) => showLoading(isShow)} />}/>
        </Routes>
        {
          isShowLoading &&
          <div className={style.loading}>
            <div className={style.loader} />
          </div>
        }
      </div>
    </>
  );
}

export default App;
