import Searchbar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import "./marketplace.scss";
import { useState } from "react";

export default function Marketplace({ allProducts, token, setToken }) {
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults);

  return (
    <div className="marketplace">
      <div style={{ background: "linear-gradient(#E5EFFF, #fff, #fff, #fff)" }}>
        <Sidebar />
        <h1>Hilf mit die Umwelt zu schützen</h1>
        <p className="marketplace_p">
          Abfälle bedrohen Vögel, Delfine und Co. Mehr als zehn Millionen Tonnen
          Abfälle gelangen jährlich in die Ozeane. Sie kosten Abertausende
          Meerestiere das Leben. Seevögel verwechseln Plastik mit natürlicher
          Nahrung, Delfine verfangen sich in alten Fischernetzen. Hilf mit Müll
          zu reduzieren und trashnothing.
        </p>
        <Searchbar
          allProducts={allProducts}
          setSearchResults={setSearchResults}
        />
        {searchResults &&
          searchResults.map((searchResult) => (
            <ProductCard
              key={searchResult._id}
              id={searchResult._id}
              adType={searchResult.adType}
              delivery={searchResult.delivery}
              title={searchResult.title}
              condition={searchResult.condition}
              brand={searchResult.brand}
              descriptionShort={searchResult.descriptionShort}
              descriptionLong={searchResult.descriptionLong}
              amount={searchResult.amount}
              price={searchResult.price}
              priceOptions={searchResult.priceOptions}
              category={searchResult.category}
              filename={searchResult.filename}
              token={token}
              setToken={setToken}
            />
          ))}
        {allProducts &&
          !searchResults &&
          allProducts.map((product) => (
            <ProductCard
              key={product._id}
              id={product._id}
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
              token={token}
              setToken={setToken}
            />
          ))}
      </div>
    </div>
  );
}
