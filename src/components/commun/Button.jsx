import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { mobileThresholdPixels, colors, fontSizes } from '../StyledComponents';

const ButtonContainer = styled.button`
height: 5vh
border-radius: 0.6rem;
font-family: Bentham;
font-size: ${fontSizes.m};
margin: auto;
text-transform: uppercase;
background-color: ${props => (props.darkGreen ? colors.darkGreen : colors.red)};
border: none;
color: ${colors.lightGrey};
box-shadow:  0 0 4px ${colors.blackTransparent};
background-position: center;
transition: background 1s;
margin-top: ${props => (props.marginTopAndBottom ? "5vh" : "0px")};
margin-bottom: ${props => (props.marginTopAndBottom ? "5vh" : "0px")};
padding-left: 2vw;
padding-right: 2vw;

:hover {
  background: ${colors.red} radial-gradient(circle, transparent 1%, ${
  colors.red
} 1%) center/15000%;
  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
}

:active {
  background-color: ${colors.whiteTransparent};
  background-size: 100%;
  transition: background 0s;
}

@media (max-width: ${mobileThresholdPixels}) {
  font-size: ${fontSizes.s};
  }
`;

const Button = ({ onClick, label, darkGreen, marginTopAndBottom }) => (
  <ButtonContainer
    onClick={onClick}
    darkGreen={darkGreen}
    marginTopAndBottom={marginTopAndBottom}
  >
    {label}
  </ButtonContainer>
);


Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  darkGreen: PropTypes.bool,
  marginTopAndBottom: PropTypes.bool,
}

export default Button;
