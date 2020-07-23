import React from 'react';

import { graphql, useStaticQuery, Link } from "gatsby";
import "typeface-open-sans";
import "@acidwave/typeface-marck-script"

// require("@acidwave/typeface-marck-script")
// import "typeface-grenze";

import Layout from "./../components/layout";
import Head from '../components/head';



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
        // <div class="item">
        //   <img class="ui avatar image" src={url} />
        //   <div class="content">
        //     <div class="header" className={indexStyles.skillName}>
        //       <span className={indexStyles.skillColor}>{node.name}</span>
        //     </div>
        //   </div>
        // </div>
        <div className={indexStyles.skill}>
          <img src={url}></img>
          <p>{node.name}</p>
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

    let count = 0;
    let category = "";
    return combinedArray.map((arr)=>{
      switch (count) {
        case 0:
          category = "Languages"
          break
        case 1:
          category = "Front-end"
          break
        case 2:
          category = "Back-end"
          break
        case 3:
          category = "Databases"
          break
        case 4:
          category = "Others"
          break
        default:
          break
      }
      count+=1;
      
      return (
       
        <div className={`${indexStyles.skillContainer}`}>

          <div className={indexStyles.categoryName}>{category}</div>
          <div className={indexStyles.innerContainer}>
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
        <span> Computer Science</span> at the{" "}
        <span>University of Florida.</span>
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

      <div className={`${indexStyles.listContainer}`}>
        {<div>{displaySkillist()}</div>}
        {/* <div className={`${indexStyles.skillContainer}`}>
          <div>Languages</div>
          <div className={indexStyles.innerContainer}>
            <div className={indexStyles.skill}>
              <img src={`github.png`}></img>
              <p>JavaScript</p>
            </div>
            <div className={indexStyles.skill}>
              <img src={`github.png`}></img>
              <p>JavaScript</p>
            </div>
          </div>
        </div>
        <div className={`${indexStyles.skillContainer}`}>
          <div>Languages</div>
          <div className={indexStyles.innerContainer}>
            <div className={indexStyles.skill}>
              <img src={`github.png`}></img>
              <p>JavaScript</p>
            </div>
            <div className={indexStyles.skill}>
              <img src={`github.png`}></img>
              <p>JavaScript</p>
            </div>
            <div className={indexStyles.skill}>
              <img src={`github.png`}></img>
              <p>JavaScript</p>
            </div>

          </div>
        </div>
        <div className={`${indexStyles.skillContainer}`}>
          <div>Languages</div>
          <div className={indexStyles.innerContainer}>
            <div className={indexStyles.skill}>
              <img src={`github.png`}></img>
              <p>JavaScript</p>
            </div>
            <div className={indexStyles.skill}>
              <img src={`github.png`}></img>
              <p>JavaScript</p>
            </div>
            <div className={indexStyles.skill}>
              <img src={`github.png`}></img>
              <p>JavaScript</p>
            </div>
            <div className={indexStyles.skill}>
              <img src={`github.png`}></img>
              <p>JavaScript</p>
            </div>
            <div className={indexStyles.skill}>
              <img src={`github.png`}></img>
              <p>JavaScript</p>
            </div>
          </div>
        </div>
        <div className={`${indexStyles.skillContainer}`}>
          <div>Languages</div>
          <div className={indexStyles.innerContainer}>
            <div className={indexStyles.skill}>
              <img src={`github.png`}></img>
              <p>JavaScript</p>
            </div>
            <div className={indexStyles.skill}>
              <img src={`github.png`}></img>
              <p>JavaScript</p>
            </div>
          </div>
        </div> */}
      </div>
    </Layout>
  )
}

export default IndexPage;






