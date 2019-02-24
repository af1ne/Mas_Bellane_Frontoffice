import React, { Component } from 'react';

import BurgerMenu from './commun/BurgerMenu';
import MainMenu from './commun/MainMenu';
import Cover from './screen/Cover';
import Place from './screen/Place';
import Rooms from './screen/Rooms';

class Home extends Component {
  render() {
    return (
      <div id='home'>
        <BurgerMenu />
        <MainMenu />
        <Cover />
        <Place />
        <Rooms />
      </div>
    );
  }
}

export default Home;
