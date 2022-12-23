import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './assets/styles/GlobalStyles';
import * as theme from './assets/styles/themes/';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Registration } from './pages/Registration';
import { PrivateRoute } from './routes/PrivateRoute';
import { Home } from './pages/Home';
import { ContentLoader } from './routes/ContentLoader';
import { Statistics } from './pages/Home/Statistics';
import { AddTransaction } from './pages/AddTransaction';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { CategoryTransactions } from './pages/CategoryTransactions';
import { EditTransaction } from './pages/EditTransaction';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme['purple']}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/" element={<ContentLoader />}>
                <Route path="/" element={<Home />}>
                  <Route path="/entradas" element={<Statistics />} />
                  <Route path="/saidas" element={<Statistics />} />
                </Route>
                <Route
                  path="/:categoryType/adicionar"
                  element={<AddTransaction />}
                />
                <Route
                  path="/:categoryType/editar"
                  element={<EditTransaction />}
                />
                <Route
                  path="/:categoryType/categoria/:categoryId"
                  element={<CategoryTransactions />}
                />
              </Route>
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
