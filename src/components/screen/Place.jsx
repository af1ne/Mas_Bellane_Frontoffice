import React, { Component } from 'react';
import axios from 'axios';
import Gallery from 'react-photo-gallery';
import isMobile from '../../services/isMobile';
import { SectionContainer, TitleSection, Text } from '../StyledComponents';
import Underline from '../commun/Underline';
import cover from '../../assets/images/cover.jpg';
import food from '../../assets/images/food-min.png';
import champ from '../../assets/images/background-menu.jpg';

const photos = [
  {
    src: cover,
    width: 4,
    height: 3,
  },
  {
    src: food,
    width: 16,
    height: 9,
  },
  {
    src: champ,
    width: 3,
    height: 4,
  },
  {
    src: champ,
    width: 3,
    height: 4,
  },
  {
    src: cover,
    width: 4,
    height: 3,
  },
  {
    src: food,
    width: 16,
    height: 9,
  },
];

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
        <Gallery
          photos={photos}
          columns={isMobile() ? 2 : 3}
          margin={5}
        />
      </SectionContainer>
    );
  }
}

export default Place;
