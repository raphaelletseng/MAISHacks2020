import React from 'react';
import styled from '@emotion/styled';
import SectionTitle from '../SectionTitle';
import {
  SectionBase,
  TitleFont,
  SectionContent,
  SectionTextContent,
  PrimaryFont,
  SectionContentEvents
} from '../common-styles';

import Satellite from './satellite.png';

const Container = styled('div')`
  background-color: #38227D;
  ${SectionBase({
    heightPx: 800,
  })};
  text-align: center;
  @media screen and (max-width 520px){
    ${SectionBase({
      heightPx: 1200,
    })};
  }
`;

const Col= styled ('div')`
  width: 33.33%;
  display: inline-block;
  grid-gap: 50px;
  vertical-align: top;
  padding: 20px;
  @media screen and (max-width: 767px){
    width:100%;
  }
`;

const Card = styled ('div')`
  ${PrimaryFont}
  font-size: 1.1em;
  float: top;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
  padding: 10px 20px 10px ;
  background-color: #FFFFFF;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  border: 5px #38227D solid;
  border-color: #38227D;
  border-radius: 20px;
  box-shadow: 5px 10px #2b2b2b;

  @media screen and (max-width: 1100px){
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
  }
  @media screen and (max-width: 967px){
    width: 100%;
    padding: 0 10px 0;
    display: block;
    padding-bottom: 20px;
  }

`;

const CardTitle = styled ('div')`
  font-family: 'Montserrat-Medium', sans-serif;
  font-size: 1.8em;
  font-weight: bold;
  color: #647CBD;
  padding-top: 0.33em;
  padding-bottom: 20px;
`;

const Img = styled('img')`
  background-color: #38227D;
  width: 100%;
  margin-bottom: -6em;
  display: block;
  @media screen and (max-width: 767px) {
    max-width: 415px;
    margin-bottom: 0em;
    margin-left: -2em;
  }
`;

export default ({ id, titleColor }) => (
  <Container id={id}>
    <Col>
      <Card>
        <CardTitle> SOCIAL INTERACTION & TEAM MATCHING </CardTitle>
        Through the use of social media and communication
        platforms such as Microsoft Teams, MAIS Hacks will continue to help you
        meet new people and form new friendships. <br /><br/>

        Don't worry if you apply alone, there will be a Facebook group
        and channel dedicated to networking with your peers and team matching.
        <br/><br/>
       </Card>
      </Col>
      <Col>
       <Card>
        <CardTitle> WORKSHOPS & ACTIVITIES </CardTitle>
        Want to upgrade your toolbox? Looking for inspiration? Our live-streamed
        workshops and sponsor talks will surely help you gain knowledge and creativity.
        <br /><br/>
        If you think that a virtual hackathon is all work and no fun, think again!
        Get ready for video games, movie screenings, Easter eggs and funky prizes to be won...
        as well as surprises we can’t reveal to you just yet!
          <br/><br/>
          <br />
       </Card>
       </Col>
       <Col>
       <Card>
          <CardTitle> PROJECTS </CardTitle>
          Build an awesome AI project with your teammates!
          It will help you gain experience, opportunities, and exposure to the field of AI.
          And, as always, there will be many prizes to be won!
            <br/><br/>
       </Card>
       <Img src={Satellite}/>
      </Col>
  </Container>
);
