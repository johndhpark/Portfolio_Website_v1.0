import React, { Component } from "react";
import styled from "styled-components";
import Section from "../Section/Section";
import Heading from "../Section/Heading";
import Content from "../Section/Content";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  margin-top: 25px;
  max-width: 550px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 50px 150px 50px;
  grid-template-areas:
    "name name email email"
    "message message message message"
    ". submit reset .";

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 50px 150px 50px;
    grid-template-areas:
      "name email"
      "message message"
      ". submit reset .";
  }

  @media screen and (max-width: 575px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 50px 50px 150px 50px;
    grid-template-areas:
      "name name name name"
      "email email email email"
      "message message message message"
      ". submit reset .";
  }
`;

const Input = styled.input`
  border-radius: 0.3em;
  border: none;
  border: 1px solid var(--border-color);
  padding: 1em;
  min-width: 250px;
`;

const Name = styled(Input)`
  grid-area: name;
`;

const Email = styled(Input)`
  grid-area: email;
`;

const Message = styled.textarea`
  border: 1px solid var(--border-color);
  padding: 1em;
  resize: none;
  grid-area: message;
  border-radius: 0.35em;
`;

const Button = styled(Input)`
  text-transform: uppercase;
  cursor: pointer;
  padding: 0.8em;
  min-width: 125px;
  transition: all 0.2s ease-in;
  border: none;
  border-radius: 5px;

  &.submit {
    box-shadow: inset 0px 0px 2px 0px rgba(255, 255, 255, 0.5);
    background: #e97770 url("../../assets/images/overlay.png");
    color: white;
    grid-area: submit;

    :hover,
    :focus {
      background-color: #f98780;
    }

    :focus {
      border-radius: 0px;
    }
  }

  &.reset {
    box-shadow: inset 0 0 0 1px #dddddd;
    color: var(--text-color-section-content-light);
    grid-area: reset;

    :hover,
    :focus {
      background-color: rgba(222, 222, 222, 0.25);
    }
  }
`;

const Contact = props => {
  return (
    <Section id="contact">
      <Heading>Contact</Heading>
      <Content>
        I am always open for new opportunities and projects. Don't hesitate to
        contact me and say hi.
      </Content>
      <Container>
        <Form name="contact" className="form" method="post" netlify>
          <Name type="text" name="name" placeholder="Name" />
          <Email type="email" name="email" placeholder="Email" />
          <Message name="message" placeholder="Message" />
          <Button className="submit" type="submit" value="Send" />
          <Button className="reset" type="reset" value="Clear" />
        </Form>
      </Container>
    </Section>
  );
};

export default Contact;
