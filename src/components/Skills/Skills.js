import React from "react";
import Content from "../Section/Content";
import Heading from "../Section/Heading";
import Section from "../Section/Section";
import Displays from "./Displays";
import Lists from "./Lists";

const Skills = props => {
  return (
    <Section id="skills">
      <Heading>Technical Skills</Heading>
      <Content>
        I am language-agnostic and find that each one has its strengths and
        weaknesses. I enjoy exploring these differences and coming up with an
        optimal solution (i.e. tech stack) that is appropriate for the problem
        at hand. Some of the technologies that I have recently worked with
        include:
      </Content>
      <Lists />
      <Displays />
    </Section>
  );
};

export default Skills;
