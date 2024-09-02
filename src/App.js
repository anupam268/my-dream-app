// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import IncidentPage from './pages/IncidentPage';
import WeeklyReview from './pages/WeeklyReview';
import HomePage from './pages/HomePage'; // HomePage without a sidebar
import Login from './pages/Login';

function App() {
  const isAuthenticated = localStorage.getItem('authenticated') === 'true';

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={isAuthenticated ? <MainLayout /> : <Navigate to="/login" />}
        >
          <Route path="/" element={<HomePage />} /> {/* HomePage without Sidebar */}
          <Route path="/weekly-review" element={<WeeklyReview />} /> {/* WeeklyReview with Sidebar */}
          <Route path="/weekly-review/incidents/24070284" element={<IncidentPage />} /> {/* IncidentPage with Sidebar */}
        </Route>
        <Route path="*" element={<Navigate to={isAuthenticated ? '/' : '/login'} />} />
      </Routes>
    </Router>
  );
}

export default App;
