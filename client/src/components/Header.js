import * as React from 'react';
import Logo from '../assets/Logo.png';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function Header() {
  return (
    <Paper
      sx={{
        position: 'relative',
        mb: 4,
        height: '275px',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: '#E7EAEF',
        backgroundImage: `url(${Logo})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={Logo} alt='Fresh Paws Logo'/>}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Header;
