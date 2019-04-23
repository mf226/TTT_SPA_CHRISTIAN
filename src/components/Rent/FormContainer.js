import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Col } from 'reactstrap';
import styled from 'styled-components';

class FormContainer extends Component {
  state = {
    from: '',
    to: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    driverLicenseNumber: '',
    birthDate: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.history.push('/result');
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { from, to, firstName, lastName, phone, email,
      driverLicenseNumber, birthDate
    } = this.state;
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="date"
            name="from"
            value={from}
            onChange={this.handleChange}
          />
          <Input
            type="date"
            name="to"
            value={to}
            onChange={this.handleChange}
          />
          <Input
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
            placeholder="First Name"
          />
          <Input
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
            placeholder="Last Name"
          />
          <Input
            type="phone"
            name="phone"
            value={lastName}
            onChange={this.handleChange}
            placeholder="Phone Number"
          />
          <Input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Email"
          />
          <Input
            type="text"
            name="driverLicenseNumber"
            value={driverLicenseNumber}
            onChange={this.handleChange}
            placeholder="Driver License Number"
          />
          <Input
            type="text"
            name="birthDate"
            value={birthDate}
            onChange={this.handleChange}
            placeholder="Birth Date"
          />
          <Submit type="submit">Book Car</Submit>
        </Form>
    </Container>
    );
  }
}

const Container = styled(Col)`
`;
Container.defaultProps = {
  xs: 12, sm: 12, md: 12, lg: 12,
};

const Form = styled.form`
  min-width: 100%; max-width: 100%;
  min-height: 20rem; max-height: 20rem;
  padding: 1rem;
  border: 1px solid #dc6e78;
  background-color: #fbcfd2;
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  display: inline-block;
  min-width: 48%; max-width: 48%;
  min-height: 3rem; max-height: 3rem;
  margin: 0.25rem;
  font-size: 120%;
  border: 1px solid #787878; border-radius: 5px;
  color: white; background-color: #787878;
  outline: none;
  &::placeholder {
    color: white;
    padding-left: 0.5rem;
  }
`;

const Submit = styled.button`
  display: block;
  min-width: 10rem; max-width: 10rem;
  min-height: 3rem; max-height: 3rem;
  margin: 0.5rem auto;
  font-size: 120%;
  border: 1px solid #787878; border-radius: 5px;
  color: white; background-color: #787878;
`;

const Text = styled.p`
  @media screen and (min-width: 768px) {
    position: absolute; top: 16rem;
  }
  @media screen and (max-width: 768px) {
    position: static;
    margin-top: 1rem;
  }
  font-size: 170%;
  font-weight: bold;
  color: white;
`;

export default withRouter(FormContainer);
