import React, { Component, Fragment } from "react";
import Spinner from "../spinner";
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";

import "./item-details.css";

export default class ItemDetails extends Component {
  state = { item: null, image: null, loading: false, error: false };

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

    this.setState({ loading: true, error: false });

    getData(itemId)
      .then((item) => {
        this.setState({ item, image: getImageUrl(item), loading: false });
      })
      .catch(() => {
        this.setState({ error: true });
      });
  }

  render() {
    const { item, image, loading, error } = this.state;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    if (!item) {
      return <span>Select a item from a list</span>;
    }

    const { name } = item;

    const content = (
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
