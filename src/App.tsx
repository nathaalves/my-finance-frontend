import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './assets/styles/GlobalStyles';
import * as theme from './assets/styles/themes/';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';

export function App() {
  return (
    <ThemeProvider theme={theme['purple']}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
