import ProductCard from "../components/ProductCard";
import Searchbar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";
import "./alreadySold.scss";

import React from "react";

export default function AlreadySold(props) {
  return (
    <div>
      <div>
        <h1>Mit diesen Artikeln konnten wir schon Müll vermeiden</h1>
        <Searchbar />
        <Sidebar />
        {props.allProducts &&
          props.allProducts.map((product) => (
            <ProductCard
              key={product._id}
              adType={product.adType}
              delivery={product.delivery}
              title={product.title}
              condition={product.condition}
              brand={product.brand}
              descriptionShort={product.descriptionShort}
              descriptionLong={product.descriptionLong}
              amount={product.amount}
              price={product.price}
              priceOptions={product.priceOptions}
              category={product.category}
              filename={product.filename}
            />
          ))}
      </div>
    </div>
  );
}
