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

  &.menu {
    font-size: 1.5em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    height: 100%;
    margin: 0;
  }
`;

const NavBar = props => {
  const { className } = props;

  return (
    <NavList className={className}>
      <NavLink className={className} loc="#home">
        HOME
      </NavLink>
      <NavLink className={className} loc="#about">
        ABOUT
      </NavLink>
      <NavLink className={className} loc="#skills">
        SKILLS
      </NavLink>
      <NavLink className={className} loc="#portfolio">
        PORTFOLIO
      </NavLink>
      <NavLink className={className} loc="#contact">
        CONTACT
      </NavLink>
      <NavLink className={className} loc="/resume" border={true}>
        RESUME
      </NavLink>
    </NavList>
  );
};

export default NavBar;
