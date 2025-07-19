// src/pages/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Grid, Box } from '@mui/material';

export default function Layout() {
  return (
    <>
      {/* Header */}
      <AppBar position="static" sx={{ height: 80, display: 'flex', justifyContent: 'center' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ mx: 'auto' }}>Header</Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Grid container sx={{ minHeight: '420px', mb: 0 , textAlign: 'center' }}>

        {/* Aside */}
        <Grid item xs={12} md={4} sx={{ backgroundColor: 'pink', p: 2, width:'30%' }}>
          <Typography variant="h6">Aside</Typography>
        </Grid>

        {/* Section */}
        <Grid item xs={12} md={8} sx={{ backgroundColor: 'lightgreen', p: 2, width:'70%'}}>
          <Typography variant="h6">Section</Typography>
          <Outlet />
        </Grid>
      </Grid>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          textAlign: 'center',
          backgroundColor: 'green',
          height: 80,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Footer
      </Box>
    </>
  );
}
