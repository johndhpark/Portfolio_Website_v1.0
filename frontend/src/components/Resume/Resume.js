import React from "react";
import styled from "styled-components";

const Viewer = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Resume = props => {
  return (
    <Viewer
      src="https://drive.google.com/file/d/1_JlDcf6oxZWmiL5VRHk6k6KqktI8SgaG/preview"
      width="640"
      height="480"
    ></Viewer>
  );
};

export default Resume;
