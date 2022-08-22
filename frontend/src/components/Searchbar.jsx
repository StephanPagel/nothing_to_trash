import "./searchbar.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiBaseUrl } from "../api";

export default function Searchbar() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch(`${apiBaseUrl}products/allproducts`)
      .then((allProducts) => allProducts.json())
      .then((productsArray) => setAllProducts(productsArray))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="searchbar">
      <div className="searchbar_box">
        <input
          className="input_search"
          type="search"
          placeholder=" Suche nach Produkt, Kategorie..."
        />
        <a className="search_btn" href="#"></a>
        <i className="fa_searchbar"></i>
      </div>
      <button className="btn_search">
        <Link to="/set_product">Produkt einstellen</Link>
      </button>
    </div>
  );
}
