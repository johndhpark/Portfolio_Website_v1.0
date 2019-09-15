import React from "react";
import styled from "styled-components";
import resume from "../../assets/images/John_DH_Park_Resume_Frontend_Engineer.pdf";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const Viewer = styled.embed`
  width: 100%;
  height: 100%;
`;

const Resume = props => {
  return (
    <Container>
      <Viewer src={resume} title="John DH. Park Resume" />
    </Container>
  );
};

export default Resume;
