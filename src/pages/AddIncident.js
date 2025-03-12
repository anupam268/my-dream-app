// src/pages/AddIncident.js
import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function AddIncident() {
  const [incidentId, setIncidentId] = useState('');
  const [priority, setPriority] = useState('');
  const [incidentDate, setIncidentDate] = useState('');
  const navigate = useNavigate();

  const handleAddIncident = () => {
    // Fetch data and add to Non-Iceboard Incidents
    const newIncident = {
      id: incidentId,
      priority,
      date: incidentDate,
      description: 'Manually added incident',
      rootCause: 'N/A',
      solution: 'N/A',
      actions: 'N/A',
      team: 'N/A',
    };

    // Save incident (here you would save it to your backend or local state)
    // For now, just navigate back to the main view
    console.log('New Incident:', newIncident);

    navigate('/weekly-review');
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h5" sx={{ marginBottom: '20px' }}>Add Non-Iceboard Incident</Typography>

      <TextField
        label="Incident ID"
        value={incidentId}
        onChange={(e) => setIncidentId(e.target.value)}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Incident Date"
        type="date"
        value={incidentDate}
        onChange={(e) => setIncidentDate(e.target.value)}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleAddIncident}
        sx={{ marginTop: '20px' }}
      >
        Add Incident
      </Button>
    </Box>
  );
}

export default AddIncident;
