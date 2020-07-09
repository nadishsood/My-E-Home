import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby';

import headerStyles from './header.module.scss';

const Header = () => {

    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)
  return (
    <div className={headerStyles.headerContainer}>
      <div class="ui text menu">
        <div class="header item">
          <Link className={headerStyles.anchor} to="/">
            Nadish Sood
          </Link>
        </div>

        <div class="right menu">
          
          <a class="item">
            <Link className={headerStyles.anchor} to="/project">
              Projects
            </Link>
          </a>
          <a class=" item">
            <Link className={headerStyles.anchor} to="/blog">
              Blog
            </Link>
          </a>
          <a class="item">
            <Link className={headerStyles.anchor} to="/contact">
              Contact
            </Link>
          </a>

          {/* <Link to="/blog" class="item">
            Blog
          </Link>

          <Link to="/contact" class="item">
            Contact
          </Link> */}
        </div>
      </div>
      {/* <header className={headerStyles.header}>
        <h1>
          <Link className={headerStyles.title} to="/">
            {data.site.siteMetadata.title}
          </Link>
        </h1>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              to="/"
              activeClassName={headerStyles.activeNavItem}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              to="/blog"
              activeClassName={headerStyles.activeNavItem}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              to="/project"
              activeClassName={headerStyles.activeNavItem}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              to="/contact"
              activeClassName={headerStyles.activeNavItem}
            >
              Contact
            </Link>
          </li>
        </ul>
      </header> */}
    </div>
  )
}

export default Header;
