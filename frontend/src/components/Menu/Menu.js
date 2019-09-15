import React from "react";
import styled from "styled-components";
import rocket from "../../assets/images/rocket.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub as gitHub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin as linkedIn } from "@fortawesome/free-brands-svg-icons";

const Container = styled.header`
  background: #282b34 url("../../assets/images/overlay.png");
  text-align: right;
  padding: 8em 3em;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;

  @media screen and (max-width: 1399px) {
    display: none;
  }
`;

const Middle = styled.div`
  padding-top: 6em;
  margin-bottom: 3em;
  position: fixed;
`;

const Icon = styled.img`
  height: 75px;
  width: 75px;
  margin: 0 0 1.5em;

  @media screen and (max-width: 785px) {
    display: none;
  }
`;

const Name = styled.h1`
  color: #fff;
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
  margin-bottom: 25px;

  @media screen and (max-width: 585px) {
    display: none;
  }
`;

const SocialList = styled.ul`
  display: flex;
  justify-content: flex-end;
`;

const SocialItem = styled.li``;

const Link = styled.a`
  margin-left: 0.75em;
  font-size: 1.5em;

  color: rgba(255, 255, 255, 0.5);
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #f98780;
  }
`;

const Menu = props => {
  return (
    <Container id="home" className="menu">
      <Middle>
        <Icon src={rocket} />
        <Name className="name">JOHN DH PARK</Name>
        <Title className="job-title">Front-End Engineer</Title>
        <Headline>
          Using cutting-edge web technologies to improve <br />
          the lives of others one day at a time
        </Headline>
        <SocialList>
          <SocialItem>
            <Link
              href="https://www.linkedin.com/in/johndhpark"
              alt="https://www.linkedin.com/in/johndhpark"
            >
              <FontAwesomeIcon icon={linkedIn} />
            </Link>
          </SocialItem>
          <SocialItem>
            <Link
              href="https://github.com/johndhpark"
              alt="https://github.com/johndhpark"
            >
              <FontAwesomeIcon icon={gitHub} />
            </Link>
          </SocialItem>
        </SocialList>
      </Middle>
    </Container>
  );
};

export default Menu;
