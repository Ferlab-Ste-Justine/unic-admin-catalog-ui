import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import App from './App.tsx';
import './index.css';
import { store } from './store/index.ts';
import theme from './style/Theme.tsx';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);
