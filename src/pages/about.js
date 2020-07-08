import React from "react"
import { Link } from 'gatsby';
import {
  Grid,
  Segment,
} from 'semantic-ui-react'
import { Card, Icon } from "semantic-ui-react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "./../components/layout";
import Head from '../components/head'; 

import aboutStyles from "./about.module.scss"


const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject {
        edges {
          node {
            name
            techUsed {
              techUsed
            }
            desc {
              desc
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
  `)

  return (
    <div>
      <Layout>
        <Head title="about" />
        

        <h1>Projects</h1>

        <Grid columns={2} stackable>
          {data.allContentfulProject.edges.map((edge)=>{
            return(
              <Grid.Column>
                <div class="ui card">
                  <div class="image" className={aboutStyles.img}>
                    <img src= {edge.node.image.file.url}/>
                  </div>
                  <div class="content">
                    <div class="header" className={aboutStyles.title1}>{edge.node.name}</div>
                    <div class ="meta" className={aboutStyles.techUsed1}>{edge.node.techUsed.techUsed}</div>
                    <div class="description" className={aboutStyles.description1}>
                      {edge.node.desc.desc}
                    </div>
                  </div>
                  
                  <div class="extra content">
                    <div class="ui two buttons">
                      <button class="ui green basic button">Github</button>
                      <button class="ui red basic button">View Live</button>
                    </div>
                  </div>
                </div>
            </Grid.Column>
            )
          })}
        </Grid>
      </Layout>
    </div>
  )
}

export default AboutPage
