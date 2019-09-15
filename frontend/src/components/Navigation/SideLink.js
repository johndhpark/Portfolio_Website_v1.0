import React from "react";
import styled from "styled-components";

const Container = styled.li`
  width: 100%;
  text-align: center;
  margin-bottom: 25px;
`;

const Link = styled.a`
  font-size: 1em;
  color: #666;
  position: relative;

  :hover {
    color: var(--btn-color-hover);
  }

  :before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--btn-color-hover);
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.2s ease-in-out;
  }

  :hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

const SideLink = props => {
  const { children, loc } = props;

  return (
    <Container>
      <Link href={loc}>{children}</Link>
    </Container>
  );
};

export default SideLink;
