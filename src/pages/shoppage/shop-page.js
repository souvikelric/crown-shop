import React from "react";
import { Route, Switch } from "react-router-dom";
// import CategoryPage from "../categories/categoryPage";
import CollectionOverview from "../../components/collectionOverview/collectionOverview";

const ShopPage = ({ match }) => {
  console.log(match);
  return (
    <div>
      <CollectionOverview />
    </div>
  );
};

export default ShopPage;
