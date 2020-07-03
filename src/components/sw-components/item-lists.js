import React from "react";
import { withData } from "../hoc-helpers";
import { withSwapiService } from "../hoc-helpers";
import ItemList from "../item-list";

const withChildFunction = (fn) => (Wrapped) => {
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

const PeopleList = withSwapiService(mapPeopleMethodsToProps)(
  withData(withChildFunction(renderName)(ItemList))
);
const PlanetsList = withSwapiService(mapPlanetsMethodsToProps)(
  withData(withChildFunction(renderName)(ItemList))
);
const StarshipsList = withSwapiService(mapStarshipsMethodsToProps)(
  withData(withChildFunction(renderNameAndModel)(ItemList))
);

export { PeopleList, PlanetsList, StarshipsList };
