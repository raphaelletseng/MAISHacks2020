import React from 'react';
import styled from '@emotion/styled';

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

export default ({ id, titleColor }) => (
  <Container id={id}>
    <SectionTitle titleColor={titleColor}>SPONSORS</SectionTitle>
    <SectionContent columns={true}>
      <SectionLeftColumn>
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
      </SectionLeftColumn>
      <SectionRightColumn>
      </SectionRightColumn>
    </SectionContent>
  </Container>
);
