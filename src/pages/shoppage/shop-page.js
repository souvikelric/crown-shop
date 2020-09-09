import React from "react";
import { Route, Switch } from "react-router-dom";
import CategoryPage from "../categories/categoryPage";
import CollectionOverview from "../../components/collectionOverview/collectionOverview";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CategoryPage} />
    </div>
  );
};

export default ShopPage;
