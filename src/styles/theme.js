import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3'
    },
    secondary: {
      main: '#4da32f'
    },
    error: {
      main: '#fa3336'
    },
    textSecondary: {
      main: '#333333'
    },
    default: {
      main: '#ffffff'
    }
  },
  typography: {
    useNextVariants: true,
  }
});
