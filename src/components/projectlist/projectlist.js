import React from 'react';
import PropTypes from 'prop-types';
import Project from 'components/projectlist/project';
import { Container } from './projectlist.css';

// <IO> uses a render prop to pass down `isVisible` and `hasBeenVisible`.
// In this example
// we only care about `isVisible` and reset the styles
// every time we scroll back up. Use `hasBeenVisible` to keep the styles
// after scrolling back up and down again.
const ProjectList = ({ projects }) => (
	<Container>
		{projects.map((project, i) => (
			<Project {...project} key={i} />
		))}
	</Container>
);

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProjectList;
