import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
  margin-right: 15px;
  z-index: 500;
`;

const Link = styled.a`
  font-size: 1.5em;
  color: white;
  margin-right: 15px;
  border-radius: 4px;
  display: inline-block;
  text-align: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: var(--btn-color-hover);
  }
`;

const Button = props => {
  const { children } = props;
  return (
    <ListItem>
      <Link href="">{children}</Link>
    </ListItem>
  );
};

export default Button;
