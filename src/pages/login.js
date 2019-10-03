import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Button from 'components/button';
import Title from 'components/title';
import { graphql } from 'gatsby';


const Login = ({ data }) =>  (
    <Layout>
        <Box>
          <Title>Schedule a consultation</Title>
        {/* form handling at runtime via netlify */}
          <form name="consult-contact-me" method="POST" data-netlify="true">
    				<p>
    					<label>Your Name: <input type="text" name="name" /></label>   
    				</p>
    				<p>
    					<label>Your Email or SMS: <input type="email" name="email" /></label>
    				</p>
    				<p>
    					<label>Your Goal: <select name="role[]" multiple>
    						<option value="leader">Learn More, Initial Consult</option>
    						<option value="follower">Fix / Enhance Existing Website</option>
    						<option value="leader">New Website, App</option>
    					</select>
    					</label>
    				</p>
    				<p>
    					<label>Brief Message (emojis welcome <span>✌️</span>): <textarea name="message"></textarea></label>
    				</p>
    				<p>
    					<button type="submit">Send Request</button>
    				</p>
    			</form>
        </Box>
    </Layout>
);

Login.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Login;

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