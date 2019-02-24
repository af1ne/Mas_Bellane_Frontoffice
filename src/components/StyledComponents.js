import styled from 'styled-components';
import { createGlobalStyle, ThemeProvider } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'red')};
  }
`

export const colors = {
  red: '#8e0915',
  lightGrey: '#eaeaea',
  lightGreen: '#abcfbe',
  darkGreen: '#718f94',
  white: '#FFFFFF',
  black: '#000000',
  blue: '#545775'
};

// ********* Titles ***********

export const Title = styled.h1`
  font-family: 'Bentham'
  color: ${colors.black}
  padding: 1em;
  justify-content: center,

`;

