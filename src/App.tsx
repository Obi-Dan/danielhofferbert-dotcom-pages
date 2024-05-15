import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Name } from './Name';
import { Box, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ width: '100%', maxWidth: 500 }}>
        <Typography variant="h1" gutterBottom>
          Daniel Hofferbert
        </Typography>
      </Box>
    </ThemeProvider>
    // <div className="App">
    //   <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     <p>
    //       DanielHofferbert.com Coming soon...
    //     </p>
    //     {/* <Name name={'bob2'} /> */}
    //   </header>
    // </div>
  );
}

export default App;
