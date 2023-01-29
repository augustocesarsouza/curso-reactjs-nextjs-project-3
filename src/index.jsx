import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global-styles';
import Home from './templates/App';
import { theme } from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <Home />
    <GlobalStyles />
  </ThemeProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
