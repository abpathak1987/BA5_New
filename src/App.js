import React from 'react';
import CareersPage from './pages/CareersPage/CareersPage';
import './global.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<CareersPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;