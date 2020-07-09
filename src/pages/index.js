import React from 'react';

import { graphql, useStaticQuery, Link } from "gatsby";

import Layout from "./../components/layout";
import Head from '../components/head';
import { Container, Item } from 'semantic-ui-react';

import indexStyles from "./index.module.scss"



const IndexPage = () => {

  let data = useStaticQuery(graphql`
    query {
      allContentfulSkill {
        edges {
          node {
            name
            category
            icon {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)



  let renderIndividualSkillList =(arr)=>{
    let url="";

    return arr.map((node)=>{

      if(node.icon){
        url = node.icon.file.url;
      }
      
      
      return (
        <div className={`${indexStyles.skill} item`}>
          <img className="ui avatar image" src={url}></img>
          <div className="content">
            {/* <p className="gg">{node.name}</p> */}

            <p className="header">{node.name}</p>
          </div>
        </div>
      )
    })
  }

  let displaySkillist=()=>{
    let language = [];
    let fe = [];
    let be = [];
    let cs = [];
    let db=[];
    let combinedArray = [];

    data.allContentfulSkill.edges.map((edge)=>{
      switch (edge.node.category) {
        case "Language":
          language.push(edge.node)
          break
        case "FE":
          fe.push(edge.node)
          break;
        case "BE":
          be.push(edge.node)
          break;
        case "DB":
          db.push(edge.node)
          break;
        case "CS":
          cs.push(edge.node)
          break
        default:
          break
      }
    })
    language = language.reverse();
    fe= fe.reverse();
    be= be.reverse();
    db = db.reverse();
    cs=cs.reverse();
    combinedArray.push(language, fe, be, db, cs);


    return combinedArray.map((arr)=>{
      return (
        <div className={indexStyles.horizontalContainer}>
          <div className="ui relaxed horizontal tiny list">
            {renderIndividualSkillList(arr)}
          </div>
        </div>
      )
      
    })
    
  }
  return (
    <Layout>
      <Head title="home" />
      <h2>Hello, </h2>
      {/* <h4>
        I'm Nadish a full stack web developer living in Gainesville, Florida.{" "}
      </h4> */}
      <p className={indexStyles.intro}>
        {/* Welcome to my website. You can view my projects,  read my blogs. 
        This website is built on Gatsby and Netlify and is meant to be blazingly fast. Enjoy your experience.  */}
        I'm a CS grad student at the University of Florida. Also a software
        engineer, web developer, photographer, writer and human - in that order.
      </p>
      <p className={indexStyles.skillsHeading}>My Tech Ninja Chops </p>
      <p>{/* Need a developer? <Link to="/contact">Contact me.</Link> */}</p>
      <div className={indexStyles.container}>{displaySkillist()}</div>
      
    </Layout>
  )
}

export default IndexPage;


//skill
  //name
  //icon
  //category

//categories: My ninja skills: 
//languages: javascript, java
//front end: react, redux, react-native, html, css, jquery
//back end:Node.js, spring boot, Oauth
//databases: SQL, MongoDB
//computer science stuff: Design and Analysis of Algorithms

//make an array for each catefgory of skill after fetching all skills from cms
// and then pass each array to an individual horizontal list component and render the list there nicely and return it.



