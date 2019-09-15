import styled from "styled-components";
import NavLink from "./NavLink";
import React from "react";

const NavList = styled.ul`
  height: 100%;
  padding-left: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 500;
  color: white;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const NavItems = props => {
  return (
    <NavList>
      <NavLink loc="#home">HOME</NavLink>
      <NavLink loc="#about">ABOUT</NavLink>
      <NavLink loc="#skills">SKILLS</NavLink>
      <NavLink loc="#portfolio">PORTFOLIO</NavLink>
      <NavLink loc="/#contact">CONTACT</NavLink>
      <NavLink loc="/resume" border={true}>
        RESUME
      </NavLink>
    </NavList>
  );
};

export default NavItems;
