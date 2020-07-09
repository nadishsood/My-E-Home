import React from "react"
import { Link } from 'gatsby';
import {
  Grid,
  Segment,
} from 'semantic-ui-react'
import { Card, Icon } from "semantic-ui-react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout";
import Head from '../components/head'; 

import projectStyles from "./project.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"


export const query = graphql`
         query {
           allContentfulProject {
             edges {
               node {
                 name
                 techUsed {
                   techUsed
                 }
                 description{
                   json
                 }
                 githubLink
                 image {
                   file {
                     url
                   }
                 }
               }
             }
           }
         }
       `
const ProjectPage = (props) => {
  return (
    <div>
      <Layout>
        <Head title="projects" />

        <h1 className={projectStyles.projectHeader}>Projects</h1>
        <div className={projectStyles.itemsContainer}>
          <div class="ui items">
            <div class="item">
              <div class="image">
                <img src="/images/wireframe/image.png" />
              </div>
              <div class="content">
                <a class="header">Header</a>
                <div class="meta">
                  <span>Description</span>
                </div>
                <div class="description">
                  <p></p>
                </div>
                <div class="extra">Additional Details</div>
              </div>
            </div>
          </div>
        </div>

        <div className={projectStyles.itemsContainer}>
          <div class="ui items">
            <div class="item">
              <div class="image">
                <img src="/images/wireframe/image.png" />
              </div>
              <div class="content">
                <a class="header">Header</a>
                <div class="meta">
                  <span>Description</span>
                </div>
                <div class="description">
                  <p></p>
                </div>
                <div class="extra">Additional Details</div>
              </div>
            </div>
          </div>
        </div>
        <div className={projectStyles.itemsContainer}>

        <div class="ui items">
          <div class="item">
            <div class="image">
              <img src="/images/wireframe/image.png" />
            </div>
            <div class="content">
              <a class="header">Header</a>
              <div class="meta">
                <span>Description</span>
              </div>
              <div class="description">
                <p></p>
              </div>
              <div class="extra">Additional Details</div>
            </div>
          </div>
        </div>
        </div>
      </Layout>
    </div>
  )
}

export default ProjectPage
