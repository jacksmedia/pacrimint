import React from 'react';
import PropTypes from 'prop-types';
import { Title, Container } from './tech.css';

const Tech = ({ techs }) => (
	<Container>
		<Title>{techs}</Title>
	</Container>
);

Tech.propTypes = {
  techs: PropTypes.string.isRequired
};

export default Tech;