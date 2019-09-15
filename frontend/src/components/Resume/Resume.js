import React from "react";
import styled from "styled-components";
import resume from "../../assets/images/John_DH_Park_Resume_Frontend_Engineer.pdf";

const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 5px;
  background-color: gray;
`;

const Viewer = styled.embed`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

const Resume = props => {
  return (
    <Container>
      <Viewer
        src={resume}
        type="application/pdf"
        title="John DH. Park Resume"
      />
    </Container>
  );
};

export default Resume;
