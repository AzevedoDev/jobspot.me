import React from 'react';

import Layout from './components/Layout';
import GlobalStyles from './styles/global';
import Jobs from './components/Jobs';
import ContextProvider from './contexts';
import JobModal from './components/JobModal';

const App: React.FC = () => {
  return (
    <ContextProvider>
      <GlobalStyles />
      <JobModal type="job-details" />
      <Layout>
        <Jobs />
      </Layout>
    </ContextProvider>
  );
};

export default App;
