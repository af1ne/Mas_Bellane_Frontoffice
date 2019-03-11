import React from 'react';
import styled from 'styled-components';
import { mobileThresholdPixels, colors, fontSizes } from '../StyledComponents';

const ButtonContainer = styled.button`
width: 18vw;
height: 5vh
border-radius: 0.6rem;
font-family: Bentham;
font-size: ${fontSizes.m};
margin: auto;
text-transform: uppercase;
background-color: ${props => props.darkGreen ? colors.darkGreen : colors.red};
border: none;
color: ${colors.lightGrey};
box-shadow:  0 0 4px ${colors.blackTransparent};
background-position: center;
transition: background 1s;

:hover {
  background: ${colors.red} radial-gradient(circle, transparent 1%, ${colors.red} 1%) center/15000%;
  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
}

:active {
  background-color: ${colors.whiteTransparent};
  background-size: 100%;
  transition: background 0s;
}

@media (max-width: ${mobileThresholdPixels}) {
  width: 40vw;
  font-size: ${fontSizes.s};
  }
`;

const Button = ({ label, darkGreen }) => (
  <ButtonContainer darkGreen={darkGreen} >
      {label}
  </ButtonContainer>
);

export default Button; 