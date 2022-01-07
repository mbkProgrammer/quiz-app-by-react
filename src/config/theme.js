import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#4dabf5',
      main: '#2196f3',
      dark: '#1769aa',
      contrastText: '#fff',
    },
    secondary: {
      light: '#f6734b',
      main: '#f4511e',
      dark: '#aa3815',
      contrastText: '#ccc',
    },
  },
});

export default theme;
