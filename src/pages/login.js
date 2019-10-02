import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { graphql } from 'gatsby';

import Amplify from 'aws-amplify';
import aws_exports from '../aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
Amplify.configure(aws_exports);


const Login = ({ data }) =>  (
    <Layout>
        <Box>
            <Title as="h1" size="large">Thanks for logging in!</Title>
            <p>Please check out our new booking service!</p>
            <a href="https://vcblikwbjltpkcewvr.10to8.com" data-uuid="987c636c-f963-489d-92b3-7a139cd02598">
              <Title as="h1" size="small">Schedule A Consult</Title>
            </a>
        </Box>
    </Layout>
);

Login.propTypes = {
  data: PropTypes.object.isRequired,
};

export default withAuthenticator(Login, {includeGreetings: true});

export const query = graphql`
  query LoginpageQuery {
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
