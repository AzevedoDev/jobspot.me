import React, { createContext, useCallback, useState, useContext } from 'react';

import { Job_job } from '../components/__generated__/Job_job.graphql';

interface JobDetailsPayload {
  type: 'job-details';
  data: Job_job;
}
interface JobDeletePayload {
  type: 'job-delete';
  id: string;
}

type Payload = JobDetailsPayload | JobDeletePayload;

interface ModalContextData {
  show: boolean;
  modalData: Payload;
  open: (payload: Payload) => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

const ModalProvider: React.FC = ({ children }) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState<Payload>({} as Payload);

  const open = useCallback((payload: Payload) => {
    if (payload) {
      setData(payload);
    }

    setShow(true);
  }, []);

  const close = useCallback(() => {
    setData({} as Payload);
    setShow(false);
  }, []);

  return (
    <ModalContext.Provider value={{ show, open, close, modalData: data }}>
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
