import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Foreclosures = ({ data }) => (
  <Layout>
    <Head pageTitle={data.foreclosuresJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.foreclosuresJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Foreclosures.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Foreclosures;

export const query = graphql`
  query ForeclosuresQuery {
    foreclosuresJson {
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
