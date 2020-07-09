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

          {props.data.allContentfulProject.edges.map((edge)=>{
            return (
              <div className={projectStyles.itemsContainer}>
                <div class="ui items">
                  <div class="item">
                    <div class="image">
                      <img src={edge.node.image.file.url} />
                    </div>
                    <div class="content">
                      <a class="header">{edge.node.name}</a>
                      <div class="meta">
                        <span>{edge.node.techUsed.techUsed}</span>
                      </div>
                      <div class="description">
                        <p>
                          {documentToReactComponents(
                            edge.node.description.json
                          )}
                        </p>
                      </div>
                      <div class="extra">
                        <Link to={edge.node.githubLink}>
                          <button class="ui black basic button mini">
                            Github
                          </button>
                        </Link>
                        <Link>
                          <button class="ui green basic button mini">
                            View Live
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
         
          })}
      </Layout>
    </div>
  )
}

export default ProjectPage
