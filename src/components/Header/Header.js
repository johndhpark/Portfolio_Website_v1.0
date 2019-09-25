import React from "react";
import styled from "styled-components";
import Banner from "../Banner/Banner";
import ToolBar from "../Navigation/Toolbar";

const Section = styled.section`
  background: #282b34 url("../../assets/images/overlay.png");
  text-align: center;
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1401px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
  }
`;

const Header = props => {
  return (
    <Section id="header">
      <ToolBar />
      <Banner />
    </Section>
  );
};

export default Header;
