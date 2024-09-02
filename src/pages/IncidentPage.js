// src/pages/IncidentPage.js
import React from 'react';
import { Box, Typography, Grid, Paper, Divider } from '@mui/material';

function IncidentPage() {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h5" gutterBottom>
        24070284: [PLATFORM][OCS] Openstack provisioning degraded
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <Typography variant="body2">
          Impacted XAAS: OCS | IMPACTED AZ: PARIS 2 | Unity Incidents: 579314614
        </Typography>
        <Typography variant="body2">
          01 March, 2020 | 8:30 AM (1 Day ago)
        </Typography>
        <Typography variant="body2" color="error">
          Primary Contact: Sujan
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Description
            </Typography>
            <Typography variant="body2">
              There was a scheduled change 573356305 in Paris to implement the RabbitMQ heartbeat frame recommendations on all neutron services.
            </Typography>
            <Typography variant="body2" sx={{ marginTop: '10px' }}>
              Due to a bug in Kube registry (which is internal to OCS) 'image master' doesn't take the last commit.
            </Typography>
            <Typography variant="body2" sx={{ marginTop: '10px' }}>
              This was caught during smoketest. Issue was quickly corrected by re-execution of the change with the good inventory Post which smoketest was done successfully.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Root Cause
            </Typography>
            <Typography variant="body2">
              There was a scheduled change 573356305 in Paris to implement the RabbitMQ heartbeat frame recommendations on all neutron services.
            </Typography>
            <Typography variant="body2" sx={{ marginTop: '10px' }}>
              Due to a bug in Kube registry (which is internal to OCS) 'image master' doesn't take the last commit.
            </Typography>
            <Typography variant="body2" sx={{ marginTop: '10px' }}>
              This was caught during smoketest. Issue was quickly corrected by re-execution of the change with the good inventory Post which smoketest was done successfully.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Solution
            </Typography>
            <Typography variant="body2">
              There was a scheduled change 573356305 in Paris to implement the RabbitMQ heartbeat frame recommendations on all neutron services.
            </Typography>
            <Typography variant="body2" sx={{ marginTop: '10px' }}>
              Due to a bug in Kube registry (which is internal to OCS) 'image master' doesn't take the last commit.
            </Typography>
            <Typography variant="body2" sx={{ marginTop: '10px' }}>
              This was caught during smoketest. Issue was quickly corrected by re-execution of the change with the good inventory Post which smoketest was done successfully.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ marginTop: '20px' }}>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ padding: '20px', backgroundColor: '#FF8C00', color: '#fff' }}>
            <Typography variant="h6">Actions</Typography>
            <Divider sx={{ backgroundColor: '#fff', marginY: '10px' }} />
            <Typography variant="body2">IBM opens ticket</Typography>
            <Typography variant="body2">Specific tag must be created</Typography>
            <Typography variant="body2">Specific tag must be created</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ padding: '20px' }}>
            <Typography variant="h6">Team in charge</Typography>
            <Typography variant="body2">OCS</Typography>
          </Paper>
          <Paper elevation={3} sx={{ padding: '20px', marginTop: '10px' }}>
            <Typography variant="h6">Reference</Typography>
            <Typography variant="body2">Specific tag must be created</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default IncidentPage;
