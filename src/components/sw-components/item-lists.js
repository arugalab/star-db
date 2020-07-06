import React from "react";
import {
  withData,
  withChildFunction,
  withSwapiService,
  compose,
} from "../hoc-helpers";
import ItemList from "../item-list";

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

const PeopleList = compose(
  withSwapiService(mapPeopleMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

const PlanetsList = compose(
  withSwapiService(mapPlanetsMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

const StarshipsList = compose(
  withSwapiService(mapStarshipsMethodsToProps),
  withData,
  withChildFunction(renderNameAndModel)
)(ItemList);

export { PeopleList, PlanetsList, StarshipsList };
