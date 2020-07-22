import React from "react"
import { Link } from "gatsby"

import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import projectListStyles from "./projectList.module.scss"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"


const ProjectPage = props => {

      const data = useStaticQuery(graphql`
        query {
          allContentfulProject(sort: { fields: priority, order: ASC }) {
            edges {
              node {
                name
                githubLink
                liveLink
                youtubeLink
                priority
                techUsed {
                  techUsed
                }
                pSlug
                body {
                  json
                }
                description {
                  json
                }
              }
            }
          }
        }
      `)
  return (
    <Layout>
      <Head title="projects" />

      <h1 className={projectListStyles.header}>Projects</h1>

      <p className={projectListStyles.intro}>
        My projects represent work across <span>front-end</span>,{" "}
        <span> back-end</span>,<span> user-experience design</span>,{" "}
        <span> databases</span> and <span> security</span>.{" "}
      </p>


      <ol className={projectListStyles.projects}>
        {data.allContentfulProject.edges.map(edge => {
          return (
            <li className={projectListStyles.project}>
              <Link to={`/projectList/${edge.node.pSlug}`}>
                <p className={projectListStyles.projectName}>
                  {edge.node.name}
                </p>
                <p className={projectListStyles.projectDesc}>
                  {documentToReactComponents(edge.node.description.json)}
                </p>
                <p className={projectListStyles.techUsed}>
                  {edge.node.techUsed.techUsed}
                </p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default ProjectPage
