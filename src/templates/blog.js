import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

//gatsby grabs the query, runs it and provides the response as a prop to our component
// export const query = graphql`
// query($slug: String!){
//     markdownRemark(fields: {slug: {eq: $slug}}){
//         frontmatter{
//             title 
//             date
//         }
//         html
//     } 
// }`

export const query = graphql`
    query($slug: String!){
        contentfulBlogPost(slug: {eq: $slug}){
            title
            publishedOn(formatString: "MMMM Do, YYYY")
        }
    }
`



const Blog=(props)=>{
    return (
      <Layout>
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <p>{props.data.contentfulBlogPost.publishedOn}</p>
      </Layout>
    )
}

export default Blog;

 
