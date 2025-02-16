import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/layout/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Gallary from "@/pages/Gallary";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";

const routes = () => {
  return <Router>
    <Routes>
    <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/gallary" element={<Gallary />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
    </Routes>

  </Router>;
};

export default routes;
