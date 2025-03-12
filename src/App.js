// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import IncidentPage from './pages/IncidentPage';
import WeeklyReview from './pages/WeeklyReview';
import AddIncident from './pages/AddIncident';
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
          <Route path="/" element={<WeeklyReview />} />
          <Route path="/weekly-review" element={<WeeklyReview />} />
          <Route path="/weekly-review/incidents/:id" element={<IncidentPage />} />
          <Route path="/add-incident" element={<AddIncident />} /> {/* Add Incident Route */}
        </Route>
        <Route path="*" element={<Navigate to={isAuthenticated ? '/' : '/login'} />} />
      </Routes>
    </Router>
  );
    }

export default App;
