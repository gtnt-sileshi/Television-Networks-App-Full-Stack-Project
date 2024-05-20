// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'; // Create Dashboard component

import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
