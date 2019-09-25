import styled from "styled-components";
import NavItem from "./NavItem";
import React from "react";

const NavList = styled.ul`
  color: var(--btn-color-normal);
  text-transform: uppercase;
  height: 100%;
  z-index: 500;
  padding-left: 25px;
  display: flex;
  justify-content: center;
  align-items: center;

  &.DropDown {
    color: black;
    font-size: 1.25em;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  &.SideMenu {
    font-size: 1.5em;
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
  }
`;

const navList = [
  {
    name: "About",
    to: "#about",
    attr: ["underline"],
    type: []
  },
  {
    name: "Skills",
    to: "#skills",
    type: "menu",
    attr: ["underline"]
  },
  {
    name: "Portfolio",
    to: "#portfolio",
    type: "menu",
    attr: ["underline"]
  },
  {
    name: "Contact",
    to: "#contact",
    type: "menu",
    attr: ["underline"]
  },
  {
    name: "Resume",
    to: "/resume",
    type: "menu",
    attr: ["border"]
  }
];

const NavItems = props => {
  const { type } = props;
  const navItems = navList.map(itemInfo => {
    return <NavItem key={itemInfo.name} {...itemInfo} />;
  });

  return <NavList className={type}>{navItems}</NavList>;
};

export default NavItems;
