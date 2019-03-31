import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { mobileThresholdPixels } from '../StyledComponents';
import underline from '../../assets/images/underline.png';
import underlineWhite from '../../assets/images/underlineWhite.png';

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

const Underline = ({ white }) => (
  <UnderlineContainer>
    <Img src={white ? underlineWhite : underline} alt="underline" />
  </UnderlineContainer>
);

Underline.propTypes = {
  white: PropTypes.bool,
};

Underline.defaultProps = {
  white: false,
};

export default Underline;
