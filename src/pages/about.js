import React from "react"
import { Link } from 'gatsby';



import Layout from "./../components/layout";
import Head from '../components/head'; 

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title="about" />
        <h1>This is the about page. </h1>
        <h4>This page will have informatiion about me.</h4>
        <p>
          Want to work with me? <Link to="/contact">Reach Out.</Link>
        </p>
        
      </Layout>
    </div>
  )
}

export default AboutPage
