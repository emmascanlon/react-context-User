import React from "react";
import {NavLink} from "react-router-dom";
import {Menu} from "semantic-ui-react";
import {UserConsumer, } from "../providers/UserProvider"

const Navbar = () => (
  <UserConsumer>
    { value => (
  <Menu>
    <Menu.Item>
<NavLink to="/">
Home
</NavLink>
</Menu.Item>
<Menu.Item>
<NavLink to="/user/profile">
{value.username}
</NavLink>
</Menu.Item>
  </Menu>
  )}
  </UserConsumer>
)

export default Navbar;
