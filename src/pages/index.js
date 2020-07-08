import React from 'react';
import { Link } from 'gatsby';

import Layout from "./../components/layout";
import Head from '../components/head';

const IndexPage = () => {
  return (

    <Layout>
      <Head title="home"/>
      <h2>Hello, </h2>
      {/* <h4>
        I'm Nadish a full stack web developer living in Gainesville, Florida.{" "}
      </h4> */}
      <p> 
        {/* Welcome to my website. You can view my projects,  read my blogs. 
        This website is built on Gatsby and Netlify and is meant to be blazingly fast. Enjoy your experience.  */}
        I'm a CS grad student at the University of Florida. 
        Also a software engineer, web developer, photographer, writer and human - in that order. 
      </p>
      <p>This is the tech that I work with:   </p>
      <p>
        {/* Need a developer? <Link to="/contact">Contact me.</Link> */}
      </p>
    </Layout>
  )
}

export default IndexPage;
