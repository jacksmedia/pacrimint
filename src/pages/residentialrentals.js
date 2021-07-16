import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const ResidentialRentals = ({ data }) => (
  <Layout>
    <Head pageTitle={data.residentialrentalsJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.residentialrentalsJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

ResidentialRentals.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ResidentialRentals;

export const query = graphql`
  query ResidentialRentalsQuery {
    residentialrentalsJson {
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
