import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SalesPage from './components/sales-page/SalesPage';
import Tracking from './components/Tracking/Tracking';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diamantes/modo-escuro" element={<SalesPage />} />
        <Route path="/lp" element={<><Tracking /><SalesPage lightMode /></>} />
      </Routes>
    </Router>
  );
}

export default App;