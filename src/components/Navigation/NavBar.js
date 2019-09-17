import React from "react";
import NavItems from "./NavItems";
import styled from "styled-components";

const Container = styled.nav`
  @media screen and (max-width: 999px) {
    display: none;
  }
`;

const NavBar = props => {
  return (
    <Container id="navbar">
      <NavItems />
    </Container>
  );
};

export default NavBar;
