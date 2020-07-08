import React from 'react';
import { Link } from 'gatsby';

import Layout from "./../components/layout";
import Head from '../components/head';

const IndexPage = () => {
  return (

    <Layout>
      <Head title="home"/>
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
