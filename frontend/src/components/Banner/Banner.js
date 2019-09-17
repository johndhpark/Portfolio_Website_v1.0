import React from "react";
import rocket from "../../assets/images/rocket.svg";
import Social from "../Social/Social";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 6em;
  margin-bottom: 3em;
`;

const Icon = styled.img`
  height: 100px;
  width: 100px;
  margin: 0 0 1.5em;

  @media screen and (min-width: 1401px) {
  }

  @media screen and (max-width: 785px) {
    display: none;
  }
`;

const Name = styled.h1`
  color: white;
  font-weight: 700;
  margin-bottom: 15px;
`;

const Title = styled.h4`
  color: white;
`;

const Headline = styled.p`
  color: white;
  font-size: 1.15em;
  font-style: italic;

  @media screen and (max-width: 585px) {
    display: none;
  }
`;

const Banner = props => {
  return (
    <Container id="banner">
      <Icon src={rocket} />
      <Name>JOHN PARK</Name>
      <Title>Front-End Engineer</Title>
      <Headline>
        Using cutting-edge web technologies to improve <br />
        the lives of others one day at a time
      </Headline>
      <Social className="banner" align="center" />
    </Container>
  );
};

export default Banner;
