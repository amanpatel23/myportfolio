import { createMuiTheme } from '@material-ui/core/styles';

const blue = '#007ced'
const yellow = '#f2bb13'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue,
    },
    secondary: {
      main: yellow,
    },
  },

  typography: {
    h1: {
      fontFamily: 'Poppins',
      fontWeight: 'extra-bold',
      fontSize: '2.5rem'
    },
    h5: {
      fontFamily: 'Poppins',
      fontWeight: 'medium'
    },
    tab: {
      fontFamily: 'Poppins',
      textTransform: 'none',
      fontSize: '1rem',
      color: '#333',
      fontWeight: '400',
      //opacity: '.5'
    },
  }
});

export default theme;
