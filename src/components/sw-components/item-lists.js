import React from "react";
import { withData } from "../hoc-helpers";
import { withSwapiService } from "../hoc-helpers";
import ItemList from "../item-list";

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

const mapPeopleMethodsToProps = (swapiService) => {
  return { getData: swapiService.getAllPeople };
};
const mapPlanetsMethodsToProps = (swapiService) => {
  return { getData: swapiService.getAllPlanets };
};
const mapStarshipsMethodsToProps = (swapiService) => {
  return { getData: swapiService.getAllStarships };
};

const PeopleList = withSwapiService(
  withData(withChildFunction(ItemList, renderName)),
  mapPeopleMethodsToProps
);
const PlanetsList = withSwapiService(
  withData(withChildFunction(ItemList, renderName)),
  mapPlanetsMethodsToProps
);
const StarshipsList = withSwapiService(
  withData(withChildFunction(ItemList, renderNameAndModel)),
  mapStarshipsMethodsToProps
);

export { PeopleList, PlanetsList, StarshipsList };
