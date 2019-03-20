import React, { Component } from 'react';
import axios from 'axios';
// import styled from 'styled-components';
import { SectionContainer, CardsContenaire, TitleSection, Subtitle, Text, colors } from '../StyledComponents';
import Underline from '../commun/Underline';
import ContactForm from '../forms/ContactForm';

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
      <SectionContainer id='ContactUs' color={"none"}>
        <TitleSection>{dataContactUs.title}</TitleSection>
        <Underline />
        <Subtitle>{dataContactUs.subtitle}</Subtitle>
        <CardsContenaire>
          <Text>{dataContactUs.content}</Text>
          <ContactForm />
        </CardsContenaire>
      </SectionContainer>
    );
  }
}

export default ContactUs;

