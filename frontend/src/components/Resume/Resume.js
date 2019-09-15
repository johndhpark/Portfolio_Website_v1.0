import React from "react";
import styled from "styled-components";
import resume from "../../assets/images/John_DH_Park_Resume_Frontend_Engineer.pdf";

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const Viewer = styled.embed`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Resume = props => {
  return (
    <Viewer src={resume} type="application/pdf" title="John DH. Park Resume" />
  );
};

export default Resume;
