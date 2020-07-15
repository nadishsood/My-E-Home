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
      <div className={headerStyles.leftTitle}>
        
            <Link className={headerStyles.title} to="/">
              {data.site.siteMetadata.title}
            </Link>
          
      </div>
      <div className={headerStyles.rightMenu}>
          <ul className={headerStyles.navList}>
            <li>
              {/* <Link
                className={headerStyles.navItem}
                to="/"
                activeClassName={headerStyles.activeNavItem}
              >
                Home
              </Link> */}
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
                to="/about"
                activeClassName={headerStyles.activeNavItem}
              >
                About
              </Link>
            </li>
          </ul>
      </div>
    </div>

  )
}

export default Header;
