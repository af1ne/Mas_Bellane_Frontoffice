import styled from 'styled-components';

export const margins = {
  xs: '7px',
  s: '15px',
  m: '30px',
  l: '44px',
  xl: '88px',
};

export const Colors = {
  red: '#8e0915',
  lightGrey: '#eaeaea',
  lightGreen: '#abcfbe',
  darkGreen: '#718f94',
  white: '#FFFFFF',
  whiteTransparent: 'rgba(255, 255, 255, 0.25)',
  black: '#000000',
  blackTransparent: 'rgba(0, 0, 0, 1)',
  blue: '#545775'
};

export const BoxShadows = styled.div`
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
`;

// ****************************
// ***       Titles         ***
// ****************************


export const Title1 = styled.h1`
  font-family: 'Bentham';
  color: ${props => props.colors || Colors.white};
  padding: 1em;
  justify-content: center;
  text-transform: ${props => props.textTransform || "uppercase"};
  font-weight: 550;
  text-align: center;

`;

export const Title2 = styled.h2`
  font-family: 'Montserrat';
  color: ${props => props.colors || Colors.white};
  font-weight: 500;
  padding: 1em;
  justify-content: center;
  text-transform: ${props => props.textTransform || "uppercase"};
  text-align: center;
  `;

// ****************************************
// ***       Section Containers         ***
// ****************************************

export const SectionContainer = styled.div`
  margin: auto;
  height: 100vh;
  width: 100vw;
  display: flex;
  `;

export const ResponsiveImg = styled.img`
  object-fit: cover;
  margin: auto;
  height: 100vh;
  width: 100vw;
  z-index: -2;
  position: absolute;
`;
  // background: ${Colors.pictureFilter};