import React from 'react';
import PropTypes from 'prop-types';
import IO from 'components/io';
import Img from 'gatsby-image';
import { Container, Title, Copy, LinkEmphasis } from './project.css';

const Project = ({ title, copy, image, cloud, href }) => (
  <IO rootMargin="-50px">
    {({ isVisible }) => (
      <Container isVisible={isVisible}>
        <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
        <figcaption>
          <Title>{title}</Title>
          <Copy>{copy}</Copy>
            <a href={href} target="_blank" rel="noopener noreferrer">
              { href.includes('https://www.j4cks.com') ? <LinkEmphasis>You Are Here</LinkEmphasis> : <LinkEmphasis>Visit Site</LinkEmphasis>}
            </a>
        </figcaption>
      </Container>
    )}
  </IO>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  cloud: PropTypes.object.isRequired,
  href: PropTypes.string.isRequired,
};

export default Project;
