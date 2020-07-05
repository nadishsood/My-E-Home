import React from 'react';
import { Link } from 'gatsby';

import Layout from "./../components/layout"

const IndexPage = () => {
  return (

    <Layout>
      <h1>Hello</h1>
      <h4>
        I'm Nadish a full stack web developer living in Gainesville, Florida.{" "}
      </h4>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage;
