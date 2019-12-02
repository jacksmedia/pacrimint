import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">Learn More</Link>
      </li>
      <li>
        <a href="https://bux4jax.s3.amazonaws.com/_resume_Alexander_Jacks.pdf">Resume</a>
      </li>
    </ul>
  </Container>
);

export default Nav;
