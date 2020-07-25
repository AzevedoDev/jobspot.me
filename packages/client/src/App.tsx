import React from 'react';

import Layout from './components/Layout';
import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <h1>Hello World</h1>
      </Layout>
    </>
  );
};

export default App;
