import { createTheme } from '@mui/material';
import { purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#01617E',
      contrastText: '#fff',
    },
    secondary: purple,
  },
});

export default theme;
