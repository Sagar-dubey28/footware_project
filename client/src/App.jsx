import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import New from "./pages/new";
import Men from "./pages/men";
import Women from "./pages/women";
import Kids from "./pages/kids";
import Sale from "./pages/sale";
import Signup from "./pages/signup";
import Footer from "./components/footer";
import Home from "./components/home";
import Login from "./pages/login";


function App() {
  return (
    <>
      <Router>
        <header>
          <Header />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/New" element={<New />} />
            <Route path="/Men" element={<Men />} />
            <Route path="/Women" element={<Women />} />
            <Route path="/Kids" element={<Kids />} />
            <Route path="/Sale" element={<Sale />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup/>} />
          </Routes>
        </main>

        <footer>
           <Footer/>
        </footer>
      </Router>
    </>
  );
}

export default App;
