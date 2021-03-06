import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from '../components/head';


export const query = graphql`
    query($slug: String!){
        contentfulBlogPost(slug: {eq: $slug}){
            title
            publishedOn(formatString: "MMMM Do, YYYY")
            body{
                json
            }
        }
    }
`



const Blog=(props)=>{
    const options = {
        renderNode: {
            "embedded-asset-block": (node) =>{
                const alt= node.data.target.fields.title['en-US'];
                const url= node.data.target.fields.file["en-US"].url
                return <img alt={alt} src={url} width={`100%`} height={`50%`}  />
            }
        }
    }
    return (
      <Layout>
        <Head title={props.data.contentfulBlogPost.title}/>
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <p>{props.data.contentfulBlogPost.publishedOn}</p>
        {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
      </Layout>
    )
}

export default Blog;


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