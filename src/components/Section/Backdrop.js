import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 50px;
  background-color: #333333;
  opacity: 0.5;
`;

const Backdrop = props => {
  const { show, children, clicked } = props;

  if (!show) return null;

  return (
    <Container className="backdrop" onClick={clicked} onKeyPress={clicked}>
      {children}
    </Container>
  );
};

export default Backdrop;
