// src/components/layout/Sidebar.js
import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import { getISOWeek, subWeeks, isValid } from 'date-fns';

function Sidebar({ width, selectedDate }) {
  const location = useLocation(); // Correct way to use location with react-router-dom

  // Ensure the selectedDate is valid before calculating
  const validSelectedDate = isValid(selectedDate) ? selectedDate : new Date();
  const previousWeekDate = subWeeks(validSelectedDate, 1); // Get the previous week's date
  const previousWeekNumber = getISOWeek(previousWeekDate); // Calculate the previous week number

  return (
    <Box
      sx={{
        width: `${width}px`,
        backgroundColor: '#f4f4f4',
        height: '100vh',
        paddingTop: '20px',
        borderRight: '1px solid #ddd',
        position: 'relative',
        left: 0,
        overflowY: 'auto',
      }}
    >
      <List>
        <ListItem sx={{ padding: '12px 20px' }}>
          <ListItemText
            primary={
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 'bold',
                  fontSize: '16px',
                  color: 'red',
                }}
              >
                Platform Production Review for Week {previousWeekNumber}
              </Typography>
            }
          />
        </ListItem>
        <Typography variant="h6" sx={{ paddingLeft: '20px', paddingTop: '20px' }}>
          Incidents
        </Typography>
        <ListItem button component={NavLink} to="/weekly-review/incidents/24070284" sx={{ padding: '12px 20px' }}>
          <ListItemText
            primary={
              <Typography
                variant="body1"
                sx={{
                  fontWeight: location.pathname === "/weekly-review/incidents/24070284" ? 'bold' : 'normal',
                  fontSize: '14px',
                  color: location.pathname === "/weekly-review/incidents/24070284" ? 'red' : 'black',
                }}
              >
                24070284
              </Typography>
            }
          />
        </ListItem>
      </List>
    </Box>
  );
}

export default Sidebar;
