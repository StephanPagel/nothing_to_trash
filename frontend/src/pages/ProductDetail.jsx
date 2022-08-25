import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiBaseUrl } from "../api";
import "./productDetail.scss";

export default function ProductDetail({ productDetails, setProductDetails }) {
  const { id } = useParams();

  useEffect(() => {
    fetch(`${apiBaseUrl}products/allproducts/` + id)
      .then((productDetails) => productDetails.json())
      .then((detailsArray) => setProductDetails(detailsArray));
  }, [id, setProductDetails]);

  return (
    <div className="detail_container">
      <div className="product_details">
        <img
          src={
            productDetails.filename &&
            `${apiBaseUrl}/${productDetails.filename}`
          }
          alt="product"
        />
        <div className="product_facts">
          <h1>{productDetails.title}</h1>
          <h2>{productDetails.price} EUR</h2>
          <div className="facts_grid">
            <p>Zustand</p>
            <p>{productDetails.condition}</p>
            <p>Marke</p>
            <p>{productDetails.brand}</p>
            <p>Lieferung</p>
            <p>{productDetails.delivery === "deliveryYes" ? "Ja" : "Nein"}</p>
            <p>Anzahl</p>
            <p>{productDetails.amount}</p>
          </div>
          <button className="btn_wish">♡ Auf die Wunschliste</button>
          <span>Produktbeschreibung</span>
          <p>{productDetails.descriptionLong}</p>
        </div>
      </div>
    </div >
  );
}
