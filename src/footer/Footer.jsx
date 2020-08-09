import React from 'react';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/core';

import { TitleFont, MAX_WIDTH } from '../common-styles';

const FooterContainer = styled('div')`
  display: block;
  background-color: #0C113D;
  display: flex;
  flex-direction: row;
  height: 225px;
  padding: 0;
`;

const CenterContainer = styled('div')`
  ${TitleFont};
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  color: white;
  font-weight: bold;
  max-width: ${MAX_WIDTH};
  margin: 0 auto;
  @media screen and (min-width: 320px) {
    flex-direction: row;
  }
`;

const CenterContent = styled('div')`
  flex-grow: 1;
  align-self: center;
  text-align: center;
  @media screen and (min-width: 320px) {
    width: auto;
  }
`;

const SocialLinks = styled('div')`
  color: #FFFFFF;
  margin: auto;
  padding-bottom: 12px;
  padding: 20px;
  width: 700px;
  align-items: center;
  text-align: center;
  justify-content: center;
  display: flex;
  @media screen and (min-width: 320px) {
    width: auto;
  }
`;

const footerLink = css`
  color: white;
  transition: opacity 0.2s;
  text-decoration: none;

  :hover {
    opacity: 0.8;
  }
`;

const iconStyle = css`
  font-size: 32px;
  margin: 5px 2px;
  ${footerLink};

  @media only screen and (max-width: 767px) {
    font-size: 20px !important;
  }
`;

const year = new Date().getFullYear();

export default () => (
  <FooterContainer>
    <CenterContainer>
      <CenterContent>
        <SocialLinks>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
          <a
            aria-label="Contact Us"
            href="mailto:mcgillaicontact@gmail.com"
            class="fa fa-google"
          />
          <a
            aria-label="Facebook"
            href="https://www.facebook.com/McGillAI/"
            target="_blank"
            rel="noopener"
            class="fa fa-facebook"
          />
          <a
            aria-label="Twitter"
            href="https://twitter.com/mcgillaisociety"
            target="_blank"
            rel="noopener"
            class="fa fa-twitter"
          />
          <a
            aria-label="Instagram"
            href="https://www.instagram.com/mcgillaisociety/"
            target="_blank"
            rel="noopener"
            class= "fa fa-instagram"
          />
          <a
            aria-label="Medium"
            href="https://medium.com/mcgill-artificial-intelligence-review"
            target="_blank"
            rel="noopener"
            class="fa fa-medium"
          />
          <a
            aria-label="Github"
            href="https://github.com/McGillAISociety"
            target="_blank"
            rel="noopener"
            class="fa fa-github"
          />
          <a
            aria-label="Linkedin"
            href="https://www.linkedin.com/company/mcgill-artificial-intelligence-society/"
            target="_blank"
            rel="noopener"
            class= "fa fa-linkedin"
          />
        </SocialLinks>

        MAIS Hacks {year}
      </CenterContent>
    </CenterContainer>
  </FooterContainer>
);
