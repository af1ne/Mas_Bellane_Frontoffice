import React, { Component } from 'react';
import axios from 'axios';
// import styled from 'styled-components';
import { SectionContainer, CardsContenaire, TitleSection, Text } from '../StyledComponents';
import Underline from '../commun/Underline';
import RoundCard from '../cards/RoundCard';

class Ecotourism extends Component {
  state = {
    dataEcotourism: {},
  }
  componentDidMount() {
    this.getDataEcotourism();
  }
  getDataEcotourism = async event => {
    const response = await axios.get(`/sections`);
    this.setState({ dataEcotourism: response.data[6] });
  }

  render() {
    const { dataEcotourism } = this.state;
    return (
      <SectionContainer id='Ecotourism' backgroundColor={"none"}>
        <TitleSection>{dataEcotourism.title}</TitleSection>
        <Underline />
        <Text>{dataEcotourism.content}</Text>
        <CardsContenaire>
          <RoundCard />
          <RoundCard />
          <RoundCard />
        </CardsContenaire>
      </SectionContainer>
    );
  }
}

export default Ecotourism;

