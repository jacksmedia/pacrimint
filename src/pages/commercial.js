import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Commercial = ({ data }) => (
  <Layout>
    <Head pageTitle={data.commercialJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.commercialJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Commercial.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Commercial;

export const query = graphql`
  query CommercialQuery {
    commercialJson {
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
