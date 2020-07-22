import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Head from "../components/head"

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
      <h1>{props.data.contentfulProject.title}</h1>
      <p>{props.data.contentfulProject.publishedOn}</p>
      {documentToReactComponents(
        props.data.contentfulProject.body.json,
        options
      )}
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
