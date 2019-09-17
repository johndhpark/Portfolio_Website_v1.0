import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import Main from "../Main/Main";

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr;

  @media screen and (max-width: 1400px) {
    grid-template-columns: 1fr;
  }
`;

const Layout = props => {
  return (
    <Container className="inner">
      <Header />
      <Main />
    </Container>
  );
};

export default Layout;
