import React from 'react';

import Header from "./../components/header";
import Footer from "./../components/footer";
import { Container } from 'semantic-ui-react';

import '../styles/index.scss';

import layoutStyles from './layout.module.scss';

const Layout = (props) =>{
    return (
      
        <div className={layoutStyles.container}>
          <div className={layoutStyles.content}>
            <Header />
            {props.children}
          </div>
          
        </div>
      
    )
}

export default Layout;