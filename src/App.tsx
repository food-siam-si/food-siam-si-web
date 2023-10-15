import './index.css';

import { ThemeProvider } from '@mui/material';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Layout from './common/components/Layout';
import { theme } from './common/config/theme';
import Routing from './routes';

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Layout>
            <Routing />
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
