import React from "react";
import{Card} from "semantic-ui-react"
import { UserConsumer, } from "../providers/UserProvider";

const Account = () => (
  <UserConsumer>
    { value => (
  <Card>
    <Card.Content>
      <Card.Header>{value.username}</Card.Header>
      <Card.Meta>{value.email}</Card.Meta>
      </Card.Content>
      <Card.Content>
        {value.firstName} {value.lastName}
      </Card.Content>
  </Card>
    )}
  </UserConsumer>
)

export default Account