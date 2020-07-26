import React from 'react';

import { ModalProvider } from './modalContext';
import { SearchProvider } from './searchContext';

const ContextProvider: React.FC = ({ children }) => (
  <ModalProvider>
    <SearchProvider>{children}</SearchProvider>
  </ModalProvider>
);

export default ContextProvider;
