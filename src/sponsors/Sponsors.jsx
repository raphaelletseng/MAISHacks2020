import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import {
  SectionBase,
  SectionContent,
  SectionLeftColumn,
  SectionRightColumn,
  SectionTextContent
} from '../common-styles';
import Button from '../Button';
import { WHITE_PRESSABLE } from '../materials';
import SectionTitle from '../SectionTitle';
import Wrnch from './wrnch_white.png';

//import SponsorLogos from './SponsorLogos';
//import SponsorGradient from './sponsors.svg';

const Container = styled('div')`
  ${SectionBase({
    heightPx: 200,
  //  backgroundImage: `url(${SponsorGradient})`,
  //  backgroundIpadImage: `url(${SponsorGradient})`
  })};
  padding-bottom: 90px;
`;

const Logo = styled('img')`
  width: 50%;
  height: auto:
  object-fit:contain;
  -webkit-user-drag:none;
`;

export const LeftCol = styled('div')`
  @media screen and (min-width: 1260px) {
    width: 400px;
    ${props =>
      props.sticky &&
      css`
        > div:first-child {
          position: sticky;
          top: 120px;
        }
      `};
  }
`;

export default ({ id, titleColor }) => (
  <Container id={id}>
    <SectionTitle titleColor={titleColor}>SPONSORS</SectionTitle>
    <SectionContent columns={true}>
      <LeftCol >
        <SectionTextContent>
          <p>A big thank you to all of our sponsors!</p>
          <p>Interested in sponsoring?</p>
          <p>
            <Button
              material={WHITE_PRESSABLE}
              href="mailto:mcgillaicontact@gmail.com"
            >
              SPONSOR  MAIS  HACKS
            </Button>
          </p>
        </SectionTextContent>
      </LeftCol>
        <Logo src={Wrnch}/>
      <SectionRightColumn>
      </SectionRightColumn>
    </SectionContent>
  </Container>
);
