import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Head from "../components/head";

import projectStyles from './project.module.scss';

export const query = graphql`
         query($pSlug: String!) {
           contentfulProject(pSlug: { eq: $pSlug }) {
             name
             githubLink
             liveLink
             youtubeLink
             priority
             techUsed {
               techUsed
             }
             body {
               json
             }
             description {
               json
             }
           }
         }
       `

const Project = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} width={`100%`} height={`50%`} />
      },
    },
  }
  return (
    <Layout>
      <Head title={props.data.contentfulProject.name} />
      {/* <h1>{props.data.contentfulProject.name}</h1>
      <p className={projectStyles.par}>hi this is a paragraph.</p>
      {documentToReactComponents(
        props.data.contentfulProject.body.json,
        options
      )} */}
      <div className={projectStyles.container}>
        <p className={projectStyles.name}>
          {props.data.contentfulProject.name}
        </p>
        <p className={projectStyles.techUsed}>
          {props.data.contentfulProject.techUsed.techUsed}
        </p>
        <div className={projectStyles.linkContainer}>
          <button class="ui secondary basic button large">
            <a
              className={projectStyles.link}
              href={props.data.contentfulProject.githubLink}
              target="new"
            >
              Github
            </a>
          </button>
          <button class="ui positive basic button large">
            {" "}
            <a
              className={projectStyles.link}
              href={props.data.contentfulProject.liveLink}
              target="new"
            >
              View Live
            </a>{" "}
          </button>
        </div>
        <div className={projectStyles.videoContainer}>
          <iframe
            className={projectStyles.video}
            // width="80%"
            // height="60%"
            src={props.data.contentfulProject.youtubeLink}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className={projectStyles.descriptionContainer}>
          {documentToReactComponents(
            props.data.contentfulProject.body.json,
            options
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Project

//in projectListPage
//card
//title //techused //short description
//viewDetails

//in projectDetail page

//project title
//techUsed
//githubLink liveLink

//project ifrome video from videoLink

//project description from the body
