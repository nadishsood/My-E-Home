/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

 require("dotenv").config({
   path: `.env.${process.env.NODE_ENV}`,
 })

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Nadish Sood",
    author: "Nadish Sood",
  },
  plugins: [
    `gatsby-plugin-less`, 
    "gatsby-plugin-react-helmet", 
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `sa0foq86s27q`,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
