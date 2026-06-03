import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroSection from "./About"; 
import Portfolio from "./Portfolio"; 
import Contact from "./Contact"; 

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <main style={{ marginTop: '0px' }}> 
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<HeroSection />} />
          <Route path="/portfolio" element={<Portfolio />} /> 
          <Route path="/contact" element={<Contact />} /> {/* تأكدي أن هذا السطر موجود */}
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;