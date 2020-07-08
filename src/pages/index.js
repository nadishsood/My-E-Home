import React from 'react';

import { graphql, useStaticQuery, Link } from "gatsby";

import Layout from "./../components/layout";
import Head from '../components/head';
import { Container, Item } from 'semantic-ui-react';


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


    return arr.map((node)=>{
      console.log(node);
      
      return (
        <div className="item">
          <img
              className="ui avatar image"
              src=""
            ></img>
        <div className="content">
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
    combinedArray.push(language, fe, be, db, cs);


    return combinedArray.map((arr)=>{
      return (
        <Container>
          <div className="ui horizontal list">
             {renderIndividualSkillList(arr)}
          </div>
          <br />
          <br />
        </Container>
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
      <p>
        {/* Welcome to my website. You can view my projects,  read my blogs. 
        This website is built on Gatsby and Netlify and is meant to be blazingly fast. Enjoy your experience.  */}
        I'm a CS grad student at the University of Florida. Also a software
        engineer, web developer, photographer, writer and human - in that order.
      </p>
      <p>This is the tech that I work with: </p>
      <p>{/* Need a developer? <Link to="/contact">Contact me.</Link> */}</p>
      {displaySkillist()}
      {/* <Container>

        <div className="ui horizontal list">
          <div className="item">
            <img
              className="ui avatar image"
              src="/images/avatar2/small/rachel.png"
            ></img>
            <div className="content">
              <p className="header">React</p>
            </div>
          </div>

          <div className="item">
            <img
              className="ui avatar image"
              src="/images/avatar2/small/rachel.png"
            ></img>
            <div className="content">
              <p className="header">React</p>
            </div>
          </div>
        </div>
      </Container>
      
      <Container>
        
        <div className="ui horizontal list">
          <div className="item">
            <img
              className="ui avatar image"
              src="/images/avatar2/small/rachel.png"
            ></img>
            <div className="content">
              <p className="header">React</p>
            </div>
          </div>

          <div className="item">
            <img
              className="ui avatar image"
              src="/images/avatar2/small/rachel.png"
            ></img>
            <div className="content">
              <p className="header">React</p>
            </div>
          </div>

          <div className="item">
            <img
              className="ui avatar image"
              src="/images/avatar2/small/rachel.png"
            ></img>
            <div className="content">
              <p className="header">React</p>
            </div>
          </div>

          <div className="item">
            <img
              className="ui avatar image"
              src="/images/avatar2/small/rachel.png"
            ></img>
            <div className="content">
              <p className="header">React</p>
            </div>
          </div>

          <div className="item">
            <img
              className="ui avatar image"
              src="/images/avatar2/small/rachel.png"
            ></img>
            <div className="content">
              <p className="header">React</p>
            </div>
          </div>
        </div>
      </Container> */}
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



