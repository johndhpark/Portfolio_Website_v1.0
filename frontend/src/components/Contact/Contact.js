import React, { Component } from "react";
import styled from "styled-components";
import Content from "../Section/Content";
import Heading from "../Section/Heading";
import Section from "../Section/Section";

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

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  updateInput = (event, id) => {
    const { value } = event.target;
    this.setState((prevState, prevProps) => {
      return {
        ...prevState,
        [id]: value
      };
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));
  };

  render() {
    const { name, email, message } = this.state;

    return (
      <Section id="contact">
        <Heading>Contact</Heading>
        <Content>
          I am always open for new opportunities and projects. Don't hesitate to
          contact me and say hi.
        </Content>
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <Name
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={event => this.updateInput(event, "name")}
            />
            <Email
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={event => this.updateInput(event, "email")}
            />
            <Message
              name="message"
              id=""
              placeholder="Message"
              value={message}
              onChange={event => this.updateInput(event, "message")}
            />
            <Button className="submit" type="submit" value="Send" />
            <Button className="reset" type="reset" value="Clear" />
          </Form>
        </Container>
      </Section>
    );
  }
}

export default Contact;
