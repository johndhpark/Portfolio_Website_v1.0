import React from "react";
import List from "./List";
import styled from "styled-components";

const Container = styled.div``;

const TableContainer = styled.div`
  margin-bottom: 6em;
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-row-gap: 50px;
  justify-content: center;
  align-content: center;

  @media screen and (max-width: 650px) {
    display: none;
  }
`;

const ListContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-content: center;

  @media screen and (min-width: 651px) {
    display: none;
  }
`;

const skills = {
  languages: ["JavaScript", "TypeScript", "HTML", "(S)CSS"],
  frameworks: ["React", "React Router", "Redux", "jQuery"],
  backend: ["Node", "Express", "MongoDB", "GraphQL"],
  testing: ["Mocha", "Jest", "Enzyme", "Chai"]
};

const Lists = props => {
  const { languages, frameworks, backend, testing } = skills;

  return (
    <Container>
      <TableContainer className="container-table">
        <List type="table" title="languages" items={languages} />
        <List type="table" title="frameworks/libraries" items={frameworks} />
        <List type="table" title="backend" items={backend} />
        <List type="table" title="testing" items={testing} />
      </TableContainer>
      <ListContainer>
        <List type="list" title="languages" items={languages} />
        <List type="list" title="frameworks/libraries" items={frameworks} />
        <List type="list" title="backend" items={backend} />
        <List type="list" title="testing" items={testing} />
      </ListContainer>
    </Container>
  );
};

export default Lists;
