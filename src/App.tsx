import { ThemeProvider } from '@mui/material/styles';
import ButtonUsage from './components/ButtonUsage';
import theme from './style/Theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <h3 className="hello">Hello word</h3>
      <ButtonUsage label="Login" onClick={() => console.log('login')} />
    </ThemeProvider>
  );
};

export default App;
