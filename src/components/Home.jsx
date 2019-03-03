import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../components/StyledComponents';
import MenuModal from './commun/MenuModal';
import Cover from './screen/Cover';
import Place from './screen/Place';
import Rooms from './screen/Rooms';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.lightGrey}
`;

class Home extends Component {
  render() {
    return (
      <div id='home'>
        <MenuModal />
          <Cover />
        <Container>
          <Place />
          <Rooms />
        </Container>
      </div>
    );
  }
}

export default Home;
