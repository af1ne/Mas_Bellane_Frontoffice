import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { colors, Title1, Title2, SectionContainer } from '../StyledComponents';
import cover from '../../assets/images/cover.jpg';
import Button from '../commun/Button';

const CoverContenainer = styled(SectionContainer)`
  height: 95vh;
`;

const TextContainer = styled.div`
  width: 60vw;
  heigth: 40vh;
  margin: auto;
  background-color: ${colors.whiteTransparent};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const BackgroundCover = styled.div`
  width: 100vw;
  heigth: 100vh;
  margin: auto;
  background-image: linear-gradient(${colors.blackTransparent}, ${colors.blackTransparent}), url(${cover});
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
`;

class Cover extends Component {
  state = {
    dataCover: {},
  }
  componentDidMount() {
    this.getDataCover();
  }
  getDataCover = async event => {
    const response = await axios.get(`/sections`);
    this.setState({ dataCover: response.data[0] });
  }

  render() {
    const { dataCover} = this.state;
    return (
        <BackgroundCover>
          <CoverContenainer id='cover'>
            <TextContainer>
              <Title1>{dataCover.title}</Title1>
              <Title2 textTransform="capitalize">{dataCover.subtitle}</Title2>
            </TextContainer>
            <Button label={dataCover.textButton} marginTopAndBottom/>
          </CoverContenainer>
        </BackgroundCover>
    );
  }
}

export default Cover;
