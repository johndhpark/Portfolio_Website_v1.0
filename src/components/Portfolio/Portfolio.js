import React from "react";
import Heading from "../Section/Heading";
import Section from "../Section/Section";
import Projects from "./Projects";

const Portfolio = props => {
  return (
    <Section id="portfolio">
      <Heading>Portfolio</Heading>
      <Projects />
    </Section>
  );
};

export default Portfolio;
