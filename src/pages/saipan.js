import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Saipan = ({ data }) => (
  <Layout>
    <Head pageTitle={data.saipanJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.saipanJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Saipan.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Saipan;

export const query = graphql`
  query SaipanQuery {
    saipanJson {
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
