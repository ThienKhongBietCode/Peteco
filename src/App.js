import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Donations from './pages/Donations';
import Community from './pages/Community';
import Gallery from './pages/Gallery';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff9999',
      light: '#ffb3b3',
      dark: '#ff8080',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#60db60',
      light: '#7ee37e',
      dark: '#4cd34c',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/donations" element={<Donations />} />
              <Route path="/community" element={<Community />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App; 