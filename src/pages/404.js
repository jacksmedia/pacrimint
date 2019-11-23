import React from 'react';
import Box from 'components/box';
import Layout from 'components/layout';

const NotFound = () => (
  <Layout>
    <Box><h1 className="classic-404-text">&apos;404 Not Found&apos;.</h1></Box>
    <Box>You discovered a timeless www error, <a href="https://en.wikipedia.org/wiki/HTTP_404">the 404 reply</a>. Score!</Box>
  </Layout>
);

export default NotFound;
