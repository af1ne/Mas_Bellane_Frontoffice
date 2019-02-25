import React, { Component } from 'react';
import styled from 'styled-components';
import { Colors, Title1, Title2, SectionContainer, ResponsiveImg } from '../StyledComponents';
import cover from '../../assets/images/cover.jpg';


const TextContainer = styled.div`
  width: 60vw;
  heigth: 40vh;
  margin: auto;
  background-color: ${Colors.whiteTransparent};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const FilterContainer = styled.div`
  width: 100vw;
  heigth: 100vh;
  margin: auto;
  background-color: ${Colors.black};

  position: absolute;
`;

class Cover extends Component {
  render() {
    return (
      <SectionContainer id='cover'>
        <FilterContainer>
        <ResponsiveImg src={cover} alt="Patio du Mas Bellane" />
        </FilterContainer>
        <TextContainer>
          <Title1>Bienvenue au Mas Bellane<br /> l'écotourisme au coeur de la Drôme</Title1>
          <Title2 textTransform="capitalize">Maison d’hôtes et agriculture Biologique</Title2>
        </TextContainer>
        
      </SectionContainer>
    );
  }
}

export default Cover;
