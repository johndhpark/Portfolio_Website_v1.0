import React from "react";
import styled from "styled-components";
import Preview from "./Preview";

const Article = styled.article`
  text-align: center;
  max-width: 700px;
  margin: 3.5em;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1025px) {
    max-width: 100%;
  }
`;

const Title = styled.h3`
  font-weight: 700;
  color: #e97770;
  text-transform: uppercase;
`;

const Description = styled.p`
  font-size: 1.2em;
`;

const Project = props => {
  const { name } = props;

  return (
    <Article>
      <Preview />
      <Title>{name}</Title>
      <Description>This should one an one line description.</Description>
    </Article>
  );
};

export default Project;
