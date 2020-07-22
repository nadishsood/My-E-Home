import React from "react"
import { Link } from "gatsby"

import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

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

      <h1>Projects</h1>

      <p>
        My projects represent work across <span>front-end</span>,{" "}
        <span> back-end</span>,<span> user-experience design</span>,{" "}
        <span> databases</span> and <span> security</span>.{" "}
      </p>

      {/* <p className={projectStyles.subIntro}>
          Below are some of my favorite projects:
        </p> */}

      <ol>
        {data.allContentfulProject.edges.map(edge => {
          return (
            <li>
              <Link to={`/projectList/${edge.node.pSlug}`}>
                <h2>{edge.node.name}</h2>
                <p>{edge.node.priority}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default ProjectPage
