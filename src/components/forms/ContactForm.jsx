import React, { Component } from 'react';
import styled from "styled-components";
import { Link, Redirect } from 'react-router-dom';
import Button from '../commun/Button';


const TextField = styled.input`
`;

class ContactForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  };

  updateInfo = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(JSON.stringify(this.state,1,1))
    // console.log(this.state)
    if (this.props.email === "") {
      this.setState({ showMessage: false });
    }
    if (this.state.password !== this.state.passwordBis) {
      this.setState({
        showMessage: true,
        flash: "Invalid password, try again."
      });
    } else {
      console.log("poulet");
      fetch("/auth/signup", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(this.state)
      })
        .then(res => res.json())
        .then(
          res =>
            this.setState({
              flash: res.flash,
              showMessage: true,
              redirectToSignIn: true
            }),
          err =>
            this.setState({
              flash: err.flash,
              showMessage: true
            })
        )
        .then(
          this.setState({
            email: "",
            password: "",
            passwordBis: "",
            firstName: "",
            lastName: "",
            showMessage: false,
            flash: "",
            redirectToSignIn: false
          })
        );
    }
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      phone,
      message,
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className='signUp-form'>
        <TextField
          label='Nom'
          type='text'
          name='lastName'
          onChange={this.updateInfo}
          value={lastName}
        />
        <TextField
          label='Prénom'
          type='text'
          name='firstName'
          onChange={this.updateInfo}
          value={firstName}
        />
        <TextField
          required
          id='standard-required'
          label='Votre email'
          type='email'
          name='email'
          onChange={this.updateInfo}
          value={email}
          margin='normal'
        />
        <Button
          onClick={this.handleClick}
          type='submit'
          value='Soumettre'
          variant='contained'
          color='primary'
        >
          Submit
        </Button>
      </form>
    );
  }
}

export default ContactForm;

