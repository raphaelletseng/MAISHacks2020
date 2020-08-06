import { css } from '@emotion/core';
import styled from '@emotion/styled';

export const SectionLeftColumn = styled('div')`
  max-width: 500px;
  display: inline-block;
  @media screen and (min-width: 1260px) {
    width: 525px;
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

export const SectionRightColumn = styled('div')`
  flex-grow: 1;
  flex-basis: 0;
  padding-top: 20px;
  @media screen and (min-width: 640px) {
    padding-top: 40px;
  }
  @media screen and (min-width: 1260px) {
    padding-top: 0;
    padding-left: 40px;
  }
`;

export const LeftContentPadding = css`
  @media screen and (min-width: 640px) {
    padding-left: 20px;
  }
`;

const FlexProps = css`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const SectionContent = styled('div')`
  ${LeftContentPadding};
  ${props => props.columns && FlexProps};
  margin-top: 25px;
`;
