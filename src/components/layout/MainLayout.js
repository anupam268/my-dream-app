import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import { subWeeks, startOfWeek, getISOWeek, getYear } from 'date-fns';

function MainLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // Get week and year from URL or default to the previous week
  const urlWeek = searchParams.get('week');
  const urlYear = searchParams.get('year');

  const defaultDate = startOfWeek(subWeeks(new Date(), 1), { weekStartsOn: 5 });
  const initialDate = urlWeek && urlYear
    ? new Date(urlYear, 0, 1 + (urlWeek - 1) * 7)
    : defaultDate;

  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [sidebarWidth, setSidebarWidth] = useState(250);

  // Update URL whenever selectedDate changes
  useEffect(() => {
    const week = getISOWeek(selectedDate);
    const year = getYear(selectedDate);
    setSearchParams({ week, year });
  }, [selectedDate, setSearchParams]);

  const showSidebar = location.pathname !== '/';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ display: 'flex', flexGrow: 1 }}>
        {showSidebar && (
          <div style={{ width: `${sidebarWidth}px`, flexShrink: 0, transition: 'width 0.3s ease' }}>
            <Sidebar selectedDate={selectedDate} setSelectedDate={setSelectedDate} setSidebarWidth={setSidebarWidth} sidebarWidth={sidebarWidth} />
          </div>
        )}
        <div style={{ flexGrow: 1, padding: '20px', backgroundColor: '#f9f9f9', transition: 'width 0.3s ease' }}>
          <Outlet context={[selectedDate, setSelectedDate]} />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
