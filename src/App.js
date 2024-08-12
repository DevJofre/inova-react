import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Principal from "./pages/Principal";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

import "./firebaseConfig";
import Usuario from "./pages/Usuario";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Principal />}></Route>
        <Route path="/login" exact element={<Login />}></Route>
        <Route path="/cadastro" exact element={<Cadastro />}></Route>
        <Route path="/profile" exact element={<Usuario />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
