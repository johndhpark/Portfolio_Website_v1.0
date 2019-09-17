import React from "react";
import styled from "styled-components";

const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-transform: uppercase;
  margin-bottom: 25px;
`;

const Title = styled.h2`
  margin: 0;
  padding: 25px 0 0;
  color: #484d55;

  &:after {
    background-color: #e97770;
    display: block;
    content: "";
    width: 3.75em;
    height: 2px;
    margin: 0.5em auto;
    border-radius: 1px;
  }
`;

// const Underline = styled.hr`
//   width: 150px;
//   height: 5px;
//   margin: 1em 0;
//   box-shadow: 0 inset
//   background-color: #e97770;
// `;

const Head = props => {
  const { children } = props;
  return (
    <Container>
      <Title>{children}</Title>
      {/* <Underline /> */}
    </Container>
  );
};

export default Head;
