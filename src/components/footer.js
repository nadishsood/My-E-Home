import React from 'react'
import { graphql, useStaticQuery } from "gatsby";
import footerStyles from './footer.module.scss';


const Footer = () => {
     const data = useStaticQuery(graphql`
       query {
         site {
           siteMetadata {
             author
           }
         }
       }
     `)
    return (
      <footer className={footerStyles.footer}>
        <div className={footerStyles.list}>
          <ul className={footerStyles.footerList}>
            <li className={footerStyles.navItem}>
              <a
                className={footerStyles.anchor}
                href="https://github.com/nadishsood"
                target="new"
              >
                Github
              </a>
            </li>
            <li className={footerStyles.navItem}>
              <a
                className={footerStyles.anchor}
                href="mailto:nadishsood1996@gmail.com"
                target="new"
              >
                Email
              </a>
            </li>
            <li className={`${footerStyles.navItem} ${footerStyles.anchor} `}>
              832-748-4040
            </li>
            <li className={footerStyles.navItem}>
              <a
                className={footerStyles.anchor}
                href="https://www.linkedin.com/in/nadishsood/"
                target="new"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className={footerStyles.content}>
          <p>Created by {data.site.siteMetadata.author} © 2020</p>
        </div>
      </footer>
    )
}

export default Footer;


