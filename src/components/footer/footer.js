import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import posed from 'react-pose';
import { Container } from './footer.css';
import Title from 'components/title';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Footer = ({ title }) => (
  <AnimatedContainer>
    <Container>
      <Link to="/">
        <Title as="h1" class="dollarbill">J. C., 2019</Title>
      </Link><br/>
        <p>All content Alexander Jacks</p>
    </Container>
  </AnimatedContainer>
);

Footer.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Footer;
