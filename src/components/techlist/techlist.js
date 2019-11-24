import React from 'react';
import PropTypes from 'prop-types';
import Tech from 'components/techlist/tech';
import { Container } from './techlist.css';

// <IO> uses a render prop to pass down `isVisible` and `hasBeenVisible`.
// In this example
// we only care about `isVisible` and reset the styles
// every time we scroll back up. Use `hasBeenVisible` to keep the styles
// after scrolling back up and down again.
const TechList = ({ techs }) => (
	<Container>
		<Tech techs={techs} />
	</Container>
);

TechList.propTypes = {
  techs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TechList;
