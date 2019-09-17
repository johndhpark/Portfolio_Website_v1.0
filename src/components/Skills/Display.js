import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Svg = styled.img`
  max-width: 50px;
  max-height: 50px;
`;

const Display = props => {
  const { location } = props;

  return (
    <Container>
      <Svg src={location} />
    </Container>
  );
};

export default Display;
