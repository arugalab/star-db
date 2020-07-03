import React, { Component } from "react";
import Row from "../row";
import { PlanetsList, PlanetDetails } from "../sw-components";

export default class PlanetsPage extends Component {
  state = {
    selectedItem: null,
  };

  handleItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;
    return (
      <Row
        left={<PlanetsList onItemSelected={this.handleItemSelected} />}
        right={<PlanetDetails itemId={selectedItem} />}
      />
    );
  }
}
