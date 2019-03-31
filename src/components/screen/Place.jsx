import React, { Component } from 'react';
import axios from 'axios';
// import styled from 'styled-components';
import { SectionContainer, TitleSection, Text } from '../StyledComponents';
import Underline from '../commun/Underline';
// import cover from '../../assets/images/cover.jpg';
// import food from '../../assets/images/food-min.png';
// import champ from '../../assets/images/background-menu.jpg';

class Place extends Component {
  state = {
    dataPlace: {},
  }

  componentDidMount() {
    this.getDataPlace();
  }

  getDataPlace = async () => {
    const response = await axios.get('/sections');
    this.setState({ dataPlace: response.data[1] });
  }

  render() {
    const { dataPlace } = this.state;
    return (
      <SectionContainer id="place">
        <TitleSection>{dataPlace.title}</TitleSection>
        <Underline />
        <Text>{dataPlace.content}</Text>
      </SectionContainer>
    );
  }
}

export default Place;
