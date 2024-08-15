import React from "react";
import "./App.css";
import "./firebaseConfig";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Principal from "./pages/Principal";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Usuario from "./pages/Usuario";
import Cart from "./pages/CartPage";
import Product from "./pages/Product";
import SuccessMessageP from "./pages/Success.js";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Principal />}></Route>
        <Route path="/login" exact element={<Login />}></Route>
        <Route path="/cadastro" exact element={<Cadastro />}></Route>
        <Route path="/profile" exact element={<Usuario />}></Route>
        <Route path="/cart" exact element={<Cart />}></Route>
        <Route path="/product" exact element={<Product />}></Route>
        <Route path="/success" exact element={<SuccessMessageP />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
