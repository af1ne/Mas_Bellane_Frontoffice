import React, { Component } from 'react';
import styled from 'styled-components';
import { colors, mobileThresholdPixels } from '../components/StyledComponents';
import MenuModal from './commun/MenuModal';
import Cover from './screen/Cover';
import Place from './screen/Place';
import Rooms from './screen/Rooms';
import Annex from './screen/Annex';

const App = styled.div`
  width: 100vw;
  margin: auto;
  background-color: ${colors.lightGrey};
  
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.lightGrey};
  width: 75vw;
  margin: auto;

  @media (max-width: ${mobileThresholdPixels}) {
    width: 67vw;
  }
`;

class Home extends Component {
  render() {
    return (
      <App id='home'>
        <MenuModal />
        <Cover />
        <Container>
          <Place />
          <Rooms />
          <Annex />
        </Container>
      </App>
    );
  }
}

export default Home;
