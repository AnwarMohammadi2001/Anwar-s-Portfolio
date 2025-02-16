import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Gallary from "./pages/Gallary";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="bg-gray-200">
      <Router>
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
      </Router>
    </div>
  );
};

export default App;
