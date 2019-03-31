import React from 'react';
import styled from 'styled-components';
import {
  SectionContainer as OriginalSectionContainer,
  TitleSection,
  Text as OriginalText,
  fontSizes,
} from '../StyledComponents';

const SectionContainer = styled(OriginalSectionContainer)`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 0px;
`;

const Text = styled(OriginalText)`
  font-size: ${fontSizes.xs};
`;

const Footer = () => (
  <SectionContainer id="footer">
    <TitleSection>Suivez-nous</TitleSection>
    <Text>Mentions Légales</Text>
    <Text> Site réalisé par Delphine BRUNET</Text>
  </SectionContainer>
);

export default Footer;
