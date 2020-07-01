import React, { Component, Fragment } from "react";
import Spinner from "../spinner";
import ErrorButton from "../error-button";

import "./item-details.css";

export default class ItemDetails extends Component {
  state = { item: null, image: null };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.itemId !== this.props.itemId ||
      prevProps.getData !== this.props.getData ||
      prevProps.getImageUrl !== this.props.getImageUrl
    ) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;

    if (!itemId) {
      return;
    }

    getData(itemId).then((item) => {
      this.setState({ item, image: getImageUrl(item) });
    });
  }

  render() {
    const { item, image } = this.state;

    if (!item) {
      return <span>Select a item from a list</span>;
    }

    const { id, name } = item;

    const content =
      id !== this.props.itemId ? (
        <Spinner />
      ) : (
        <Fragment>
          <img className="item-image" src={image} alt="" />
          <div className="card-body">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
              {React.Children.map(this.props.children, (child, idx) => {
                return React.cloneElement(child, { item: item });
              })}
              <li className="list-group-item">
                <ErrorButton />
              </li>
            </ul>
          </div>
        </Fragment>
      );

    return <div className="item-details card">{content}</div>;
  }
}

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Record };
