import styled from 'styled-components';

export const Colors = {
  red: '#8e0915',
  lightGrey: '#eaeaea',
  lightGreen: '#abcfbe',
  darkGreen: '#718f94',
  white: '#FFFFFF',
  whiteTransparent: 'rgba(255, 255, 255, 0.10)',
  black: '#000000',
  blue: '#545775'
};

export const BoxShadows = styled.div`
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
`;

// ********* Titles ***********

export const Title = styled.h1`
  font-family: 'Bentham';
  color: ${Colors.black};
  padding: 1em;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 550;

`;

