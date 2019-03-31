import React from 'react';
import PropTypes from 'prop-types';
import { HamburgerSpring } from 'react-animated-burgers';
import styled from 'styled-components';
import { mobileThresholdPixels } from '../StyledComponents';


const Burger = styled.div`
  position: fixed;
  top: 1vh;
  left: 95vw;
  border-radius: 1rem;


  @media (max-width: ${mobileThresholdPixels}) {
    left: 83vw;
    margin-right: 2vw;
  }
`;

const BurgerMenu = ({ onClick, isOpen }) => (
  <Burger>
    <HamburgerSpring
      isActive={isOpen}
      toggleButton={onClick}
      buttonColor="rgba(0, 0, 0, 0.30)"
      barColor="white"
      buttonWidth={25}
    />
  </Burger>
);

BurgerMenu.propTypes = {
  onClick: PropTypes.func,
  isOpen: PropTypes.bool,
};

BurgerMenu.defaultProps = {
  onClick() { },
  isOpen: false,
};

export default BurgerMenu;
