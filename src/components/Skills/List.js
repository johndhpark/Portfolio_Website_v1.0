import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;

const Title = styled.h4`
  font-size: 1.38em;
  text-align: center;
  color: black;
  text-transform: uppercase;
  text-decoration: underline;
`;

const Item = styled.li`
  font-size: 1.15em;
  text-align: center;
  color: black;
  text-transform: uppercase;
`;

const Par = styled.p`
  font-size: 1.2em;
  text-align: center;
`;

const List = props => {
  const { type, items, title } = props;
  let list;

  if (type === "table") {
    let skills = items.map(item => <Item key={item}>{item}</Item>);
    list = <ul>{skills}</ul>;
  }

  if (type === "list") {
    const n = items.length;
    let str = items[0];

    for (let i = 1; i < n; i++) {
      str += `, ${items[i]}`;
    }

    list = <Par>{str}</Par>;
  }

  return (
    <Container>
      <Title>{title}</Title>
      {list}
    </Container>
  );
};

export default List;
