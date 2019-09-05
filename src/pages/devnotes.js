import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import Notebook from 'components/notebook';

const Devnotes = ({ data }) => (
  <Layout>
    <Box>
      <Head pageTitle={data.devnotesJson.title} />
      <div
        dangerouslySetInnerHTML={{
          __html: data.devnotesJson.content.childMarkdownRemark.html,
        }}
      />
      <Notebook notes={data.devnotesJson.notes} />
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
      notes {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
