import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const CommercialRental = ({ data }) => (
  <Layout>
    <Head pageTitle={data.commercialrentalJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.commercialrentalJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

CommercialRental.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CommercialRental;

export const query = graphql`
  query CommercialRentalQuery {
    commercialrentalJson {
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
