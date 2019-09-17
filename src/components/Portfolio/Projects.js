import React from "react";
import Project from "./Project";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  grid-column-gap: 2em;

  @media screen and (max-width: 1025px) {
    grid-template-columns: 1fr;
  }
`;

const Projects = props => {
  return (
    <Container>
      <Project name="Project #1" />
      <Project name="Project #2" />
    </Container>
  );
};

export default Projects;
