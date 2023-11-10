import './index.css';

import { ThemeProvider } from '@mui/material';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';

import Layout from './common/components/Layout';
import { theme } from './common/config/theme';
import { UserProvider } from './modules/User/context/userContext';
import Routing from './routes';

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <UserProvider>
            <Layout>
              <Toaster />
              <Routing />
            </Layout>
          </UserProvider>
        </ThemeProvider>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
