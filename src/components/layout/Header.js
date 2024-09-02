// src/components/layout/Header.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/images/pre-logo.png';

function Header() {
  const location = useLocation();

  return (
    <AppBar position="static" style={{ backgroundColor: '#fff', color: '#000', boxShadow: 'none', borderBottom: '1px solid #ddd' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: '56px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '20px' }} />
          <Box sx={{ display: 'flex', gap: '24px' }}>
            <NavLink 
              to="/" 
              style={({ isActive }) => ({
                fontWeight: isActive || location.pathname === "/" ? 700 : 500, 
                color: isActive || location.pathname === "/" ? 'red' : 'black', 
                textDecoration: 'none' 
              })}>
              <Typography variant="body1">HOME</Typography>
            </NavLink>
            <NavLink 
              to="/weekly-review" 
              style={({ isActive }) => ({
                fontWeight: isActive || location.pathname.includes("/weekly-review") ? 700 : 500, 
                color: isActive || location.pathname.includes("/weekly-review") ? 'red' : 'black', 
                textDecoration: 'none' 
              })}>
              <Typography variant="body1">Weekly Platform Review</Typography>
            </NavLink>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
