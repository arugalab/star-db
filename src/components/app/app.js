import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundary from "../error-boundary";
import {
  PeopleList,
  PlanetsList,
  StarshipsList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
} from "../sw-components";

import "./app.css";

export default class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <div className="stardb-app">
          <Header />
          <RandomPlanet />

          <PeopleList>{({ name }) => <span>{name}</span>}</PeopleList>
          <PlanetsList>{({ name }) => <span>{name}</span>}</PlanetsList>
          <StarshipsList>{({ name }) => <span>{name}</span>}</StarshipsList>

          <PersonDetails itemId={1}></PersonDetails>
          <PlanetDetails itemId={5}></PlanetDetails>
          <StarshipDetails itemId={9}></StarshipDetails>
        </div>
      </ErrorBoundary>
    );
  }
}
