import "./searchbar.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiBaseUrl } from "../api";

export default function Searchbar() {
  const [searchData, setSearchData] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([searchData]);

  useEffect(() => {
    fetch(`${apiBaseUrl}products/allproducts`)
      .then((searchData) => searchData.json())
      .then((productsArray) => setSearchData(productsArray))
      .catch((err) => console.log(err));
  }, [search]);

  console.log(searchData);

  useEffect(() => {
    setSearchResults(
      searchData.filter((product) => product["title"] == search)
    );
  }, [search, searchData]);

  console.log(searchResults);

  return (
    <div className="searchbar">
      <div className="searchbar_box">
        <input
          className="input_search"
          type="search"
          placeholder=" Suche nach Produkt, Kategorie..."
          onChange={(e) => setSearch(e.target.value)}
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
