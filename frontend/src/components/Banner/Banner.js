import React from "react";
import styled from "styled-components";
import rocket from "../../assets/images/rocket.svg";

const Container = styled.section`
  background: #282b34 url("../../assets/images/overlay.png");
  text-align: center;
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1401px) {
    display: none;
  }
`;

const Middle = styled.div`
  padding-top: 6em;
  margin-bottom: 3em;
`;

const Icon = styled.img`
  height: 100px;
  width: 100px;
  margin: 0 0 1.5em;

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
    <Container id="home" className="banner">
      <Middle>
        <Icon src={rocket} />
        <Name className="name">JOHN PARK</Name>
        <Title className="job-title">Front-End Engineer</Title>
        <Headline>
          Using cutting-edge web technologies to improve <br />
          the lives of others one day at a time
        </Headline>
      </Middle>
    </Container>
  );
};

export default Banner;
