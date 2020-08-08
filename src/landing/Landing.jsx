import React from 'react';
import styled from '@emotion/styled';

import Home from './home-bg.svg';
//import HomeMobileTop from './home-bg-mobile-top.svg';
//import HomeMobileBottom from './home-bg-mobile-bottom.svg';
//import HomeIpad from './home-bg-ipad.svg';
import LogoImage from './maishacks-logo.png';

import { SectionBase, SecondaryText } from '../common-styles';
import { BLUE_PRESSABLE } from '../materials';
import Button from '../Button';

const Container = styled('div')`
  background-color: #38227D;
  ${SectionBase({
    heightPx: 900,
    backgroundImage: `url(${Home})`,
    //mobileBackgroundImage: `url(${HomeMobileTop}), url(${HomeMobileBottom})`,
    //backgroundIpadImage: `url(${HomeIpad})`
  })};
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
  width: 100%;
  margin-bottom: 1em;
  display: block;
  @media screen and (min-width: 480px) {
    max-width: 315px;
  }
`;

const DateText = styled('div')`
  padding-bottom: 1.5em;
`;

export default ({ id }) => (
  <Container id={id}>
    <LandingContent>
      <Logo src={LogoImage} />
      <Button
        landing
        material={BLUE_PRESSABLE}
        href="https://docs.google.com/forms/d/e/1FAIpQLSeeFnO-XfDT3Wj7NTZlc-2YD0vatLsoSzzAVbGkCeEztN2ZAw/viewform"
        target="_blank"
      >
        Apply Now!
      </Button>
    </LandingContent>
  </Container>
);
