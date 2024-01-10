import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Produit from './pages/Produit';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/produit" element={<Produit />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;