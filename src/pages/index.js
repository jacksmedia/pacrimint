import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
    </Box>
    <Gallery items={data.homeJson.gallery} />
    <div style={{ height: '50vh' }} />
    <IOExample
      title='j4cks.com'
      text='S3 & CloudFront hosting, Cognito auth'
    />
    <a href="https://www.fighttheban.org" target="_blank" rel="noopener noreferrer">
      <IOExample
        title='FightTheBan.org'
        text='S3 image hosting, Route53 DNS'
      />
    </a>
    <a href="http://minorityvets.org/" target="_blank" rel="noopener noreferrer">
      <IOExample
        title='MinorityVets.org'
        text='Lightsail serverless WordPress migration'
      />
    </a>
    <a href="https://jacksstorefrontdemo.azurewebsites.net/Home/Products" target="_blank" rel="noopener noreferrer">
      <IOExample
        title='🚧 OMMPOS Demo 🚧'
        text='Demo of a storefront search, .NET with Azure hosting'
      />
    </a>
    <a href="https://www.stardewdex.com" target="_blank" rel="noopener noreferrer">
      <IOExample
        title='🚧 stardewdex.com 🚧'
        text='R53/S3/Cloudfront static site hosting'
      />
    </a>
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
