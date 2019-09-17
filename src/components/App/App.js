import React from 'react';
import './App.css';
import MainView from '../MainView';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    blue: {
      light: '#90c4e4',
      dark: '#4e8cba'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.8)',
      secondary: 'rgba(0, 0, 0, 0.4)'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainView />
    </ThemeProvider>
  );
}

export default App;
