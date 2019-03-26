import React from "react";

const UserContext = React.createContext();

export const UserConsumer = UserContext.Consumer;

class UserProvider extends React.Component {
  state = {
    username: "EmmaScanlon",
    email: "emmascanlon@gmail.com",
    firstName: "Emma",
    lastName: "Scanlon",
    updateAccount: (account) => this.updateAccount(account),
  }

  updateAccount = (account) => {
    this.setState({ ...account, });
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
      { this.props.children}
      </UserContext.Provider>
    )
  }
}

export default UserProvider;