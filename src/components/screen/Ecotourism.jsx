import React, { Component } from 'react';
import axios from 'axios';
// import styled from 'styled-components';
import { SectionContainer, CardsContenaire, TitleSection, Text } from '../StyledComponents';
import Underline from '../commun/Underline';

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
      <SectionContainer id='Ecotourism'>
        <TitleSection>{dataEcotourism.title}</TitleSection>
        <Underline />
        <Text>{dataEcotourism.content}</Text>
        <CardsContenaire>

        </CardsContenaire>
      </SectionContainer>
    );
  }
}

export default Ecotourism;

