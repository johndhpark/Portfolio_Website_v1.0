import React from "react";
import styled from "styled-components";
import Backdrop from "../Section/Backdrop";
import SideLink from "./SideLink";

const Container = styled.div`
  display: block;
  position: fixed;
  width: 100%;
  height: 350px;
  right: 0;
  top: 3.4em;
  z-index: 100;
  background-color: white;
  color: black;
  padding: 25px 15px 0;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;

  &.Open {
    transform: translateY(0%);
  }

  &.Close {
    transform: translateY(-150%);
  }
`;

const NavList = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SideDrawer = props => {
  const { open, closed } = props;

  let attachedClasses = "Close";
  if (open) {
    attachedClasses = "Open";
  }

  return (
    <>
      <Backdrop show={open} clicked={closed} />
      <Container
        className={attachedClasses}
        show={open}
        onClick={closed}
        onKeyPress={closed}
      >
        <NavList>
          <SideLink current={true} loc="#home">
            HOME
          </SideLink>
          <SideLink loc="/#about">ABOUT</SideLink>
          <SideLink loc="/#skills">SKILLS</SideLink>
          <SideLink loc="/#portfolio">PORTFOLIO</SideLink>
          <SideLink loc="/#contact">CONTACT</SideLink>
          <SideLink loc="/resume">RESUME</SideLink>
        </NavList>
      </Container>
    </>
  );
};

export default SideDrawer;
