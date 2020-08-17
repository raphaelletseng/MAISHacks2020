import React from 'react';
import styled from '@emotion/styled';

import SectionTitle from '../SectionTitle';
import Home from './Clouds_background.png';
//import HomeMobileTop from './home-bg-mobile-top.svg';
//import HomeMobileBottom from './home-bg-mobile-bottom.svg';
//import HomeIpad from './home-bg-ipad.svg';
import LogoImage from './logo_with_wire.png';
import MobileLogo from './maishacksfull-logo.png';

import { SecondaryText, SectionTextContent, LandingSectionBase } from '../common-styles';
import { WHITE_PRESSABLE } from '../materials';
import Button from '../Button';
import { SectionLeftColumn, SectionRightColumn, SectionContent } from './style';


const Container = styled('div')`
  background-color: #38227D;
  ${LandingSectionBase({
    heightPx: 920,
    backgroundImage: `url(${Home})`,
    //mobileBackgroundImage: `url(${HomeMobileTop}), url(${HomeMobileBottom})`,
    //backgroundIpadImage: `url(${HomeIpad})`
  })};
  display: flex;

  @media screen and (min-width: 640px) {
    display: block;
    height: auto;;
  }
`;


const LandingContent = styled('div')`
  ${SecondaryText};
  font-size: 1.5em;
  margin: auto 0;
  width: 100%;
  padding-bottom: 20px;
  display: inline-block;
  @media screen and (min-width: 640px) {
    margin: 0;
    padding-top: 122px;
    padding-bottom: 0;
  }
`;

const Logo = styled('img')`
  width: 1500%;
  margin-bottom: -12em;
  display: block;
  @media screen and (min-width: 640px) {
    max-width: 415px;
    margin-bottom: 0em;

    div::after{
      content: url('maishacksfull-logo.png');

    }
  }
`;

const DateText = styled('div')`
  padding-bottom: 1.5em;
`;

export default ({id, titleColor }) => (

  <Container id = {id}>

    <SectionContent columns = {true}>
      <SectionLeftColumn>
          <Logo src={LogoImage}/>
      </SectionLeftColumn>
      <SectionRightColumn>
      <SectionTitle titleColor='white'>
      {' '}
      COMING TO YOU <br/> 3-4 OCT 2020!
      </SectionTitle>
      <br/>
        <SectionTextContent color='white'>
         <p>Join 150+ of the brightest, most innovative students across Eastern Canada
         for a 24hr virtual AI hackathon.</p>
        </SectionTextContent>
        <Button
        //  landing
          material = {WHITE_PRESSABLE}
          href="https://docs.google.com/forms/d/e/1FAIpQLSfGulENexYZyEwkKKQlAJ3dut0127AuYnPNJ826pM8Zo4yC2w/viewform"
          target="_blank"
        >
          APPLY NOW!
        </Button>
      </SectionRightColumn>
    </SectionContent>
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
