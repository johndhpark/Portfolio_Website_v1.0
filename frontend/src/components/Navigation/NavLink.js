import React from "react";
import styled from "styled-components";

const Container = styled.li`
  cursor: pointer;
  margin-right: 25px;
  color: var(--btn-color-normal);
  font-size: 1em;

  &.menu {
    margin-right: 0;
    margin-top: 25px;
  }
`;

const BorderLink = styled.a`
  display: inline-block;
  box-sizing: border-box;
  border: 1px solid var(--btn-color-normal);
  border-radius: 4px;
  padding: 7px 12px;
  vertical-align: middle;
  transition: 0.2s ease-in-out;

  :hover {
    color: #f98780;
    border: 1px solid #f98780;
  }
`;

const LineLink = styled.a`
  position: relative;
  cursor: pointer;

  :hover {
    color: #f98780;
  }

  :before {
    position: absolute;
    content: "";
    height: 2px;
    bottom: -5px;
    left: 0;
    width: 0;
    background-color: var(--btn-color-hover);
    transition: 0.2s ease-in-out;
  }

  :hover:before {
    width: 100%;
  }
`;

const NavLink = props => {
  const { children, loc, border, className } = props;
  let link = <LineLink href={loc}>{children}</LineLink>;

  if (border) {
    link = <BorderLink href={loc}>{children}</BorderLink>;
  }

  return <Container className={className}>{link}</Container>;
};

export default NavLink;
