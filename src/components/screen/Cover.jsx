import React, { Component } from 'react';
import styled from 'styled-components';
import { Col, colors, Title1, Title2, SectionContainer, ResponsiveImg } from '../StyledComponents';
import cover from '../../assets/images/cover.jpg';
import Button from '../commun/Button';

const TextContainer = styled.div`
  width: 60vw;
  heigth: 40vh;
  margin: auto;
  background-color: ${colors.whiteTransparent};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const BackgroundCover = styled.div`
  width: 100vw;
  heigth: 100vh;
  margin: auto;
  background-image: linear-gradient(${colors.blackTransparent}, ${colors.blackTransparent}), url(${cover});
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -10;
`;

class Cover extends Component {
  render() {
    return (
        <BackgroundCover>
          <SectionContainer id='cover'>
              <Col>
              <TextContainer>
                <Title1>Bienvenue au Mas Bellane<br /> l'écotourisme au coeur de la Drôme</Title1>
                <Title2 textTransform="capitalize">Maison d’hôtes et agriculture Biologique</Title2>
              </TextContainer>
              <Button>Réservation</Button>
            </Col>
          </SectionContainer>
        </BackgroundCover>
    );
  }
}

export default Cover;
