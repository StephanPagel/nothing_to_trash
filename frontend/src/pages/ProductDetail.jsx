import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { apiBaseUrl } from "../api";
import "./productDetail.scss";

export default function ProductDetail({ productDetails, setProductDetails }) {
  const { id } = useParams();

  const navigator = useNavigate();

  useEffect(() => {
    fetch(`${apiBaseUrl}products/allproducts/` + id)
      .then((productDetails) => productDetails.json())
      .then((detailsArray) => setProductDetails(detailsArray));
  }, []);

  const editProduct = (listId, checkPointId) => {
    fetch(`${apiBaseUrl}products/edit/` + id, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((updatedProduct) => {
        setProductDetails(updatedProduct);
      })
      .catch((err) => console.log(err));
  };

  const deleteProduct = (id) => {
    fetch(`${apiBaseUrl}products/deletedProduct/` + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => navigator("/"))
      .catch((err) => console.log(err));
  };

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
      <button onClick={editProduct}>Bearbeiten</button>
      <button>Verkauft</button>
      <button onClick={deleteProduct}>Produkt löschen</button>
    </div>
  );
}
