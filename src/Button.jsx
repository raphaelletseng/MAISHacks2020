import styled from '@emotion/styled';

import { ShadowItem, TitleFont } from './common-styles';

export default styled('a')`
  ${TitleFont};
  padding: 16px 32px;
  color: white;
  display: inline-block;
  margin-top: 8px;
  text-decoration: none;
  text-transform: uppercase;
  /* Todo convert to em */
  font-size: 16px;
  line-height: 20px;
  font-weight: bold;
  min-width: 180px;
  text-align: center;
  ${props => ShadowItem({ radius: 26, ...props.material })};
  :hover {
    transform: scale(1.05);
  }
  :active {
    transform: scale(0.95);
  }
  /* Hack-y solution to center button */
  @media screen and (min-width: 480px) {
    margin-left: ${props => (props.landing ? '5%' : '10%')};
  }
`;
