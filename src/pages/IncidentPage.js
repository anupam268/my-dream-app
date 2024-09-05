// src/pages/IncidentPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Paper } from '@mui/material';
import { incidents } from '../data/data';

function IncidentPage() {
  const { id } = useParams();  // Get the incident ID from the URL
  const incident = incidents.find((incident) => incident.id === id);  // Find the incident by ID

  if (!incident) {
    return <Typography variant="h6">Incident not found</Typography>;
  }

  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <Paper sx={{ padding: '20px', marginBottom: '20px', backgroundColor: '#fff' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
          {incident.id}: {incident.title}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: '#777', marginBottom: '10px' }}>
          Impacted XAAS: {incident.impactedXaas} | IMPACTED AZ: {incident.impactedAZ} | Unity Incidents: {incident.unityIncidents}
        </Typography>
        <Typography variant="subtitle2" sx={{ color: '#999', marginBottom: '20px' }}>
          {incident.date} | {incident.time}
        </Typography>
        <Typography variant="body1" sx={{ color: '#b22a00', fontWeight: 'bold' }}>
          Primary Contact: {incident.contact}
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
          Team in charge
        </Typography>
        <Typography variant="body1">
          {incident.teamInCharge}
        </Typography>
      </Paper>
    </Box>
  );
}

export default IncidentPage;
