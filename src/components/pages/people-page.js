import React, { Component } from "react";
import Row from "../row";
import { PeopleList, PersonDetails } from "../sw-components";

export default class PeoplePage extends Component {
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
        left={<PeopleList onItemSelected={this.handleItemSelected} />}
        right={<PersonDetails itemId={selectedItem} />}
      />
    );
  }
}
