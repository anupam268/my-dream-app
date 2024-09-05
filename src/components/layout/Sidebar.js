// src/components/layout/Sidebar.js
import React, { useState } from 'react';
import { List, ListItem, ListItemText, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import Draggable from 'react-draggable';  // For resizable sidebar
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { getISOWeek, startOfWeek } from 'date-fns';
import { incidents } from '../../data/data';  // Importing incidents

function Sidebar({ selectedDate, setSelectedDate, setSidebarWidth, sidebarWidth }) {
  const [openPlatformIncidents, setOpenPlatformIncidents] = useState(true);  // Toggle for "Platform Incidents"
  const [openPriority, setOpenPriority] = useState({
    P0: false,  // Default closed, will only show if P0 exists
    P1: true,
    P2: true,
  });

  const currentWeekNumber = getISOWeek(selectedDate);

  // Filter incidents for the selected week
  const filteredIncidents = incidents.filter(incident => {
    const incidentWeek = getISOWeek(new Date(incident.openDate));
    return incidentWeek === currentWeekNumber;
  });

  // Group incidents by priority
  const priorities = { P1: [], P2: [] };
  let hasP0 = false;
  filteredIncidents.forEach(incident => {
    if (incident.priority === 'P0') {
      hasP0 = true;
    }
    priorities[incident.priority] = [...(priorities[incident.priority] || []), incident];
  });

  // Toggle "Platform Incidents"
  const handlePlatformToggle = () => {
    setOpenPlatformIncidents(!openPlatformIncidents);
  };

  // Toggle for each priority
  const handleTogglePriority = (priority) => {
    setOpenPriority((prev) => ({ ...prev, [priority]: !prev[priority] }));
  };

  // Handle week selection
  const handleWeekSelect = (date) => {
    const newWeekStart = startOfWeek(date, { weekStartsOn: 5 });
    setSelectedDate(newWeekStart);
  };

  // Handle sidebar resizing
  const handleResize = (e, data) => {
    setSidebarWidth(sidebarWidth + data.deltaX);
  };

  return (
    <Box sx={{ width: `${sidebarWidth}px`, backgroundColor: '#f4f4f4', minHeight: '100vh', paddingTop: '20px', position: 'relative', boxSizing: 'border-box' }}>
      {/* Week Picker */}
      <Box sx={{ padding: '0px 20px', textAlign: 'center', marginBottom: '20px' }}>
        <DatePicker
          selected={selectedDate}
          onChange={handleWeekSelect}
          showWeekNumbers
          dateFormat="wo 'week of' MMM yyyy"
          calendarStartDay={5}
          customInput={
            <Typography variant="body1" sx={{
              padding: '10px 20px',
              cursor: 'pointer',
              border: '2px solid #b22a00',
              borderRadius: '8px',
              backgroundColor: '#fff8f5',
              color: '#b22a00',
              fontWeight: 'bold',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                backgroundColor: '#ffe0db',
              }
            }}>
              Week {currentWeekNumber}
            </Typography>
          }
        />
      </Box>

      {/* "Platform Incidents" category */}
      <Box sx={{ padding: '0 20px' }}>
        <ListItem button onClick={handlePlatformToggle}>
          <ListItemText primary="Platform Incidents" />
          {openPlatformIncidents ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        {/* Priority subcategories */}
        {openPlatformIncidents && (
          <Box sx={{ display: 'block', transition: '0.3s ease' }}>
            {hasP0 && (
              <Box>
                <ListItem button onClick={() => handleTogglePriority('P0')} sx={{ pl: 4 }}>
                  <ListItemText primary={`Priority P0 (${priorities['P0']?.length || 0})`} />
                  {openPriority['P0'] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                {openPriority['P0'] && (
                  <Box sx={{ pl: 6 }}>
                    <List sx={{ pl: 4 }}>
                      {priorities['P0']?.map(incident => (
                        <ListItem button key={incident.id} component={Link} to={`/weekly-review/incidents/${incident.id}`}>
                          <ListItemText primary={incident.id} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                )}
              </Box>
            )}

            {['P1', 'P2'].map(priority => (
              <Box key={priority}>
                <ListItem button onClick={() => handleTogglePriority(priority)} sx={{ pl: 4 }}>
                  <ListItemText primary={`Priority ${priority} (${priorities[priority].length})`} />
                  {openPriority[priority] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                {openPriority[priority] && (
                  <Box sx={{ pl: 6 }}>
                    <List sx={{ pl: 4 }}>
                      {priorities[priority].map(incident => (
                        <ListItem button key={incident.id} component={Link} to={`/weekly-review/incidents/${incident.id}`}>
                          <ListItemText primary={incident.id} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        )}
      </Box>

      {/* Draggable handle to adjust sidebar width */}
      <Draggable axis="x" onDrag={handleResize}>
        <Box sx={{
          width: '5px',
          height: '100%',
          position: 'absolute',
          right: 0,
          top: 0,
          cursor: 'ew-resize',
          backgroundColor: 'transparent',
        }} />
      </Draggable>
    </Box>
  );
}

export default Sidebar;
