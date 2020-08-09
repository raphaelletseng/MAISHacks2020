import React from 'react';
import styled from '@emotion/styled';

import { SecondaryText, TitleFont } from '../common-styles';

const FAQItem = styled('div')``;

const FAQTitle = styled('h2')`
  ${TitleFont};
  font-weight: bold;
  font-size: 1.5em;
  color: #D2BBD4;
`;

const FAQText = styled('div')`
  ${SecondaryText};
  font-size: 1.1em;
`;

export default ({ title, children }) => (
  <FAQItem>
    <FAQTitle>{title}</FAQTitle>
    <FAQText>{children}</FAQText>
  </FAQItem>
);
