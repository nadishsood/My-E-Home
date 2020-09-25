import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';


import "typeface-open-sans"

import Layout from "./../components/layout";
import blogStyles from './blog.module.scss';
import Head from "../components/head";

const BlogPage = () => {

    //getting data from the content cms
  const data = useStaticQuery(graphql`
    query{
      allContentfulBlogPost(sort: {fields: publishedOn, order: DESC}){
        edges{
          node{
            title
            slug
            publishedOn(formatString: "MMMM DD YYYY")
          }
        }
      } 
    }
  `)
  return (
    <div> 
      <Layout>
        <Head title="blog" />
        <h2 className={blogStyles.header}>Blog</h2>
        <ol className={blogStyles.posts}>
          {data.allContentfulBlogPost.edges.map((edge)=>{
            return (
              <li className={blogStyles.post}>
                <Link to={`/blog/${edge.node.slug}`}>
                  <p className={blogStyles.postName}>{edge.node.title}</p>
                  <p className={blogStyles.postDate}>{edge.node.publishedOn}</p>
                </Link>
              </li>
            )
          })} 
        </ol>
      </Layout>
    </div>
  )
}

export default BlogPage
