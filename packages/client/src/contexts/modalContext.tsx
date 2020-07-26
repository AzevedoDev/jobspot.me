import React, { createContext, useCallback, useState, useContext } from 'react';

interface ModalContextData {
  show: boolean;
  open: () => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

const ModalProvider: React.FC = ({ children }) => {
  const [show, setShow] = useState(false);

  const open = useCallback(() => {
    setShow(true);
  }, []);

  const close = useCallback(() => {
    setShow(false);
  }, []);

  return (
    <ModalContext.Provider value={{ show, open, close }}>
      {children}
    </ModalContext.Provider>
  );
};

function useModal(): ModalContextData {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be within an ModalProvider');
  }

  return context;
}

export { ModalProvider, useModal };
