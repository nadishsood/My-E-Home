const path = require("path");

//no need anymore to generate a slug
// module.exports.onCreateNode=({node, actions})=>{
//     const { createNodeField } = actions;
//     if(node.internal.type === "MarkdownRemark"){
//         const slug = path.basename(node.fileAbsolutePath, ".md");
//         createNodeField({
//             node, 
//             name: 'slug', 
//             value: slug
//         })
//     }
// }


module.exports.createPages = async ({graphql, actions}) => {
        const { createPage } = actions
        const blogTemplate = path.resolve("./src/templates/blog.js")
        const projectTemplate = path.resolve("./src/templates/project.js")
        const res = await graphql(`
        query{
            allContentfulBlogPost {
                edges{
                    node{
                        slug
                    }
                }
            }
        } `)
         res.data.allContentfulBlogPost.edges.forEach(edge => {
           console.log("I ran")
           createPage({
             component: blogTemplate,
             path: `/blog/${edge.node.slug}`,
             context: {
               slug: edge.node.slug,
             },
           })
         })

        const pRes = await graphql(`
          query {
            allContentfulProject(sort: { fields: priority, order: ASC }) {
              edges {
                node {
                  
                  pSlug
                  
                  
                }
              }
            }
          }
        `)

        pRes.data.allContentfulProject.edges.forEach(edge => {
          console.log("I ran for project")
          createPage({
            component: projectTemplate,
            path: `/projectList/${edge.node.pSlug}`,
            context: {
              pSlug: edge.node.pSlug,
            },
          })
        })
       

    }
    


