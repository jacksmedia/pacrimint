import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import Notebook from 'components/notebook';

const Meet = ({ data }) => (
  <Layout>
    <Box>
      <Head pageTitle={data.meetJson.title} />
      <div
        dangerouslySetInnerHTML={{
          __html: data.meetJson.content.childMarkdownRemark.html,
        }}
      />
      <Notebook notes={data.meetJson.notes} />
    </Box>
  </Layout>
);

Meet.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Meet;

export const query = graphql`
  query MeetQuery {
    meetJson {
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
