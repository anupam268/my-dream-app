// src/pages/NonIceboardIncidentForm.js
import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { nonIceboardIncidents } from '../data/data';  // Import incidents data file

function NonIceboardIncidentForm({ onSubmit }) {
  const [incidentDetails, setIncidentDetails] = useState({
    id: '',
    title: '',
    description: '',
    priority: '',
    date: '',
  });

  const handleChange = (e) => {
    setIncidentDetails({
      ...incidentDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const newIncident = {
      ...incidentDetails,
      id: uuidv4(),  // Generate unique id
    };

    nonIceboardIncidents.push(newIncident);  // Push new incident into the data array
    onSubmit(newIncident);  // Callback to trigger update in the sidebar
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h6">Add Non-Iceboard Incident</Typography>
      <Box sx={{ margin: '20px 0' }}>
        <TextField
          label="Title"
          name="title"
          fullWidth
          value={incidentDetails.title}
          onChange={handleChange}
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          label="Description"
          name="description"
          fullWidth
          value={incidentDetails.description}
          onChange={handleChange}
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          label="Priority"
          name="priority"
          fullWidth
          value={incidentDetails.priority}
          onChange={handleChange}
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          label="Date"
          name="date"
          fullWidth
          value={incidentDetails.date}
          onChange={handleChange}
          sx={{ marginBottom: '20px' }}
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default NonIceboard
