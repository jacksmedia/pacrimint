import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Title from 'components/title';
import { graphql } from 'gatsby';

import Amplify from 'aws-amplify';
import aws_exports from '../aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
Amplify.configure(aws_exports);


const Login =({ data })=>  (
    <Layout>
        <Title>Thanks for logging in!</Title>
        <p>Stay tuned for more content. . .
        </p>
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
