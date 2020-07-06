import React from "react";
import { StarshipsList } from "../sw-components";
import { withRouter } from "react-router-dom";

const StarshipsPage = ({ history }) => {
  return (
    <StarshipsList
      onItemSelected={(id) => {
        history.push(`/starships/${id}`);
      }}
    />
  );
};

export default withRouter(StarshipsPage);
