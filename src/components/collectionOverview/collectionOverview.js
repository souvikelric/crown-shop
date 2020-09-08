import React from "react";
import "./collectionOverview.scss";
import { createStructuredSelector } from "reselect";
import { selectShopItems } from "../../redux/shop/shopSelectors";
import { connect } from "react-redux";
import Preview from "../../components/preview-collection/preview";

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map((collection) => {
      return (
        <Preview
          key={collection.id}
          items={collection.items}
          title={collection.title}
        />
      );
    })}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopItems,
});

export default connect(mapStateToProps)(CollectionOverview);
