// src/components/layout/Sidebar.js
import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { getISOWeek, startOfWeek } from 'date-fns';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { ExpandMore, ExpandLess, Add } from '@mui/icons-material';
import Draggable from 'react-draggable';  // For resizable sidebar
import { incidents } from '../../data/data';  // Correct import from data file


function Sidebar({ selectedDate, setSelectedDate, setSidebarWidth, sidebarWidth }) {
  const [openPlatform, setOpenPlatform] = useState(true);  // For platform incidents collapse
  const [openNonIceboard, setOpenNonIceboard] = useState(true);  // For non-iceboard incidents collapse
  const [openP0, setOpenP0] = useState(true);  // For Priority P0 incidents
  const [openP1, setOpenP1] = useState(true);  // For Priority P1 incidents
  const [openP2, setOpenP2] = useState(true);  // For Priority P2 incidents

  // Handle week selection
  const handleWeekSelect = (date) => {
    const newWeekStart = startOfWeek(date, { weekStartsOn: 5 });
    setSelectedDate(newWeekStart);
  };

  // Re-fetch incidents whenever selectedDate changes
  useEffect(() => {
    const currentWeekNumber = getISOWeek(selectedDate);

    // Filter incidents based on the selected week
    const platformIncidents = incidents.platformIncidents;
    const nonIceboardIncidents = incidents.nonIceboardIncidents;

    setFilteredPlatformIncidents(
      platformIncidents.filter(incident => getISOWeek(new Date(incident.date)) === currentWeekNumber)
    );

    setFilteredNonIceboardIncidents(
      nonIceboardIncidents.filter(incident => getISOWeek(new Date(incident.date)) === currentWeekNumber)
    );

  }, [selectedDate]); // Runs whenever selectedDate changes
  const currentWeekNumber = getISOWeek(selectedDate);

  // Filtering incidents by priority and date
  const platformIncidents = incidents.platformIncidents;
  const nonIceboardIncidents = incidents.nonIceboardIncidents;

  const filteredPlatformIncidents = platformIncidents.filter(
    incident => getISOWeek(new Date(incident.date)) === currentWeekNumber
  );
  

  const filteredNonIceboardIncidents = nonIceboardIncidents.filter(
    incident => getISOWeek(new Date(incident.date)) === currentWeekNumber
  );

  const priorityIncidents = (priority) => filteredPlatformIncidents.filter(incident => incident.priority === priority);

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

      {/* Platform Incidents */}
      <Box sx={{ padding: '0 20px' }}>
        <ListItem button onClick={() => setOpenPlatform(!openPlatform)}>
          <ListItemText primary="Platform Incidents" />
          {openPlatform ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Box sx={{ display: openPlatform ? 'block' : 'none', transition: '0.3s ease' }}>
          {/* Priority P0 Incidents */}
          <ListItem button onClick={() => setOpenP0(!openP0)}>
            <ListItemText primary="Priority P0" />
            {openP0 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Box sx={{ display: openP0 ? 'block' : 'none', transition: '0.3s ease', pl: 4 }}>
            {priorityIncidents('P0').length > 0 ? (
              priorityIncidents('P0').map(incident => (
                <ListItem key={incident.id} button component={Link} to={`/weekly-review/incidents/${incident.id}`}>
                  <ListItemText primary={incident.id} />
                </ListItem>
              ))
            ) : (
              <Typography variant="body2" sx={{ paddingLeft: '16px' }}>No P0 incidents</Typography>
            )}
          </Box>

          {/* Priority P1 Incidents */}
          <ListItem button onClick={() => setOpenP1(!openP1)}>
            <ListItemText primary="Priority P1" />
            {openP1 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Box sx={{ display: openP1 ? 'block' : 'none', transition: '0.3s ease', pl: 4 }}>
            {priorityIncidents('P1').map(incident => (
              <ListItem key={incident.id} button component={Link} to={`/weekly-review/incidents/${incident.id}`}>
                <ListItemText primary={incident.id} />
              </ListItem>
            ))}
          </Box>

          {/* Priority P2 Incidents */}
          <ListItem button onClick={() => setOpenP2(!openP2)}>
            <ListItemText primary="Priority P2" />
            {openP2 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Box sx={{ display: openP2 ? 'block' : 'none', transition: '0.3s ease', pl: 4 }}>
            {priorityIncidents('P2').map(incident => (
              <ListItem key={incident.id} button component={Link} to={`/weekly-review/incidents/${incident.id}`}> <ListItemText primary={incident.id} /> </ListItem> ))} 
              </Box> 
              </Box> 
              </Box>
                {/* Non-Iceboard Incidents */}
  <Box sx={{ padding: '0 20px' }}>
    <ListItem button onClick={() => setOpenNonIceboard(!openNonIceboard)}>
      <ListItemText primary="Non-Iceboard Incidents" />
      {openNonIceboard ? <ExpandLess /> : <ExpandMore />}
    </ListItem>

    <Box sx={{ display: openNonIceboard ? 'block' : 'none', transition: '0.3s ease' }}>
      {filteredNonIceboardIncidents.length > 0 ? (
        filteredNonIceboardIncidents.map(incident => (
          <ListItem key={incident.id} button component={Link} to={`/weekly-review/incidents/${incident.id}`}>
            <ListItemText primary={incident.id} />
          </ListItem>
        ))
      ) : (
        <Typography variant="body2" sx={{ paddingLeft: '16px' }}>No Non-Iceboard incidents</Typography>
      )}
    </Box>
  </Box>

  {/* Button to add Non-Iceboard Incidents */}
  <Box sx={{ padding: '0 20px', marginTop: '20px' }}>
    <Button
      variant="contained"
      color="primary"
      startIcon={<Add />}
      component={Link}
      to="/add-non-iceboard-incident"
    >
      Add Incident
    </Button>
  </Box>

  {/* Draggable handle to adjust sidebar width */}
  <Draggable axis="x" onDrag={(e, data) => setSidebarWidth(sidebarWidth + data.deltaX)}>
    <Box sx={{
      width: '5px',  // Adjusted handle width
      height: '100%',
      position: 'absolute',
      right: 0,
      top: 0,
      cursor: 'ew-resize',
      backgroundColor: 'transparent',  // Hide the handle, but keep it functional
    }} />
  </Draggable>
</Box>
); 
}

export default Sidebar;
