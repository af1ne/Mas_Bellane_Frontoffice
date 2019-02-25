import React, { Component } from 'react';
import styled from 'styled-components';

import BurgerMenu from './commun/BurgerMenu';
import MainMenu from './commun/MainMenu';
import Cover from './screen/Cover';
import Place from './screen/Place';
import Rooms from './screen/Rooms';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

class Home extends Component {
  render() {
    return (
      <div id='home'>
        <Cover />
        <BurgerMenu />
        <MainMenu />
        <Place />
        <Rooms />
      </div>
    );
  }
}

export default Home;
