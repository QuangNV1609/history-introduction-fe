import { Route, Routes } from "react-router";
import './App.css';
import Login from './features/Login/Login';
import MainPage from "./features/MainPage/MainPage";
import React from 'react'

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<MainPage />}></Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
