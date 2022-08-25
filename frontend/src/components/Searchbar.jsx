import "./searchbar.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Searchbar({ allProducts, setSearchResults }) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const filterProducts = allProducts.filter((product) => {
      return Object.values(product)
        .join("")
        .toLowerCase()
        .includes(search.toLowerCase());
    });
    // console.log(filterProducts);
    return setSearchResults(filterProducts);
  }, [search, allProducts, setSearchResults]);

  return (
    <div className="searchbar">
      <div className="searchbar_box">
        <input
          className="input_search"
          type="search"
          placeholder=" Suche nach Produkt, Kategorie..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <i className="fa_searchbar"></i>
      </div>
      <button className="btn_search">
        <Link to="/set_product">Produkt einstellen</Link>
      </button>
    </div>
  );
}
