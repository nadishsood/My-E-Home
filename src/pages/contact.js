import React from "react";

import Layout from "./../components/layout";
import Head from '../components/head';

import contactStyles from "./contact.module.scss"




const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Head title="contact" />
        <h1>Contact </h1>
        <div class="ui list">
          <div class="item">
            <img class="ui avatar image" src={"/gmail.png"} />
            <div class="content">
              <a class="header">
                <span className={contactStyles.txt}>
                  nadishsood1996@gmail.com
                </span>
              </a>
            </div>
          </div>
          <br />
          <div class="item">
            <img class="ui avatar image" src={"/linkedin.png"} />
            <div class="content">
              <a class="header">
                <span className={contactStyles.txt}>
                  linkedin.com/in/nadishsood
                </span>
              </a>
            </div>
          </div>
          <br />
          <div class="item">
            <img class="ui avatar image" src={"/github.png"} />
            <div class="content">
              <a class="header">
                <span className={contactStyles.txt}>github.com/nadishsood</span>
              </a>
            </div>
          </div>
          <br />
          <div class="item">
            <img class="ui avatar image" src={"/twitter.png"} />
            <div class="content">
              <a class="header">
                <span className={contactStyles.txt}>
                  twitter.com/nadishsood
                </span>
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default ContactPage
