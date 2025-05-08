import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Docs from './pages/Docs';
import ComponentsPage from './pages/ComponentsPage';
import Template from './pages/Template';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Features />
            <Testimonials />
          </>
        } />
        <Route path="/docs" element={<Docs />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/template" element={<Template />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
