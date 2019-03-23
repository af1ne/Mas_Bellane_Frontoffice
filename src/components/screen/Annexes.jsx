import React, { Component } from 'react';
import axios from 'axios';
import { SectionContainer, TitleSection, Text, CardsContenaire } from '../StyledComponents';
import Underline from '../commun/Underline';
import RoomCard from '../cards/RoomCard';
import Button from '../commun/Button';

class Annexes extends Component {
  state = {
    dataSection: {},
    dataAnnexes: [],
  }
  componentDidMount() {
    this.getDataSection();
    this.getDataAnnex();
  }
  getDataSection = async event => {
    const response = await axios.get(`/sections`);
    this.setState({ dataSection: response.data[3] });
  }
  getDataAnnex = async event => {
    const response = await axios.get(`/annex`);
    this.setState({ dataAnnexes: response.data });
  }

  render() {
    const { dataAnnexes, dataSection } = this.state;
    return (
      <SectionContainer id='Annexes'>
        <TitleSection>
          {dataSection.title}
        </TitleSection>
        <Underline />
        <Text>
          {dataSection.content}
        </Text>
        <CardsContenaire spaceEvenly>
          {dataAnnexes.map(dataAnnex => 
          <RoomCard
            key={dataAnnex.idroom}
            title={dataAnnex.title}
            label="Réservation"
          />
          )}
        </CardsContenaire>
        <Button
          label={dataSection.textButton}
          darkGreen
          marginTopAndBottom
        />
      </SectionContainer>
    );
  }
}

export default Annexes;
