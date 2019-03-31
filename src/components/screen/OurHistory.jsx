import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {
  SectionContainer,
  BackgroundSection,
  Container,
  TitleSection,
  Text as OriginalText,
  Subtitle,
  colors,
  mobileThresholdPixels,
  fontSizes,
  lineHeight,
} from '../StyledComponents';
import Underline from '../commun/Underline';

import portrait from '../../assets/images/chloeAure.jpg';

const AboutContainer = styled.div`
  position: absolute;
  width: 25vw;
  height: auto;
  background-color: ${colors.white};
  padding-top: 5vh;
  margin-left: 65vw;
  padding: 2rem;
  margin-top: 25vh;

  @media (max-width: ${mobileThresholdPixels}) {
    width: 75vw;
    padding-top: 0px;
    margin-left: 8vw;
    margin-right: 8vw;
    margin-top: 45vh;
    padding: 0.5rem;
  }
`;

const Text = styled(OriginalText)`
  font-size: ${fontSizes.s};
  line-height: ${lineHeight.xs};

  @media (max-width: ${mobileThresholdPixels}) {
    font-size: ${fontSizes.s};
  }
`;

class OurHistory extends Component {
  state = {
    dataOurHistory: {},
  };

  componentDidMount() {
    this.getDataOurHistory();
  }

  getDataOurHistory = async () => {
    const response = await axios.get('/sections');
    this.setState({ dataOurHistory: response.data[5] });
  };

  render() {
    const { dataOurHistory } = this.state;
    return (
      <div>
        <SectionContainer id="ourHistory">
          <Container>
            <TitleSection>{dataOurHistory.title}</TitleSection>
            <Underline />
          </Container>
        </SectionContainer>
        <BackgroundSection noFilter image={portrait} height="90vh">
          <AboutContainer>
            <Subtitle>{dataOurHistory.subtitle}</Subtitle>
            <Text>{dataOurHistory.content}</Text>
          </AboutContainer>
        </BackgroundSection>
      </div>
    );
  }
}

export default OurHistory;
