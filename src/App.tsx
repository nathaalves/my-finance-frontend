import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './assets/styles/GlobalStyles';
import * as theme from './assets/styles/themes/';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Registration } from './pages/Registration';

export function App() {
  return (
    <ThemeProvider theme={theme['purple']}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
