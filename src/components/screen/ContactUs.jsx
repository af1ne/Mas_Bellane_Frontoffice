import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {
  SectionContainer,
  CardsContenaire,
  TitleSection,
  Subtitle,
  Text as OriginalText,
  Column,
  lineHeight,
  fontSizes,
  mobileThresholdPixels,
} from "../StyledComponents";
import Underline from '../commun/Underline';
import ContactForm from '../forms/ContactForm';

const Text = styled(OriginalText)`
  line-height: ${lineHeight.m};
  font-size: ${fontSizes.m};
`;

const Iframe = styled.iframe`
  width: 30vw;
  height: 35vh;
  border: none;
  border-radius: 2rem;

  @media (max-width: ${mobileThresholdPixels}) {
    width: 75vw;
    height: 50vh;
  }
`;

class ContactUs extends Component {
  state = {
    dataContactUs: {},
  }
  componentDidMount() {
    this.getDataContactUs();
  }
  getDataContactUs = async event => {
    const response = await axios.get(`/sections`);
    this.setState({ dataContactUs: response.data[8] });
  }

  render() {
    const { dataContactUs } = this.state;
    return (
      <SectionContainer
        id='ContactUs'
        backgroundColor='{"none"}'
        white
      >
        <TitleSection>{dataContactUs.title}</TitleSection>
        <Underline />
        <Subtitle>{dataContactUs.subtitle}</Subtitle>
        <br />
        <CardsContenaire>
          <ContactForm />
          <Column>
            <Text>
              Le Mas Bellane <br />
              Chloé VOGEL et Aurélien BRUNET <br />
              35 Chemin des Fontaines 26160 Salettes <br />
              04.00.00.00.00
            </Text>
            <Iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d181867.95505766844!2d4.966547103193879!3d44.58301936490901!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b5674acf20eddd%3A0xe6b21801728c602!2s35+Chemin+des+Fontaines%2C+26160+Salettes!5e0!3m2!1sfr!2sfr!4v1553362388193'
              allowfullscreen
            />
          </Column>
        </CardsContenaire>
      </SectionContainer>
    );
  }
}

export default ContactUs;

