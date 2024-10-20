// src/pages/IncidentPage.js
import React, { useState } from 'react';
import { Box, Typography, Paper, Button, TextField } from '@mui/material';
import { useParams } from 'react-router-dom';
import { incidents } from '../data/data';

function IncidentPage() {
  const { incidentId } = useParams();
  const incident = incidents.find((incident) => incident.id === incidentId);
  
  const [editingField, setEditingField] = useState(null); // Track which field is being edited
  const [updatedIncident, setUpdatedIncident] = useState({ ...incident }); // Local state for the updated incident

  const handleEditClick = (field) => {
    setEditingField(field);
  };

  const handleSaveClick = (field) => {
    setEditingField(null);
    // Update the global incidents array or send the updated data to the server or data file here
    // Simulating an update in data.js
    const incidentIndex = incidents.findIndex((inc) => inc.id === incidentId);
    incidents[incidentIndex][field] = updatedIncident[field];
    // Update your data file here with the new incidents data
    console.log('Updated incident:', incidents[incidentIndex]);
  };

  const handleFieldChange = (e, field) => {
    setUpdatedIncident({ ...updatedIncident, [field]: e.target.value });
  };

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
      {/* Incident Details */}
      <Paper sx={{ padding: '20px', marginBottom: '20px', backgroundColor: '#fff' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
          {incident.id}: [PLATFORM] Incident Details
        </Typography>
        <Typography variant="subtitle1" sx={{ color: '#777', marginBottom: '10px' }}>
          Impacted XAAS: {editingField === 'impactedXaas' ? (
            <TextField 
              value={updatedIncident.impactedXaas} 
              onChange={(e) => handleFieldChange(e, 'impactedXaas')} 
              variant="outlined" 
              size="small" 
            />
          ) : updatedIncident.impactedXaas || 'N/A'}{' '}
          <Button onClick={() => handleEditClick('impactedXaas')} size="small">Edit</Button>
        </Typography>
        <Typography variant="subtitle2" sx={{ color: '#999', marginBottom: '20px' }}>
          Incident Date: {updatedIncident.date} (Closed on {updatedIncident.closedDate})
        </Typography>
        <Typography variant="body1" sx={{ color: '#b22a00', fontWeight: 'bold' }}>
          Priority: {updatedIncident.priority}
        </Typography>
      </Paper>

      {/* Description */}
      <Paper sx={{ padding: '20px', marginBottom: '20px', backgroundColor: '#fff' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
          Description
        </Typography>
        {editingField === 'description' ? (
          <TextField
            value={updatedIncident.description}
            onChange={(e) => handleFieldChange(e, 'description')}
            fullWidth
            variant="outlined"
            size="small"
            multiline
            rows={4}
          />
        ) : (
          <Typography variant="body1">{updatedIncident.description}</Typography>
        )}
        <Button onClick={() => handleEditClick('description')} size="small">Edit</Button>
        {editingField === 'description' && (
          <Button onClick={() => handleSaveClick('description')} size="small">Save</Button>
        )}
      </Paper>

      {/* Root Cause */}
      <Paper sx={{ padding: '20px', marginBottom: '20px', backgroundColor: '#fff' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
          Root Cause
        </Typography>
        {editingField === 'rootCause' ? (
          <TextField
            value={updatedIncident.rootCause}
            onChange={(e) => handleFieldChange(e, 'rootCause')}
            fullWidth
            variant="outlined"
            size="small"
            multiline
            rows={4}
          />
        ) : (
          <Typography variant="body1">{updatedIncident.rootCause}</Typography>
        )}
        <Button onClick={() => handleEditClick('rootCause')} size="small">Edit</Button>
        {editingField === 'rootCause' && (
          <Button onClick={() => handleSaveClick('rootCause')} size="small">Save</Button>
        )}
      </Paper>

      {/* Solution */}
      <Paper sx={{ padding: '20px', marginBottom: '20px', backgroundColor: '#fff' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
          Solution
        </Typography>
        {editingField === 'solution' ? (
          <TextField
            value={updatedIncident.solution}
            onChange={(e) => handleFieldChange(e, 'solution')}
            fullWidth
            variant="outlined"
            size="small"
            multiline
            rows={4}
          />
        ) : (
          <Typography variant="body1">{updatedIncident.solution}</Typography>
        )}
        <Button onClick={() => handleEditClick('solution')} size="small">Edit</Button>
        {editingField === 'solution' && (
          <Button onClick={() => handleSaveClick('solution')} size="small">Save</Button>
        )}
      </Paper>

      {/* Actions */}
      <Paper sx={{ padding: '20px', marginBottom: '20px', backgroundColor: '#ffa500' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px', color: '#fff' }}>
          Actions
        </Typography>
        {editingField === 'actions' ? (
          <TextField
            value={updatedIncident.actions}
            onChange={(e) => handleFieldChange(e, 'actions')}
            fullWidth
            variant="outlined"
            size="small"
            multiline
            rows={4}
          />
        ) : (
          <Typography variant="body1" sx={{ color: '#fff' }}>
            {updatedIncident.actions}
          </Typography>
        )}
        <Button onClick={() => handleEditClick('actions')} size="small" sx={{ color: '#fff' }}>
          Edit
        </Button>
        {editingField === 'actions' && (
          <Button onClick={() => handleSaveClick('actions')} size="small" sx={{ color: '#fff' }}>
            Save
          </Button>
        )}
      </Paper>

      {/* Team in Charge */}
      <Paper sx={{ padding: '20px', backgroundColor: '#fff' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
          Team in Charge
        </Typography>
        {editingField === 'teamInCharge' ? (
          <TextField
            value={updatedIncident.teamInCharge}
            onChange={(e) => handleFieldChange(e, 'teamInCharge')}
            fullWidth
            variant="outlined"
            size="small"
          />
        ) : (
          <Typography variant="body1">{updatedIncident.teamInCharge || 'N/A'}</Typography>
        )}
        <Button onClick={() => handleEditClick('teamInCharge')} size="small">Edit</Button>
        {editingField === 'teamInCharge' && (
          <Button onClick={() => handleSaveClick('teamInCharge')} size="small">Save</Button>
        )}
      </Paper>
    </Box>
  );
}

export default IncidentPage;
