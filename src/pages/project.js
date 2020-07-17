import React from "react"
import { Link } from 'gatsby';

import { graphql } from "gatsby"

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
                 youtubeLink
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
    <Layout>
      <Head title="projects" />

      <h1 className={projectStyles.projectHeader}>Projects</h1>

      <p className={projectStyles.intro}>
        My projects represent work across <span>front-end</span>,{" "}
        <span> back-end</span>,<span> user-experience design</span>,{" "}
        <span> databases</span> and <span> security</span>.{" "}
      </p>

      {/* <p className={projectStyles.subIntro}>
          Below are some of my favorite projects:
        </p> */}

      {props.data.allContentfulProject.edges.map(edge => {
        return (
          <div className={`bShadow bShadow-8 ${projectStyles.cont}`}>
            <div className={projectStyles.itemsContainer}>
              <div class="ui items">
                <div class="item">
                  {/* <div class="image">
                      <img src={edge.node.image.file.url} />
                    </div> */}
                  <div class="content">
                    <div className={projectStyles.videoContainer}>
                      <iframe
                        className={projectStyles.video}
                        src={edge.node.youtubeLink}
                      ></iframe>
                    </div>
                    <a class="header">
                      <div className={projectStyles.name}>{edge.node.name}</div>
                    </a>
                    <div class="meta">
                      <div className={projectStyles.techUsed}>
                        {edge.node.techUsed.techUsed}
                      </div>
                    </div>
                    <div class="description">
                      <p className={projectStyles.desc}>
                        {documentToReactComponents(edge.node.description.json)}
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
          </div>
        )
      })}
    </Layout>
  )
}

export default ProjectPage




