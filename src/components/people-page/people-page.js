import React, { Component } from "react";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import ErrorBoundary from "../error-boundary";
import Row from "../row";
import SwapiService from "../../services/swapi-service";

import "./people-page.css";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    itemId: "2",
  };

  handleItemSelected = (id) => {
    this.setState({ itemId: id });
  };

  render() {
    const itemList = (
      <ItemList
        getData={this.swapiService.getAllPeople}
        onItemSelected={this.handleItemSelected}
      >
        {({ name, birthYear }) => `${name} (${birthYear})`}
      </ItemList>
    );

    const itemDetails = <ItemDetails itemId={this.state.itemId} />;

    return (
      <ErrorBoundary>
        <Row left={itemList} right={itemDetails} />
      </ErrorBoundary>
    );
  }
}
