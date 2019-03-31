import React from 'react';
import styled from 'styled-components';
import {
  SectionContainer as OriginalSectionContainer,
  TitleSection,
  Text as OriginalText,
  fontSizes,
} from '../StyledComponents';
import facebook from '../../assets/images/logos/facebook.svg';

const SectionContainer = styled(OriginalSectionContainer)`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 0px;
`;

const Text = styled(OriginalText)`
  font-size: ${fontSizes.xs};
`;

const A = styled.a`
  text-decoration: none;
  color: inherit;

`;

const FollowUsContainer = styled.div`
  width: 15vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Footer = () => (
  <SectionContainer id="footer">
    <FollowUsContainer>
      <TitleSection nomargin>Suivez-nous</TitleSection>
      <a href="https://www.facebook.com/lemasbellane/" target="_blank" rel="noreferrer noopener">
        <img src={facebook} alt="Logo Facebook" />
      </a>
    </FollowUsContainer>
    <Text>Mentions Légales</Text>
    <Text>
      {'Site réalisé par '}
      <A href="https://www.linkedin.com/in/delphine-brunet/" target="_blank" rel="noreferrer noopener">
        Delphine BRUNET
      </A>
    </Text>
  </SectionContainer>
);

export default Footer;
