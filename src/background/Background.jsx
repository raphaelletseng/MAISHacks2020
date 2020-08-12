import React from 'react';
import styled from '@emotion/styled';
import Home from './clouds.png';
import {SectionBase, LandingSectionBase} from '../common-styles';

const Container = styled('div')`
  background-color: #38227D;
  ${LandingSectionBase({
    heightPx: 500,
    backgroundImage: `url(${Home})`,
    //mobileBackgroundImage: `url(${HomeMobileTop}), url(${HomeMobileBottom})`,
    //backgroundIpadImage: `url(${HomeIpad})`
  })};
  display: flex;

  @media screen and (min-width: 640px) {
    display: block;
    height: auto;
  }
`;

export default ({id, titleColor}) => (
  <Container id = {id}>
  </Container>
);
