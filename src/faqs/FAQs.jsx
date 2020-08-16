import React from 'react';
import styled from '@emotion/styled';

import { SectionBase } from '../common-styles';
import SectionTitle from '../SectionTitle';
import { SectionLeftColumn, SectionRightColumn, SectionContent } from './style';
import {Accordion, AccordionItem} from 'react-light-accordion';
import './index.css';


const Container = styled('div')`
  background-color: #38227D;
  ${SectionBase({
    heightPx: 700,
    extHeightPx: 4096,
    //backgroundImage: `url(${FAQGradient}), url(${FAQGradientExt})`,
    //backgroundIpadImage: `url(${FAQGradient}), url(${FAQGradientExt})`
  })};
`;

const FAQContainer = styled('div')`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1260px) {
    flex-direction: row;
  }
`;

const FAQColumn = styled('div')`
  flex-grow: 1;
  flex-basis: 0;
  @media screen and (min-width: 1260px) {
    margin-right: 25px;
    :last-child {
      margin-right: 0;
    }
  }
`;



const Link = styled('a')`
  text-decoration: underline;
  color: #0C113D !important;
`;

const FAQImage = styled('img')`
  position: absolute;
  top: 4em;
  bottom: 4m;
  display: none;
  width: 20%;
  height: relative;
  @media screen and (min-width: 1050px) {
    display: block;
    width: 450px
    height: auto;
  }
`;

export default ({ id, titleColor }) => (
  <Container id={id}>

    <SectionContent columns = {true}>
      <SectionLeftColumn>
        <FAQImage src = {require('./faq.png')} />
      </SectionLeftColumn>

      <SectionRightColumn>
        <SectionTitle titleColor={titleColor}>{' '}FAQs</SectionTitle>
        <br/><br/>
      <FAQContainer>

        <FAQColumn>

          <Accordion atomic={true}>
            <AccordionItem title = "Can I register for MAIS Hacks?">
            <p> Anyone can participate! Cegep, undergraduates, Masters, and PhD students are all welcome. </p>
            </AccordionItem>

            <AccordionItem title = "How many people can I have on my team?">
            <p>You can form teams of up to 4 people with no restrictions on
            school, province, or experience level.</p>
            </AccordionItem>

            <AccordionItem title = "I'll need help to form a team!">
            <p>We will be having a team formation channel on Microsoft Teams for you to
            get in contact with anyone who may also be looking for a team!
            Additionally, we will be having a team formation Facebook Group before the hackathon.</p>
            </AccordionItem>

            <AccordionItem title = "I am new to AI. Can I still participate?">
            <p>Yes - all skill levels are welcome at MAIS Hacks. More importantly,
            we aim to provide a super-condensed - and fun - learning experience!</p>
            </AccordionItem>

            <AccordionItem title = "Does it cost anything to take part?">
            <p>The event is completely free of charge.</p>
            </AccordionItem>

            <AccordionItem title = "What is the application process like?">
            <p>We're looking for creative and enthusiastic people with the skills
            to contribute to cool projects. Since this is an AI themed
            hackathon, we prefer applicants with past AI experience and projects
            - however, don't let this deter you from applying! Show us what
            makes you special and let your enthusiasm shine!</p>
            </AccordionItem>

            <AccordionItem title= "Do I need to install any software?">
            <p> We will be using {' '}
            <Link href="https://www.microsoft.com/en-US/microsoft-365/microsoft-teams/group-chat-software"
            target='_blank' rel='noopener noreferrer'>
            Microsoft Teams</Link> for the hackathon.
            While you can access the platform through a web browser,
            we encourage all hackers to install the Microsoft Teams Desktop app
            for the best experience. </p>
            </AccordionItem>

            <AccordionItem title="Do I need to create any accounts?">
            <p> You can join{' '}
            <Link href="https://www.microsoft.com/en-US/microsoft-365/microsoft-teams/group-chat-software"
            target='_blank' rel='noopener noreferrer'>
            Microsoft Teams</Link>in advance to be sure that on October 3rd you
            will be ready to hack! You will also need to create a {' '}
            <Link href = "https://devpost.com/" target='_blank' rel='noopener noreferrer'>DevPost</Link>
            account to submit your project at the end of the hackthon. </p>
            </AccordionItem>

          </Accordion>


        </FAQColumn>

      </FAQContainer>
      </SectionRightColumn>
    </SectionContent>
  </Container>
);
