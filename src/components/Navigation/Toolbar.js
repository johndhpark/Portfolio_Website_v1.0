import React, { useState } from "react";
import styled from "styled-components";
import DrawerBtn from "./DrawerBtn";
import NavBar from "./NavBar";
import DropDown from "./DropDown";

const Container = styled.nav`
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

  @media screen and (min-width: 1399px) {
    display: none;
  }
`;

const Header = props => {
  const [showDropDown, setSideDrawerIsVisible] = useState(false);

  const closeDropDown = () => {
    setSideDrawerIsVisible(false);
  };

  const dropDownToggleHandler = () => {
    setSideDrawerIsVisible(!showDropDown);
  };

  return (
    <Container id="toolbar">
      <DropDown open={showDropDown} closed={closeDropDown} />
      <NavBar />
      <DrawerBtn clicked={dropDownToggleHandler} />
    </Container>
  );
};
export default Header;
