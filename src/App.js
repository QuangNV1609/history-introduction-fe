import { Route, Routes } from "react-router";
import './App.css';
import Login from './features/Login/Login';
import Home from './features/Home/Home';
import React from 'react'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
