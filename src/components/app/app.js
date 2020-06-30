import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundary from "../error-boundary";
import { SwapiServiceProvider } from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
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
  swapiService = new SwapiService();

  render() {
    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="stardb-app">
            <Header />
            <RandomPlanet />

            <PeopleList />
            <PlanetsList />
            <StarshipsList />

            <PersonDetails itemId={2} />
            <PlanetDetails itemId={2} />
            <StarshipDetails itemId={5} />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}
