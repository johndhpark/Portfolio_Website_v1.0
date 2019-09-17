import React, { Component } from "react";
import styled from "styled-components";
import express from "../../assets/images/express.svg";
import graphql from "../../assets/images/graphql.svg";
import html from "../../assets/images/html.svg";
import javascript from "../../assets/images/javascript.svg";
import jquery from "../../assets/images/jquery.svg";
import mocha from "../../assets/images/mocha.svg";
import mongodb from "../../assets/images/mongodb.svg";
import node from "../../assets/images/node.svg";
import router from "../../assets/images/react-router.svg";
import react from "../../assets/images/react.svg";
import redux from "../../assets/images/redux.svg";
import sass from "../../assets/images/sass.svg";
import typescript from "../../assets/images/typescript.svg";
import Display from "./Display";

const Container = styled.div`
  margin: 0 auto;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: repeat(4, 300px);
  grid-row-gap: 30px;
  justify-items: center;
  align-items: center;
  justify-content: center;
  align-content: center;

  @media screen and (max-width: 1750px) {
    grid-template-columns: repeat(3, 300px);
    grid-row-gap: 20px;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(3, 150px);
  }

  @media screen and (max-width: 975px) {
    display: none;
  }
`;

class Displays extends Component {
  render() {
    return (
      <Container>
        <Display id="javascript" location={javascript} />
        <Display id="typescript" location={typescript} />
        <Display id="html" location={html} />
        <Display id="sass" location={sass} />
        <Display id="react" location={react} />
        <Display id="router" location={router} />
        <Display id="redux" location={redux} />
        <Display id="jquery" location={jquery} />
        <Display id="node" location={node} />
        <Display id="express" location={express} />
        <Display id="mongodb" location={mongodb} />
        <Display id="graphql" location={graphql} />
        <Display id="mocha" location={mocha} />
      </Container>
    );
  }
}

export default Displays;
