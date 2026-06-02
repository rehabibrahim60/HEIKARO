import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroSection from "./About"; 
import Portfolio from "./Portfolio"; 

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <main style={{ marginTop: '0px' }}> 
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<HeroSection />} />
          {/* ضيفي السطر ده عشان صفحة البورتفوليو تظهر */}
          <Route path="/portfolio" element={<Portfolio />} /> 
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;