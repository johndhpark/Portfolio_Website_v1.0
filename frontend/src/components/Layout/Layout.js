import React, { useState } from "react";
import styled from "styled-components";
import Banner from "../Banner/Banner";
import Main from "../Main/Main";
import Menu from "../Menu/Menu";
import SideDrawer from "../Navigation/SideDrawer";
import Toolbar from "../Navigation/Toolbar";

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr;

  @media screen and (max-width: 1400px) {
    display: flex;
    flex-direction: column;
  }
`;

const Layout = props => {
  const [showSideDrawer, setSideDrawerIsVisible] = useState(false);

  const sideDrawerClosedHandler = () => {
    setSideDrawerIsVisible(false);
  };

  const sideDrawerToggleHandler = () => {
    console.log(showSideDrawer);
    setSideDrawerIsVisible(!showSideDrawer);
  };

  return (
    <Container>
      <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
      <Banner />
      <Menu />
      <Main />
      {/* <Footer /> */}
    </Container>
  );
};

export default Layout;
