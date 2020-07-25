import React from 'react';

import Layout from './components/Layout';
import GlobalStyles from './styles/global';
import Jobs from './components/Jobs';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Jobs />
      </Layout>
    </>
  );
};

export default App;
