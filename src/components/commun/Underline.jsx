import React from 'react';
import styled from 'styled-components';
import { mobileThresholdPixels } from '../StyledComponents';
import underline from '../../assets/images/underline.png';

const UnderlineContainer = styled.div`
  align-self: center;
`;

const Img = styled.img`
  width: 18vw;
  margin: 0px 0px 2vh 0px;

  @media (max-width: ${mobileThresholdPixels}) {
    width: 30vw;
  }
`;

const Underline = () => (
  <UnderlineContainer >
    <Img src={underline} alt='underline' />
  </UnderlineContainer>
);

export default Underline; 