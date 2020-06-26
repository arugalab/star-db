import { withData } from "../hoc-helpers";
import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list";

const { getAllPeople, getAllPlanets, getAllStarships } = new SwapiService();

const PeopleList = withData(ItemList, getAllPeople);
const PlanetsList = withData(ItemList, getAllPlanets);
const StarshipsList = withData(ItemList, getAllStarships);

export { PeopleList, PlanetsList, StarshipsList };
