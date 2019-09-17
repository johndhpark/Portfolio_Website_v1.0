import React from "react";
import Content from "../Section/Content";
import Heading from "../Section/Heading";
import Section from "../Section/Section";

const About = props => {
  return (
    <Section id="about">
      <Heading>About Me</Heading>
      <Content>
        Hi and welcome! My name is John Park and I am a Front-End Engineer
        located in Los Angeles, California. My passion is building applications
        that are both aesthetically pleasing and technologically sound.
      </Content>
    </Section>
  );
};

export default About;
