// src/components/layout/MainLayout.js
import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import { subWeeks, startOfWeek } from 'date-fns';

function MainLayout() {
  const location = useLocation();
  const [selectedDate, setSelectedDate] = useState(startOfWeek(subWeeks(new Date(), 1), { weekStartsOn: 5 })); // Default to previous week
  const [sidebarWidth, setSidebarWidth] = useState(250); // Sidebar width state

  // Determine whether to show the sidebar based on the current path
  const showSidebar = location.pathname !== '/';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header at the top */}
      <Header />
      
      {/* Sidebar and Main content below the header */}
      <div style={{ display: 'flex', flexGrow: 1 }}>
        {/* Sidebar */}
        {showSidebar && (
          <div style={{ width: `${sidebarWidth}px`, flexShrink: 0, transition: 'width 0.3s ease' }}>
            <Sidebar selectedDate={selectedDate} setSelectedDate={setSelectedDate} setSidebarWidth={setSidebarWidth} sidebarWidth={sidebarWidth} />
          </div>
        )}
        {/* Main Content */}
        <div style={{ flexGrow: 1, padding: '20px', backgroundColor: '#f9f9f9', transition: 'width 0.3s ease' }}>
          <Outlet context={[selectedDate, setSelectedDate]} />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
