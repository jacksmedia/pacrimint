import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './button.css';

const Button = ({ children }) => <Container>{children}</Container>;

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
