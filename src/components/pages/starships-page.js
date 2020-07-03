import React, { Component } from "react";
import Row from "../row";
import { StarshipsList, StarshipDetails } from "../sw-components";

export default class StarshipsPage extends Component {
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
        left={<StarshipsList onItemSelected={this.handleItemSelected} />}
        right={<StarshipDetails itemId={selectedItem} />}
      />
    );
  }
}
