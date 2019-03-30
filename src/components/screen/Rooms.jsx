import React, { Component } from 'react';
import axios from 'axios';
import { SectionContainer, TitleSection, Text, CardsContenaire } from '../StyledComponents';
import Underline from '../commun/Underline';
import RoomCard from '../cards/RoomCard';

class Rooms extends Component {
  constructor(props) {
    super(props);
    this.rooms = React.createRef();
  }

  state = {
    dataRooms: []
  };
  componentDidMount() {
    this.getDataRooms();
  }
  getDataRooms = async event => {
    const response = await axios.get(`/rooms`);
    this.setState({ dataRooms: response.data });
  };

  render() {
    const { dataRooms } = this.state;
    return (
      <SectionContainer id='rooms'>
        <TitleSection>Les chambres</TitleSection>
        <Underline />
        <Text>
          Autour du patio central qui représente l'Air, le poumon de la
          maison distribue les 3 chambres chacune symbolisée par un élement
          naturel : l'Eau, le Terre et le Feu.
        </Text>
        <CardsContenaire>
          {dataRooms.map(dataRoom => (
            <RoomCard
              key={dataRoom.idroom}
              title={dataRoom.title}
              label='Réservation'
            />
          ))}
        </CardsContenaire>
      </SectionContainer>
    );
  }
}

export default Rooms;
