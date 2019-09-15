import {
  faGithub as gitHub,
  faLinkedin as linkedIn,
  faTwitter as twitter
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const SocialList = styled.ul`
  display: flex;
  justify-content: ${props => props.justifyContent || "center"};
  margin-right: 0.75em;
`;

const SocialItem = styled.li`
  margin-left: 0.75em;
`;

const Link = styled.a`
  font-size: 1.5em;

  color: rgba(255, 255, 255, 0.5);
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #f98780;
  }
`;

const Social = props => {
  const { justifyContent } = props;
  return (
    <SocialList justifyContent={justifyContent}>
      <SocialItem>
        <Link
          href="https://twitter.com/JDHP13"
          alt="https://twitter.com/JDHP13"
        >
          <FontAwesomeIcon icon={twitter} />
        </Link>
      </SocialItem>
      <SocialItem>
        <Link
          href="https://www.linkedin.com/in/johndhpark"
          alt="https://www.linkedin.com/in/johndhpark"
        >
          <FontAwesomeIcon icon={linkedIn} />
        </Link>
      </SocialItem>
      <SocialItem>
        <Link
          href="https://github.com/johndhpark"
          alt="https://github.com/johndhpark"
        >
          <FontAwesomeIcon icon={gitHub} />
        </Link>
      </SocialItem>
    </SocialList>
  );
};

export default Social;
