// src/components/layout/MainLayout.js
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

function MainLayout() {
  const location = useLocation();

  // Determine whether to show the sidebar based on the current path
  const showSidebar = location.pathname !== '/';

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {showSidebar && <Sidebar width={250} selectedDate={new Date()} />}
      <div style={{ flexGrow: 1 }}>
        <Header />
        <main style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
