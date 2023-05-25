import { Route, Routes } from "react-router";
import './App.css';
import Login from './features/Login/Login';
import MainPage from "./features/MainPage/MainPage";
import HomePage from "./features/HomePage/HomePage";
import React from 'react'

function App() {
  return (
    <>
      <Routes onUpdate={() => window.scrollTo(0, 0)} >
        <Route path="/*" element={<MainPage />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/homePage" element={<HomePage />}></Route>
      </Routes>
      
    </>
  );
}

export default App;