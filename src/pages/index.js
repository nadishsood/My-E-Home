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
        // <div class='item'>
        //   <img class="ui avatar image" src={url}></img>
        //   <div class="content">
        //     <p class="header">{node.name}</p>
        //   </div>
        // </div>
        <div class="item" className={indexStyles.indSkill}>
          <img class="ui avatar image" src={url} />
          <div class="content">
            <div class="header" className={indexStyles.skillName}>{node.name}</div>
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
        // <div className={indexStyles.horizontalContainer}>
        //   <div className="ui horizontal tiny list">
        //     {renderIndividualSkillList(arr)}
        //   </div>
        // </div>

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
        writing on this website. I'm currently pursuing my master's in Computer
        Science at the University of Florida.
      </p>

      <h4 class="ui header">
        {/* <img src={'/skillIcon.png'} className={indexStyles.skillsImg}/> */}
        <div class="content">
          Skills
          <div class="sub header" className={indexStyles.subHeader}>
            These are the current tools I use to build full-stack web
            applications and solve problems using code.
          </div>
        </div>
      </h4>

      <p>{/* Need a developer? <Link to="/contact">Contact me.</Link> */}</p>
      {/* <div className={indexStyles.container}>{displaySkillist()}</div> */}
      {<div class="ui middle relaxed aligned list">{displaySkillist()}</div>}

      {/* <div class="ui middle relaxed aligned divided list">
        <div class="item">
          <div class="ui horizontal list">
            <div class="item">
              <img class="ui avatar image" src="/images/avatar/small/tom.jpg" />
              <div class="content">
                <div class="header">Tom</div>
                
              </div>
            </div>
            <div class="item">
              <img
                class="ui avatar image"
                src="/images/avatar/small/christian.jpg"
              />
              <div class="content">
                <div class="header">Christian Rocha</div>
                
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="ui horizontal list">
            <div class="item">
              <img class="ui avatar image" src="/images/avatar/small/tom.jpg" />
              <div class="content">
                <div class="header">Tom</div>
                
              </div>
            </div>
            <div class="item">
              <img class="ui avatar image" src="/images/avatar/small/tom.jpg" />
              <div class="content">
                <div class="header">Tom</div>
                
              </div>
            </div>
            <div class="item">
              <img class="ui avatar image" src="/images/avatar/small/tom.jpg" />
              <div class="content">
                <div class="header">Tom</div>
                
              </div>
            </div>
            <div class="item">
              <img class="ui avatar image" src="/images/avatar/small/tom.jpg" />
              <div class="content">
                <div class="header">Tom</div>
               
              </div>
            </div>
            <div class="item">
              <img
                class="ui avatar image"
                src="/images/avatar/small/christian.jpg"
              />
              <div class="content">
                <div class="header">Christian Rocha</div>
                
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="ui horizontal list">
            <div class="item">
              <img class="ui avatar image" src="/images/avatar/small/tom.jpg" />
              <div class="content">
                <div class="header">Tom</div>
                
              </div>
            </div>
            <div class="item">
              <img
                class="ui avatar image"
                src="/images/avatar/small/christian.jpg"
              />
              <div class="content">
                <div class="header">Christian Rocha</div>
                
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div class="item">
    <img class="ui avatar image" src="/images/avatar/small/daniel.jpg" />
    <div class="content">
      <a class="header">Daniel Louise</a>
    </div>
  </div>
  <div class="item">
    <img class="ui avatar image" src="/images/avatar/small/stevie.jpg" />
    <div class="content">
      <a class="header">Stevie Feliciano</a>
    </div>
  </div>
  <div class="item">
    <img class="ui avatar image" src="/images/avatar/small/elliot.jpg" />
    <div class="content">
      <a class="header">Elliot Fu</a>
    </div>
  </div> */}
    </Layout>
  )
}

export default IndexPage;






