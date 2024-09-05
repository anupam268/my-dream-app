// src/pages/WeeklyReview.js
import React from 'react';
import { Box, Typography, FormControl } from '@mui/material';
import wppr from '../assets/images/wppr.png';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { startOfWeek, addDays, format, getISOWeek } from 'date-fns';
import { useOutletContext } from 'react-router-dom';

function WeeklyReview() {
  const [selectedDate, setSelectedDate] = useOutletContext(); // Get shared state from MainLayout

  // Calculate the start and end of the selected week (Friday to Thursday)
  const startOfSelectedWeek = startOfWeek(selectedDate, { weekStartsOn: 5 }); // Week starts on Friday
  const endOfSelectedWeek = addDays(startOfSelectedWeek, 6); // Week ends on Thursday
  const selectedWeekNumber = getISOWeek(selectedDate); // Week number
  const selectedMonth = format(selectedDate, 'MMMM'); // Month name

  const startDateFormatted = format(startOfSelectedWeek, 'EEEE 00:00 do MMMM', { timeZone: 'Europe/Paris' });
  const endDateFormatted = format(endOfSelectedWeek, 'EEEE 23:59 do MMMM', { timeZone: 'Europe/Paris' });

  // Handle week selection from DatePicker
  const handleWeekSelect = (date) => {
    const adjustedDate = startOfWeek(date, { weekStartsOn: 5 });
    setSelectedDate(adjustedDate);
  };

  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f9f9f9', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#b22a00', lineHeight: 1.2, textAlign: 'center' }}>
        Weekly Platform Production Review
      </Typography>

      {/* Display Month in Calendar */}
      <FormControl variant="outlined" sx={{ marginBottom: '20px', minWidth: 120, textAlign: 'center' }}>
        <DatePicker
          selected={selectedDate}
          onChange={handleWeekSelect}
          showWeekNumbers
          dateFormat="MMMM yyyy" // Shows month and year
          calendarStartDay={5} // Week starts on Friday
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
              Week {selectedWeekNumber} ({selectedMonth})
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
          textAlign: 'center'
        }}
      >
        {startDateFormatted} – {endDateFormatted} (Paris Time)
      </Typography>

      <Box sx={{ marginTop: '50px', display: 'flex', justifyContent: 'center', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '80%' }}>
        <img src={wppr} alt="Review Image" style={{ maxWidth: '100%', borderRadius: '8px', border: '2px solid #ddd', padding: '10px', backgroundColor: '#fff' }} />
      </Box>
    </Box>
  );
}

export default WeeklyReview;
