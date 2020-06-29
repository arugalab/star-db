import React from "react";
import { withData } from "../hoc-helpers";
import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list";

const { getAllPeople, getAllPlanets, getAllStarships } = new SwapiService();

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

const renderName = ({ name }) => <span>{name}</span>;
const renderNameAndModel = ({ name, model }) => (
  <span>
    {name} ({model})
  </span>
);

const PeopleList = withData(
  withChildFunction(ItemList, renderName),
  getAllPeople
);
const PlanetsList = withData(
  withChildFunction(ItemList, renderName),
  getAllPlanets
);
const StarshipsList = withData(
  withChildFunction(ItemList, renderNameAndModel),
  getAllStarships
);

export { PeopleList, PlanetsList, StarshipsList };
