import React from "react";
import styled from "styled-components";

const Container = styled.li`
  cursor: pointer;
  margin-right: 25px;
  font-size: 1em;
`;

const Link = styled.a`
  &.underline {
    position: relative;

    :hover {
      color: #f98780;
    }

    :before {
      position: absolute;
      content: "";
      height: 2px;
      bottom: -5px;
      left: 0;
      width: 0;
      background-color: var(--btn-color-hover);
      transition: 0.2s ease-in-out;
    }

    :hover:before {
      width: 100%;
    }
  }

  &.border {
    display: inline-block;
    box-sizing: border-box;
    border: 1px solid var(--btn-color-normal);
    border-radius: 4px;
    padding: 7px 12px;
    vertical-align: middle;
    transition: 0.2s ease-in-out;

    :hover {
      color: #f98780;
      border: 1px solid #f98780;
    }
  }
`;

const NavItem = props => {
  const { name, to, attr, type } = props;
  const combinedAttr = attr.join(" ");

  return (
    <Container>
      <Link href={to} className={combinedAttr} type={type}>
        {name}
      </Link>
    </Container>
  );
};

export default NavItem;
