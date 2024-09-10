import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OFKPage from './pages/OFKPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/OFKPage" element={<OFKPage />} />
      </Routes>
    </Router>
  );
}

export default App;
