import React from "react";
import styled from "styled-components";
import DrawerButton from "./DrawerButton";
import NavBar from "./NavBar";

const Container = styled.header`
  height: 3.7em;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
  background: #282b34 url("../../assets/images/overlay.png");

  @media screen and (min-width: 1400px) {
    display: none;
  }
`;

const Header = props => {
  const { drawerToggleClicked } = props;

  return (
    <Container>
      <NavBar />
      <DrawerButton clicked={drawerToggleClicked} />
    </Container>
  );
};
export default Header;
