import React from 'react';
// import styled from "styled-components";
import { mobileThresholdPixels, colors } from '../StyledComponents';
import Modal from "styled-react-modal";
import BurgerMenu from './BurgerMenu';
import MainMenu from '../commun/MainMenu';
import BgdImg from '../../assets/images/background-menu.jpg';

const StyledModal = Modal.styled`
  width: 70vw;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(${colors.blackTransparent}, ${colors.blackTransparent}), url(${BgdImg});
  background-size: 100%;
  opacity: ${props => props.opacity};
  transition: opacity ease 500ms;
  border: 5px solid white;

  @media (max-width: ${mobileThresholdPixels}) {
    height: 60vh;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

class MenuModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      opacity: 0,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.afterOpen = this.afterOpen.bind(this);
    this.beforeClose = this.beforeClose.bind(this);
  }

  toggleModal(e) {
    this.setState({ isOpen: !this.state.isOpen });
  }

  afterOpen() {
    setTimeout(() => {
      this.setState({ opacity: 1 });
    });
  }

  beforeClose() {
    return new Promise(resolve => {
      this.setState({ opacity: 0 });
      setTimeout(resolve, 200);
    });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <BurgerMenu onClick={this.toggleModal} isOpen={isOpen} />
        <StyledModal
          isOpen={isOpen}
          afterOpen={this.afterOpen}
          beforeClose={this.beforeClose}
          onBackgroundClick={this.toggleModal}
          onEscapeKeydown={this.toggleModal}
          opacity={this.state.opacity}
          backgroundProps={{ opacity: this.state.opacity }}
        >
          <MainMenu />
        </StyledModal>
      </div>
    );
  }
}

export default MenuModal;