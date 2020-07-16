import React from "react";

import Layout from "../components/layout";
import Head from '../components/head';

import aboutStyles from "./about.module.scss";
import {Link } from 'gatsby';

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title="contact" />
        <div className={aboutStyles.container}>
          <section className={aboutStyles.about}>
            <h1>Hi, I'm Nadish!</h1>
            <h4>
              I'm a Computer Science graduate student at the{" "}
              <span className={aboutStyles.uniName}>University of Florida.</span>{" "}
            </h4>

            <div className={aboutStyles.content}>
              <p>
                Having a sound CS background, and an affinity to build and
                create, I have loved building projects across front-end,
                back-end, databases and user-experience design. My work can be
                seen on the <Link to="/project">projects </Link>
                section on this website or on my{" "}
                <a href="https://github.com/nadishsood" target="new">
                  github.
                </a>
              </p>
              <p>
                Apart from coding, I like to <Link to="/blog">write</Link> and
                take photos. You can find me cooking, lifting weights in the
                gym, partying with friends or wasting time on Twitter.
              </p>
              <p>
                I'll be graduating in May 2020. I'm open to opportunities in
                Software development roles for either an upcoming fall
                internship in 2020 or a full-time role in 2021.
              </p>
              {/* What I bring to the
                table:
                <ul>
                  <li>fsdfsf</li>
                  <li>fsdfsf</li>
                  <li>fsdfsf</li>
                  <li>fsdfsf</li>
                  <li>fsdfsf</li>
                </ul> */}
              <div className={aboutStyles.subContent}>
                <h5>About this website: </h5>
                <p>
                  I made this website in an attempt to consolidate my work and
                  online presence at one place. My earlier website was built on
                  Node.js, Express and used MongoDB as a database and was kind
                  of slow. However, I built this one using Gatsby.js, Contentful
                  as a headless CMS, and hosted it on Netlify. It is blazingly
                  fast as a result and I'm happy with how it came out.
                </p>
              </div>
            </div>
          </section>
          <section className={aboutStyles.sideBar}>
            {/* <div className={aboutStyles.photo}>Photo</div> */}
            {/* <div className={aboutStyles.stats}>Stats</div> */}
          </section>
        </div>
      </Layout>
    </div>
  )
}

export default AboutPage
