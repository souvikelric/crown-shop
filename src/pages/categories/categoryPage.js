import React from "react";
import { connect } from "react-redux";
import { selectCategoryItems } from "../../redux/shop/shopSelectors";
import CollectionItem from "../../components/collection-item/collection-item";

import "./categoryPage.scss";

const CategoryPage = ({ collection }) => {
  console.log(collection);
  return (
    <div className="category-page">
      <h1>{collection.title.toUpperCase()}</h1>
      <div className="items">
        {collection.items.map((item) => (
          <CollectionItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCategoryItems(ownProps.match.params.categoryId)(state),
});

export default connect(mapStateToProps)(CategoryPage);
