import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './assets/styles/GlobalStyles';
import * as theme from './assets/styles/themes/';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Registration } from './pages/Registration';
import { AuthProvider } from './contexts/auth/AuthProvider';
import { Home } from './pages/Home';
import { ContentProvider } from './contexts/content/ContentProvider';
import { Statistics } from './pages/Home/Statistics';

export function App() {
  return (
    <ThemeProvider theme={theme['purple']}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthProvider />}>
            <Route path="/" element={<ContentProvider />}>
              <Route path="/" element={<Home />}>
                <Route path="/entradas" element={<Statistics />} />
                <Route path="/saidas" element={<Statistics />} />
              </Route>
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
