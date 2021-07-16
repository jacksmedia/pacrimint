import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Tapochau = ({ data }) => (
  <Layout>
    <Head pageTitle={data.tapochauJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.tapochauJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Tapochau.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Tapochau;

export const query = graphql`
  query TapochauQuery {
    tapochauJson {
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
