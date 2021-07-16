import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Vacant = ({ data }) => (
  <Layout>
    <Head pageTitle={data.vacantJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.vacantJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Vacant.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Vacant;

export const query = graphql`
  query VacantQuery {
    vacantJson {
      title
      button
      email
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
