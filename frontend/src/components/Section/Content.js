import React from "react";
import styled from "styled-components";

const Body = styled.p`
  font-size: 1.2em;
  max-width: 1200px;
  margin: 0 auto 50px;
  padding: 25px;
  text-align: center;
  color: #0b0c0c;
`;

const Content = props => {
  const { children } = props;

  return <Body>{children}</Body>;
};

export default Content;
