import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import ProjectList from 'components/projectlist';
import { graphql } from 'gatsby';

import AdSense from 'react-adsense';

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="small">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
    </Box>
    <Gallery items={data.homeJson.gallery} />
    <hr/>
    <AdSense.Google
        client='ca-pub-1699472970547311'
        slot='6359860180'
    />
    <hr/>
    <div style={{ height: '30vh' }} />
    <Box>
      <Title as="h2" size="small">
        Work Examples
      </Title>
    </Box>
    <ProjectList projects={data.homeJson.projects} />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        route
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      projects {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        href
      }
    }
  }
`;
