import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { graphql } from 'gatsby';

const Pwas = ({ data }) => (
  <Layout>
      <Title as="h2" size="small">
        {data.homeJson.pwacontent.childMarkdownRemark.rawMarkdownBody}
      </Title>
    <Box>
      <Title as="h1" size="small">
        Yes, they still live on your Home screen, as icons.
      </Title>
    </Box>
    <div style={{ height: '30vh' }} />
    {/*<Box>
      <Gallery items={data.homeJson.gallery} />
    </Box>*/}
  </Layout>
);

Pwas.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Pwas;

export const query = graphql`
  query PwasQuery {
    homeJson {
      title
      pwacontent {
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
    }
  }
`;
