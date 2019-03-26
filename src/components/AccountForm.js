import React from "react";
import {Form} from "semantic-ui-react"
import { UserConsumer, } from "../providers/UserProvider";

class AccountForm extends React.Component {
  state= {
   username: this.props.username,
   email: this.props.email, 
   firstName: this.props.firstName, 
   lastName: this.props.lastName,
  }


  handleChange = (e, {name,value}) => this.setState({ [name]: value, });

  handleSubmit = (e) => {
    e.preventDefault();
    const account = { ...this.state, };
    this.props.updateAccount(account);
  }

  render() {
    const { username, email, firstName, lastName } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <Form.Input
          label="email"
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <Form.Input
          label="first name"
          type="text"
          name="firstName"
          value={firstName}
          onChange={this.handleChange}
        />
        <Form.Input
          label="last name"
          type="text"
          name="lastName"
          value={lastName}
          onChange={this.handleChange}
        />
        
        <Form.Button color="blue">Save</Form.Button>
      </Form>
    )
  }
}

const ConnectedAccountForm = (props) => {
  return(
    <UserConsumer>
      { value => (
        <AccountForm{...props}
        username = {value.username}
        email = {value.email}
        firstName = {value.firstName}
        lastName = {value.lastName}
        updateAccount = {value.updateAccount}
        />
      )}
    </UserConsumer>
  )
      }

  export default ConnectedAccountForm;