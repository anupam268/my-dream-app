import React, { useState } from 'react';
import { List, ListItem, ListItemText, Box, Typography } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { startOfWeek, getISOWeek, getYear } from 'date-fns';

function Sidebar({ selectedDate, setSelectedDate }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // Handle week selection
  const handleWeekSelect = (date) => {
    const newWeekStart = startOfWeek(date, { weekStartsOn: 5 });
    setSelectedDate(newWeekStart);

    // Update URL parameters
    const week = getISOWeek(newWeekStart);
    const year = getYear(newWeekStart);
    setSearchParams({ week, year });
  };

  const currentWeekNumber = getISOWeek(selectedDate);

  return (
    <Box sx={{ width: '250px', backgroundColor: '#f4f4f4', minHeight: '100vh', paddingTop: '20px' }}>
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
    </Box>
  );
}

export default Sidebar;
