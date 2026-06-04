import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./About"; 
import Portfolio from "./Portfolio"; 
import Home from "./pages/Home"
import Layout from "./components/Layout"
import Contact from "./Contact"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />     
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
