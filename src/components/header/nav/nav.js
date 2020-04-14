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
        <Link to="/meet">Meet</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
