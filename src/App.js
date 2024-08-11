import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Principal from "./pages/Principal";
import Login from "./pages/Login";
import "./firebaseConfig";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Principal />}></Route>
        <Route path="/login" exact element={<Login />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
