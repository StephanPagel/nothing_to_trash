import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiBaseUrl } from "../api";
import "./productDetail.scss";

export default function ProductDetail() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    fetch(`${apiBaseUrl}products/allproducts/` + id)
      .then((productDetails) => productDetails.json())
      .then((detailsArray) => setProductDetails(detailsArray))
  }, []);

  return (
    <div>
      <img
        src={
          productDetails.filename && `${apiBaseUrl}/${productDetails.filename}`
        }
        alt="product"
      />
      <span>{productDetails.title}</span>
      <h2>{productDetails.price}</h2>
      <p>Zustand</p>
      <p>{productDetails.condition}</p>
      <p>Marke</p>
      <p>{productDetails.brand}</p>
      <p>Lieferung</p>
      <p>{productDetails.delivery === "deliveryYes" ? "Ja" : "Nein"}</p>
      <p>Anzahl</p>
      <p>{productDetails.amount}</p>
      <button>♡ Auf die Wunschliste</button>
      <span>Produktbeschreibung</span>
      <p>{productDetails.descriptionLong}</p>
      <button>Bearbeiten</button>
      <button>Verkauft</button>
    </div>
  );
}
