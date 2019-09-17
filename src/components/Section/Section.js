import React from "react";
import styled from "styled-components";

const Container = styled.section`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid var(--border-color);
`;

const Section = props => {
  const { children, id } = props;

  return <Container id={id}>{children}</Container>;
};

export default Section;
