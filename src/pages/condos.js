import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Condos = ({ data }) => (
  <Layout>
    <Head pageTitle={data.condosJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.condosJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Condos.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Condos;

export const query = graphql`
  query CondosQuery {
    condosJson {
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
