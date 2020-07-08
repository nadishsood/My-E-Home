import React from "react";

import Layout from "./../components/layout";
import Head from '../components/head';



const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Head title="contact"/>
        <h1>Contact </h1>
        <p>
          This best way to reach me is via
          <a href="https://twitter.com/nadishsood" target="new">
            @nadishsood
          </a>{" "}
          on Twitter.
        </p>
        
      </Layout>
    </div>
  )
}

export default ContactPage
