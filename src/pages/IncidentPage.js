// src/pages/IncidentPage.js
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';
import { incidents } from '../data/data';

function IncidentPage() {
  const { incidentId } = useParams();
  
  // Find the incident by its ID
  const incident = incidents.find((incident) => incident.id === incidentId);

  if (!incident) {
    return (
      <Box sx={{ padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
        <Typography variant="h4" sx={{ color: '#b22a00', fontWeight: 'bold' }}>
          Incident not found
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <Paper sx={{ padding: '20px', marginBottom: '20px', backgroundColor: '#fff' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
          {incident.id}: [PLATFORM] Incident Details
        </Typography>
        <Typography variant="subtitle1" sx={{ color: '#777', marginBottom: '10px' }}>
          Impacted XAAS: {incident.impactedXaas || 'N/A'} | Impacted AZ: {incident.impactedAz || 'N/A'} | Incident Date: {incident.date}
        </Typography>
        <Typography variant="subtitle2" sx={{ color: '#999', marginBottom: '20px' }}>
          {incident.date} (Closed on {incident.closedDate})
        </Typography>
        <Typography variant="body1" sx={{ color: '#b22a00', fontWeight: 'bold' }}>
          Priority: {incident.priority}
        </Typography>
      </Paper>

      <Paper sx={{ padding: '20px', marginBottom: '20px', backgroundColor: '#fff' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
          Description
        </Typography>
        <Typography variant="body1">
          {incident.description}
        </Typography>
      </Paper>

      <Paper sx={{ padding: '20px', marginBottom: '20px', backgroundColor: '#fff' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
          Root Cause
        </Typography>
        <Typography variant="body1">
          {incident.rootCause}
        </Typography>
      </Paper>

      <Paper sx={{ padding: '20px', marginBottom: '20px', backgroundColor: '#fff' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
          Solution
        </Typography>
        <Typography variant="body1">
          {incident.solution}
        </Typography>
      </Paper>

      <Paper sx={{ padding: '20px', marginBottom: '20px', backgroundColor: '#ffa500' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px', color: '#fff' }}>
          Actions
        </Typography>
        <Typography variant="body1" sx={{ color: '#fff' }}>
          {incident.actions}
        </Typography>
      </Paper>

      <Paper sx={{ padding: '20px', backgroundColor: '#fff' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
          Team in Charge
        </Typography>
        <Typography variant="body1">
          {incident.teamInCharge || 'N/A'}
        </Typography>
      </Paper>
    </Box>
  );
}

export default IncidentPage;
