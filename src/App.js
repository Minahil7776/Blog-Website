import React,{useState} from 'react';
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import Sign from './screens/Sign';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Create from './screens/Create';

function App() {
  return (
    <Router>
      <div>
      <Routes>
        {/* Route of home */}
        <Route exect path = "/Home" element={<Home/>}></Route>
        {/* Route of Login */}
        <Route exect path = "/Login" element = {<Login/>}></Route>
        <Route exect path = "/" element = {<Login/>}></Route>
        {/* Route of SignUp */}
        <Route exect path = "/SignUp" element = {<Sign/>}></Route>
        {/* Route of create-blog-btn */}
        <Route exect path = "/create" element = {<Create/>}></Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
