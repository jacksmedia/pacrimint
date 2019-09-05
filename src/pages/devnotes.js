import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Devnotes = ({ data }) => (
  <Layout>
    <Head pageTitle={data.devnotesJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.devnotesJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Devnotes.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Devnotes;

export const query = graphql`
  query DevnotesQuery {
    devnotesJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
