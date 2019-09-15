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
        <List type="table" title="Languages" items={languages} />
        <List type="table" title="Frameworks/Libraries" items={frameworks} />
        <List type="table" title="Backend" items={backend} />
        <List type="table" title="Testing" items={testing} />
      </TableContainer>
      <ListContainer>
        <List type="list" title="Languages" items={languages} />
        <List type="list" title="Frameworks/Libraries" items={frameworks} />
        <List type="list" title="Backend" items={backend} />
        <List type="list" title="Testing" items={testing} />
      </ListContainer>
    </Container>
  );
};

export default Lists;
