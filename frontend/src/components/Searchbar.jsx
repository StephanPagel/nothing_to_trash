import "./searchbar.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiBaseUrl } from "../api";

export default function Searchbar({ allProducts }) {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const filterProducts = allProducts.filter((product) => {
      return Object.values(product)
        .join("")
        .toLowerCase()
        .includes(search.toLowerCase());
    });
    console.log(filterProducts);
  }, [search]);

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
        <a className="search_btn" href="#"></a>
        <i className="fa_searchbar"></i>
      </div>
      <button className="btn_search">
        <Link to="/set_product">Produkt einstellen</Link>
      </button>
      <div>
        {searchResults.map((product) => (
          <p>{product.price}</p>
        ))}
      </div>
    </div>
  );
}
