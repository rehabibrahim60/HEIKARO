import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/about";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home"
import Layout from "./components/Layout"
import Contact from "./pages/Contact"
import MediaProduction from "./pages/MediaProduction";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import DesignExperience from "./pages/DesignExperience";
import ContentAndStorytelling from "./pages/ContentAndStorytelling";
import MarketingGrowth from "./pages/MarketingGrowth";
import DigitalLearning from "./pages/DigitalLearning";
import AiPowerd from "./pages/AiPowerd";
import EventsExperiential from "./pages/EventsExperiential";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services/media-production" element={<MediaProduction />} />
          <Route path="/services/digital-learning" element={<DigitalLearning />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/design-experience" element={<DesignExperience />} />
          <Route path="/services/ai-video-cgi" element={<AiPowerd />} />
          <Route path="/services/events-experiential" element={<EventsExperiential />} />
          <Route path="/services/brand-identity" element={<ServiceDetail />} />
          <Route path="/services/content-storytelling" element={<ContentAndStorytelling />} />
          <Route path="/services/marketing-growth" element={<MarketingGrowth />} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}
