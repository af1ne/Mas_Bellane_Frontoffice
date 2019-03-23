import React, { Component } from 'react';
import styled from "styled-components";
// import { CardsContenaire as Row } from "../StyledComponents";
import { mobileThresholdPixels } from "../StyledComponents";
// import { Link, Redirect } from 'react-router-dom';
import Input from "../forms/Input";
import Textarea from "../forms/Textarea";

import Button from '../commun/Button';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  justify-content: space-between;

  @media (max-width: ${mobileThresholdPixels}) {
    flex-direction: column;
    align-items: center;
  }
`;

class ContactForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    mail: '',
    phone: '',
    message: ''
  };

  updateInfo = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('pouet')
  }

  render() {
    const {
      firstName,
      lastName,
      mail,
      phone,
      message,
    } = this.state;
console.log(lastName)
    return (
      <FormContainer onSubmit={this.handleSubmit}>
        <Row>
          <Input
            half
            id='lastName'
            type='text'
            label='Nom'
            onChange={this.updateInfo}
            value={lastName}
          />
          <Input
            half
            id='firstName'
            type='text'
            label='Prénom'
            onChange={this.updateInfo}
            value={firstName}
          />
        </Row>
        <Input
          id='mail'
          type='mail'
          label='Email'
          onChange={this.updateInfo}
          value={mail}
        />
        <Input
          id='phone'
          type='phone'
          label='Téléphone'
          onChange={this.updateInfo}
          value={phone}
        />
        <Textarea
          heighter
          id='message'
          type='message'
          label='Message'
          onChange={this.updateInfo}
          value={message}
        />
        <br />
        <Button
          label='Envoyer'
          onClick={this.handleClick}
          type='submit'
          value='Soumettre'
          variant='contained'
          color='primary'
        >
          Submit
        </Button>
      </FormContainer>
    );
  }
}

export default ContactForm;

