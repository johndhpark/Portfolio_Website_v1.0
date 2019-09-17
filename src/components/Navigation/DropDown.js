import React from "react";
import styled from "styled-components";
import Backdrop from "../Section/Backdrop";
import NavItems from "./NavItems";

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  height: 350px;
  left: 0;
  top: 3.4em;
  z-index: 100;
  padding: 25px;
  background: white;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;

  &.open {
    transform: translateY(0%);
  }

  &.closed {
    transform: translateY(-150%);
  }
`;

const DropDown = props => {
  const { open, closed } = props;
  let openStatus = "closed";
  if (open) openStatus = "open";

  return (
    <>
      <Backdrop show={open} clicked={closed} />
      <Nav
        id="dropdown"
        className={openStatus}
        onClick={closed}
        onKeyPress={closed}
      >
        <NavItems classType="drop-down" />
      </Nav>
    </>
  );
};

export default DropDown;
