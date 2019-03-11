import React, { Component } from 'react';
import axios from 'axios';
import { SectionContainer, TitleSection, Text, CardsContenaire } from '../StyledComponents';
import Underline from '../commun/Underline';
import RoomCard from '../cards/RoomCard';
import Button from '../commun/Button';

class Annex extends Component {
  state = {
    dataSection: {},
    dataAnnex: [],
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
    this.setState({ dataAnnex: response.data });
  }

  render() {
    const { dataAnnex, dataSection } = this.state;
    return (
      <SectionContainer id='Annex'>
        <TitleSection>
          {dataSection.title}
        </TitleSection>
        <Underline />
        <Text>
          {dataSection.content}
        </Text>
        <CardsContenaire spaceEvenly>
          {dataAnnex.map(dataAnnex => 
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
        />
      </SectionContainer>
    );
  }
}

export default Annex;
