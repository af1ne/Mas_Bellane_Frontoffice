import React, { Component } from 'react';
import axios from 'axios';
import {
  Container, TitleSection, BackgroundSection, Text,
} from '../StyledComponents';
import Underline from '../commun/Underline';
import Button from '../commun/Button';
import mapEarth from '../../assets/images/photos/mapEarth.jpg';

class Around extends Component {
  state = {
    dataAround: {},
  }

  componentDidMount() {
    this.getDataHostTable();
  }

  getDataHostTable = async () => {
    const response = await axios.get('/sections');
    this.setState({ dataAround: response.data[7] });
  }

  render() {
    const { dataAround } = this.state;
    return (
      <BackgroundSection image={mapEarth}>
        <Container white id="around">
          <TitleSection>{dataAround.title}</TitleSection>
          <Underline white />
          <Text center>{dataAround.content}</Text>
          <Button
            label={dataAround.textButton}
            darkGreen
            marginTopAndBottom
          />
        </Container>
      </BackgroundSection>
    );
  }
}

export default Around;
