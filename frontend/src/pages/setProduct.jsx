<<<<<<< HEAD
import "./setProduct.scss"

import React from 'react'

export default function setProduct() {
    return (
        <div>setProduct</div>
    )
}
=======
import "./set_product.scss";

const setProduct = () => {
  return (
    <form>
      <label>Anzeigentyp:</label>
      <input
        type="radio"
        name="typeOfAd"
        id="typeOfAdOffer"
        value="typeOfAdOffer"
      />
      <label>Ich biete</label>
      <input
        type="radio"
        name="typeOfAd"
        id="typeOfAdSearch"
        value="typeOfAdSearch"
      />
      <label>Ich suche</label>
      <label>Lieferung:</label>
      <input type="radio" name="delivery" id="deliveryYes" />
      <label>Ja</label>
      <input type="radio" name="delivery" id="deliveryNo" />
      <label>Nein</label>
      <label>Titel der Anzeige:</label>
      <input type="text" name="title" id="title" />
      <label>Beschreibung:</label>
      <textarea
        name="description"
        id="description"
        cols="50"
        rows="5"
      ></textarea>
      <label>Anzahl:</label>
      <input type="number" name="amount" id="amount" />
      <label>Preis:</label>
      <input type="number" name="price" id="price" />
      <label>EUR</label>
      <input
        type="radio"
        name="priceOptions"
        id="priceOptionFixed"
        value="fixed"
      />
      <label>Festpreis</label>
      <input
        type="radio"
        name="priceOptions"
        id="priceOptionNegotiable"
        value="negotiable"
      />
      <label>VB</label>
      <input
        type="radio"
        name="priceOptions"
        id="priceOptionGiveAway"
        value="negotiable"
      />
      <label>Zu verschenken</label>
      <label>Bilder:</label>
      <input type="file" name="uploadImage" id="uploadImage" />
      <label>Kategorie:</label>
      <select>
        <option value="1">Kategorie 1</option>
        <option value="2">Kategorie 2</option>
        <option value="3">Kategorie 3</option>
        <option value="4">Kategorie 4</option>
        <option value="5">Kategorie 5</option>
      </select>
      <label>PLZ/Ort*</label>
      <input type="text" name="zip" id="zip" required placeholder="PLZ" />
      <input type="text" name="city" id="city" required placeholder="Ort" />
      <label>Straße/Nr.*</label>
      <input
        type="text"
        name="street"
        id="street"
        required
        placeholder="Straße/Nr."
      />
      <label>Name*</label>
      <input type="text" name="name" id="name" required placeholder="Name" />
      <label>Telefonnummer</label>
      <input
        type="number"
        name="phone"
        id="phone"
        required
        placeholder="Telefon"
      />
      <button type="submit">Produkt einstellen</button>
    </form>
  );
};

export default setProduct;
>>>>>>> 43ce1e2ae43996d31ab1173b448b8a9090a3b97e
