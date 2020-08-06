import React from 'react';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/core';

import { TitleFont, MAX_WIDTH } from '../common-styles';

const FooterContainer = styled('div')`
  display: block;
  background-color: #3398cc;
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
  margin: auto;
  padding-bottom: 12px;
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
  margin: 0 8px;
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
          <a
            aria-label="Contact Us"
            href="mailto:mcgillaicontact@gmail.com"
            className={jsx(iconStyle, 'icon-mail-alt')}
          />
          <a
            aria-label="Facebook"
            href="https://www.facebook.com/McGillAI/"
            target="_blank"
            rel="noopener"
            className={jsx(iconStyle, 'icon-facebook')}
          />
          <a
            aria-label="Twitter"
            href="https://twitter.com/mcgillaisociety"
            target="_blank"
            rel="noopener"
            className={jsx(iconStyle, 'icon-twitter')}
          />
          <a
            aria-label="Instagram"
            href="https://www.instagram.com/mcgillaisociety/"
            target="_blank"
            rel="noopener"
            className={jsx(iconStyle, 'icon-instagram')}
          />
          <a
            aria-label="Medium"
            href="https://medium.com/mcgill-artificial-intelligence-review"
            target="_blank"
            rel="noopener"
            className={jsx(iconStyle, 'icon-medium')}
          />
          <a
            aria-label="Github"
            href="https://github.com/McGillAISociety"
            target="_blank"
            rel="noopener"
            className={jsx(iconStyle, 'icon-github')}
          />
          <a
            aria-label="Linkedin"
            href="https://www.linkedin.com/company/mcgill-artificial-intelligence-society/"
            target="_blank"
            rel="noopener"
            className={jsx(iconStyle, 'icon-linkedin')}
          />
        </SocialLinks>
        ImplementAI {year}
      </CenterContent>
    </CenterContainer>
  </FooterContainer>
);
