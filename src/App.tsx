import './index.css';

import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Layout from './common/components/Layout';
import Routing from './routes';

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Layout>
          <Routing />
        </Layout>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
