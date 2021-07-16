import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Rota = ({ data }) => (
  <Layout>
    <Head pageTitle={data.rotaJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.rotaJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Rota.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Rota;

export const query = graphql`
  query RotaQuery {
    rotaJson {
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
