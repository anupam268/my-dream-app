// src/pages/WeeklyReview.js
import React, { useState } from 'react';
import { Box, Typography, FormControl } from '@mui/material';
import wppr from '../assets/images/wppr.png';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { getISOWeek, startOfWeek, addDays, subWeeks, format } from 'date-fns';

function WeeklyReview() {
  const currentDate = new Date(); // Current date to determine the current week
  const [selectedDate, setSelectedDate] = useState(currentDate); // State for selected date
  const previousWeekDate = subWeeks(currentDate, 1); // Date corresponding to the previous week

  // Calculate the Friday of the previous week for duration display
  const startOfPreviousWeek = startOfWeek(previousWeekDate, { weekStartsOn: 5 }); 
  const endOfPreviousWeek = addDays(startOfPreviousWeek, 6); 

  const previousWeekNumber = getISOWeek(previousWeekDate); // Week number of the previous week
  const startDateFormatted = format(startOfPreviousWeek, 'EEEE 00:00 do MMMM', { timeZone: 'Europe/Paris' });
  const endDateFormatted = format(endOfPreviousWeek, 'EEEE 23:59 do MMMM', { timeZone: 'Europe/Paris' });

  return (
    <Box sx={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#b22a00', lineHeight: 1.2 }}>
        Weekly Platform Production Review
      </Typography>
      <FormControl variant="outlined" sx={{ marginBottom: '20px', minWidth: 120 }}>
        <DatePicker
          selected={selectedDate}
          onChange={date => setSelectedDate(date)}
          showWeekNumbers
          dateFormat="yyyy-MM-dd"
          calendarStartDay={1}  // Week starts on Monday in the calendar
          customInput={
            <Typography 
              variant="body1" 
              sx={{ 
                padding: '10px 20px', 
                cursor: 'pointer', 
                border: '2px solid #b22a00', 
                borderRadius: '8px', 
                display: 'inline-block', 
                backgroundColor: '#fff8f5',
                color: '#b22a00', 
                fontWeight: 'bold',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                fontSize: '18px',
                transition: 'background-color 0.3s ease',
                '&:hover': {
                  backgroundColor: '#ffe0db',
                }
              }}>
              Week {previousWeekNumber}
            </Typography>
          }
        />
      </FormControl>
      <Typography 
        variant="body1" 
        gutterBottom 
        sx={{ 
          marginTop: '20px', 
          fontSize: '18px', 
          color: '#555', 
          lineHeight: 1.5,
          padding: '10px 20px',
          backgroundColor: '#fff8f5',
          borderRadius: '8px',
          display: 'inline-block',
          border: '1px solid #ddd',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        {startDateFormatted} – {endDateFormatted} (Paris Time)
      </Typography>
      <Box sx={{ marginTop: '50px', display: 'flex', justifyContent: 'center', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <img src={wppr} alt="Review Image" style={{ maxWidth: '80%', borderRadius: '8px', border: '2px solid #ddd', padding: '10px', backgroundColor: '#fff' }} />
      </Box>
    </Box>
  );
}

export default WeeklyReview;
