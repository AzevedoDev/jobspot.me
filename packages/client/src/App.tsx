import React from 'react';

import Layout from './components/Layout';
import GlobalStyles from './styles/global';
import Jobs from './components/Jobs';
import ContextProvider from './contexts';

const App: React.FC = () => {
  return (
    <ContextProvider>
      <GlobalStyles />
      <Layout>
        <Jobs />
      </Layout>
    </ContextProvider>
  );
};

export default App;
