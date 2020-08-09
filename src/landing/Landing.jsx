import React from 'react';
import styled from '@emotion/styled';

import SectionTitle from '../SectionTitle';
import Home from './clouds.png';
//import HomeMobileTop from './home-bg-mobile-top.svg';
//import HomeMobileBottom from './home-bg-mobile-bottom.svg';
//import HomeIpad from './home-bg-ipad.svg';
import LogoImage from './logo_with_wire.png';

import { SectionBase, SecondaryText, SectionTextContent } from '../common-styles';
import { WHITE_PRESSABLE } from '../materials';
import Button from '../Button';
import { SectionLeftColumn, SectionRightColumn, SectionContent } from './style';


const Container = styled('div')`
  background-color: #38227D;
  ${SectionBase({
    heightPx: 500,
//    backgroundImage: `url(${Home})`,
    //mobileBackgroundImage: `url(${HomeMobileTop}), url(${HomeMobileBottom})`,
    //backgroundIpadImage: `url(${HomeIpad})`
  })};
  display: flex;

  @media screen and (min-width: 640px) {
    display: block;
    height: auto;
  }
`;

const Background = styled('div')`
  background-color: #38227D;
  ${SectionBase({
    backgroundImage: `url(${Home})`,
    heightPx: 300,
  })}
  position: relative;
  display: flex;
  height: 100vh;
  @media screen and (min-width: 640px) {
    display: block;
    height: auto;
  }
`;

const LandingContent = styled('div')`
  ${SecondaryText};
  font-size: 1.5em;
  margin: auto 0;
  width: 100%;
  padding-bottom: 40px;
  display: inline-block;
  @media screen and (min-width: 640px) {
    margin: 0;
    padding-top: 122px;
    padding-bottom: 0;
  }
`;

const Logo = styled('img')`
  width: 1500%;
  margin-bottom: -6em;
  display: block;
  @media screen and (min-width: 520px) {
    max-width: 415px;
  }
`;

const DateText = styled('div')`
  padding-bottom: 1.5em;
`;

export default ({id, titleColor }) => (
  <Container id = {id}>

    <SectionContent columns = {true}>
      <SectionLeftColumn>
          <Logo src = {LogoImage} />

      </SectionLeftColumn>
      <SectionRightColumn>
      <SectionTitle titleColor='white'>
      {' '}
      Coming to you DATE XX 2020!
      </SectionTitle>
        <SectionTextContent color='white'>
         Join 150 of the brightest, most innovative students across Eastern Canada for a 24hr virtual hackathon focused on artificial intelligence.
        </SectionTextContent>
        <Button
        //  landing
          material = {WHITE_PRESSABLE}
          href="https://docs.google.com/forms/d/e/1FAIpQLSeeFnO-XfDT3Wj7NTZlc-2YD0vatLsoSzzAVbGkCeEztN2ZAw/viewform"
          target="_blank"
        >
          APPLY NOW!
        </Button>
      </SectionRightColumn>
    </SectionContent>
    <Background>
  </Background>
  </Container>
);




///export default ({ id }) => (
//  <Container id={id}>
//    <LandingContent>
//      <Logo src={LogoImage} />
//      <Button
//        landing
//        material={WHITE_PRESSABLE}
//        href="https://docs.google.com/forms/d/e/1FAIpQLSeeFnO-XfDT3Wj7NTZlc-2YD0vatLsoSzzAVbGkCeEztN2ZAw/viewform"
//        target="_blank"
  //    >
  //      Apply Now!
  //    </Button>
//    </LandingContent>
//  </Container>
//);
