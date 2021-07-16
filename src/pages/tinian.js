import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Tinian = ({ data }) => (
  <Layout>
    <Head pageTitle={data.tinianJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.tinianJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Tinian.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Tinian;

export const query = graphql`
  query TinianQuery {
    tinianJson {
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
