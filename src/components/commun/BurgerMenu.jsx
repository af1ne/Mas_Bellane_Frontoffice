import React from 'react';
import styled from 'styled-components';
import { Colors } from '../StyledComponents';

const BurgerContainer = styled.div`
  height: 3rem;
  width: 3rem;
  position: stiky;
  margin-top: 0px;
  margin-right: 5%;
  margin-left: 95%;
  display: flex;
  flex-direction: column;
  justify-content: 'center';
`;

const BurgerBar = styled.div`
  height: 0.5rem;
  width: 2.5rem;
  border-radius: 0.1rem;
  background-color: ${Colors.whiteTransparent};
  margin: 0.3rem 0.3rem 0.3rem 0.3rem;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.20);
  `;
  
const BurgerMenu = () => (
  <BurgerContainer >
    <BurgerBar />
    <BurgerBar />
    <BurgerBar />
  </BurgerContainer>
);

export default BurgerMenu; 
