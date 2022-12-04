import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './assets/styles/GlobalStyles';
import * as theme from './assets/styles/themes/';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export function App() {
  return (
    <ThemeProvider theme={theme['purple']}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
