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
      <h2 className={indexStyles.hi}>Hi, I'm Nadish </h2>

      <p className={indexStyles.intro}>
        I share my love of software-development, technology, photography <br />
        and writing on this website. I'm currently pursuing my master's in <br />
        Computer Science at the University of Florida. 
      </p>
      <p className={indexStyles.skillsHeading}>My Tech Ninja Chops </p>
      <p>{/* Need a developer? <Link to="/contact">Contact me.</Link> */}</p>
      <div className={indexStyles.container}>{displaySkillist()}</div>
     
    </Layout>
  )
}

export default IndexPage;






