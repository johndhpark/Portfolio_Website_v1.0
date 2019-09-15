import React from "react";
import styled from "styled-components";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Skills from "../Skills/Skills";

const Container = styled.main`
  background-color: #f2f2f2;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 25px;
`;

const Main = props => {
  return (
    <Container>
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </Container>
  );
};

export default Main;
