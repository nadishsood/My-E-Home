import React from 'react';

import { graphql, useStaticQuery, Link } from "gatsby";
import "typeface-open-sans";
import "@acidwave/typeface-marck-script"

// require("@acidwave/typeface-marck-script")
// import "typeface-grenze";

import Layout from "./../components/layout";
import Head from '../components/head';
import { Container, Item } from 'semantic-ui-react';
import styled from "styled-components"


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
        <div class="item">
          <img class="ui avatar image" src={url} />
          <div class="content">
            <div class="header" className={indexStyles.skillName}>
              <span className={indexStyles.skillColor}>{node.name}</span>
            </div>
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
       

        <div class="item" className={indexStyles.skillArray}>
          <div class="ui horizontal list">
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
        I share my love of software-development, technology, photography and
        writing on this website. I'm currently pursuing my master's in
        <span> Computer Science</span> at the <span>University of Florida.</span>
      </p>

      <h2 class="ui header">
        <div class="content">
          Skills
          <div class="sub header" className={indexStyles.subHeader}>
            These are the current tools I use to build full-stack web
            applications and solve problems using code.
          </div>
        </div>
      </h2>

      <div className={indexStyles.listContainer}>
        {<div class="ui middle relaxed aligned list">{displaySkillist()}</div>}
      </div>
    </Layout>
  )
}

export default IndexPage;






