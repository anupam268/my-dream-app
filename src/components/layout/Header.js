// src/components/layout/Header.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom'; // For navigation
import Logo from '../../assets/images/pre-logo.png'; // Example logo import

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Toggle the drawer
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  // Drawer content (Navigation Tree)
  const list = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/weekly-review">
          <ListItemText primary="Weekly Platform Review" />
        </ListItem>
        {/* Add more navigation items here if needed */}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff', color: '#b22a00' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Left side: Menu icon and clickable logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>

          {/* Clickable Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src={Logo} alt="Logo" style={{ height: '40px', marginRight: '20px' }} />
          </Link>

          {/* Home Link */}
          <Link to="/" style={{ textDecoration: 'none', color: '#b22a00' }}>
            <Typography variant="h6" sx={{ marginRight: '20px', fontWeight: 'bold' }}>
              Home
            </Typography>
          </Link>

          {/* Weekly Review Link */}
          <Link to="/weekly-review" style={{ textDecoration: 'none', color: '#b22a00' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Weekly Platform Review
            </Typography>
          </Link>
        </Box>

        {/* Right side: Icons */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Drawer (Side Menu) */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </AppBar>
  );
}

export default Header;
