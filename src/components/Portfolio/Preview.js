import React from "react";
import styled from "styled-components";
import Button from "./Button";
import img from "../../assets/images/coming-soon.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt as externalLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub as gitHub } from "@fortawesome/free-brands-svg-icons";

const Container = styled.div`
  cursor: pointer;
  position: relative;
  margin-bottom: 25px;

  width: 100%;
  height: auto;

  :hover .image {
    opacity: 0.3;
  }

  :hover .actions {
    opacity: 1;
  }

  :hover .overlay {
    background-color: #333333;
    opacity: 0.75;
  }
`;

const Thumbnail = styled.img`
  border-radius: 0.35em;
  opacity: 1;
  display: block;
  width: 100%;
  max-height: 550px;
  height: auto;
  object-fit: cover;
  transition: 0.5s ease;
  backface-visibility: hidden;
`;

const Overlay = styled.div`
  transition: all 0.2s ease-in-out;
  position: absolute;
  border-radius: 0.35em;
  display: block;
  height: 100%;
  left: 0;
  opacity: 0.8;
  top: 0;
  width: 100%;
`;

const Actions = styled.ul`
  padding-left: 15px;
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
`;

const Preview = props => {
  return (
    <Container>
      <Thumbnail className="thumb" src={img} alt="" />
      <Overlay className="overlay" />
      <Actions className="actions">
        <Button>
          <FontAwesomeIcon icon={externalLink} />
        </Button>
        <Button>
          <FontAwesomeIcon icon={gitHub} />
        </Button>
      </Actions>
    </Container>
  );
};

export default Preview;
