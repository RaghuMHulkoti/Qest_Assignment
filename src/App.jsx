import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router and Routes
import Header from './components/Header';
import Home from './Pages/Home';
import Pricing from './Pages/Pricing'; // Import Pricing component
import Footer from './components/Footer';
import './App.css';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router> 
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
