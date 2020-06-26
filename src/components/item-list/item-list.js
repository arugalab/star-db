import React, { Component } from "react";
import Spinner from "../spinner";

import "./item-list.css";

const withData = (View) => {
  return class extends Component {
    state = {
      data: null,
    };

    componentDidMount() {
      const { getData } = this.props;
      getData().then((data) => {
        this.setState({ data });
      });
    }

    render() {
      const { data } = this.state;

      if (!data) {
        return <Spinner />;
      }
      return <View {...this.props} data={data} />;
    }
  };
};

const ItemList = ({ data, onItemSelected, children: renderItems }) => {
  const items = data.map((item) => {
    const { id } = item;
    return (
      <li
        key={id}
        className="list-group-item"
        onClick={() => onItemSelected(id)}
      >
        {renderItems(item)}
      </li>
    );
  });

  return <ul className="item-list list-group">{items}</ul>;
};

export default withData(ItemList);
