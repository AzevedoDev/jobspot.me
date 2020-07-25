import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Header from './Header';

const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Sidebar />
      <Main>
        <Topbar />
        <Header />
        <Content>{children}</Content>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;

  background: #f3f3f3;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Content = styled.div`
  margin-left: 25px;
`;

export default Layout;
