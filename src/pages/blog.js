import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import Layout from "./../components/layout";
import blogStyles from './blog.module.scss';



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
        <h1>Blog</h1>
        <ol className={blogStyles.posts}>
          {data.allContentfulBlogPost.edges.map((edge)=>{
            return (
              <li className={blogStyles.post}>
                <Link to={`/blog/${edge.node.slug}`}>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.publishedOn}</p>
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