import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import UserProfile from "./components/UserProfile"
import {Switch, Route, } from "react-router-dom"

const App = () => (
  <>
  <Navbar />
  <Switch>
    <Route
    exact
    path="/"
render={ () => <div>Home</div> } />
<Route
exact
path="/user/profile"
render={ () => <UserProfile /> } />
  </Switch>
  </>

)

export default App;
