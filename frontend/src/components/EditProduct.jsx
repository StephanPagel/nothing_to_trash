import "./editProduct.scss";
import { useState, useRef } from "react";
import { apiBaseUrl } from "../api";

const EditProduct = ({ productId }) => {
  console.log(productId);

  const [adType, setAdType] = useState("");
  const [delivery, setDelivery] = useState("");
  const [title, setTitle] = useState("");
  const [condition, setCondition] = useState("");
  const [brand, setBrand] = useState("");
  const [descriptionShort, setDescriptionShort] = useState("");
  const [descriptionLong, setDescriptionLong] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");
  const [priceOptions, setPriceOptions] = useState("");
  const [category, setCategory] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const fileInputRef = useRef();

  const onFileChange = (e) => {
    const productImage = e.target.files[0];
    setImageFile(productImage);
  };

  const edit = () => {
    fetch(`${apiBaseUrl}products/edit/${productId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: title }),
    })
      .then((response) => response.json())
      .then((data) => setTitle(data.title));
  };

  return (
    <form className="form_setP" encType="multipart/form-data">
      <label>Anzeigentyp:</label>
      <input
        type="radio"
        name="adType"
        id="adTypeOffer"
        value="adTypeOffer"
        checked={adType === "adTypeOffer"}
        onChange={(e) => {
          setAdType(e.target.value);
          console.log(adType);
        }}
      />

      <label>Ich biete</label>
      <input
        type="radio"
        name="adType"
        id="adTypeSearch"
        value="adTypeSearch"
        checked={adType === "adTypeSearch"}
        onChange={(e) => {
          setAdType(e.target.value);
        }}
      />

      <label>Ich suche</label>
      <label>Lieferung:</label>
      <input
        type="radio"
        name="delivery"
        id="deliveryYes"
        value="deliveryYes"
        checked={delivery === "deliveryYes"}
        onChange={(e) => {
          setDelivery(e.target.value);
          console.log(delivery);
        }}
      />

      <label>Ja</label>
      <input
        type="radio"
        name="delivery"
        id="deliveryNo"
        value="deliveryNo"
        checked={delivery === "deliveryNo"}
        onChange={(e) => {
          setDelivery(e.target.value);
        }}
      />

      <label>Nein</label>
      <label>Titel der Anzeige:</label>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Marke:</label>
      <input
        type="text"
        name="brand"
        id="brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />

      <label>Zustand:</label>
      <input
        type="radio"
        name="condition"
        id="conditionAsNew"
        value="Wie neu"
        checked={condition === "Wie neu"}
        onChange={(e) => {
          setCondition(e.target.value);
          console.log(condition);
        }}
      />

      <label>Wie neu</label>
      <input
        type="radio"
        name="condition"
        id="Gut"
        value="Gut"
        checked={condition === "Gut"}
        onChange={(e) => {
          setCondition(e.target.value);
          console.log(condition);
        }}
      />

      <label>Gut</label>
      <input
        type="radio"
        name="condition"
        id="conditionClearlyUsed"
        value="Deutliche Gebrauchsspuren"
        checked={condition === "Deutliche Gebrauchsspuren"}
        onChange={(e) => {
          setCondition(e.target.value);
          console.log(condition);
        }}
      />

      <label>Deutliche Gebrauchsspuren</label>
      <input
        type="radio"
        name="condition"
        id="conditionDefect"
        value="Defekt"
        checked={condition === "Defekt"}
        onChange={(e) => {
          setCondition(e.target.value);
          console.log(condition);
        }}
      />

      <label>Defekt</label>
      <label>Beschreibung kurz:</label>
      <input
        type="text"
        name="descriptionShort"
        id="descriptionShort"
        value={descriptionShort}
        onChange={(e) => setDescriptionShort(e.target.value)}
      >

      </input>
      <label>Beschreibung lang:</label>

      <textarea
        name="descriptionLong"
        id="descriptionLong"
        cols="50"
        rows="5"
        value={descriptionLong}
        onChange={(e) => setDescriptionLong(e.target.value)}
      >
      </textarea>

      <label>Anzahl:</label>
      <input
        type="number"
        name="amount"
        id="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <label>Preis:</label>
      <input
        type="number"
        name="price"
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <label>EUR</label>
      <input
        type="radio"
        name="priceOptions"
        id="priceOptionFixed"
        value="fixed"
        checked={priceOptions === "fixed"}
        onChange={(e) => {
          setPriceOptions(e.target.value);
        }}
      />

      <label>Festpreis</label>
      <input
        type="radio"
        name="priceOptions"
        id="priceOptionNegotiable"
        value="negotiable"
        checked={priceOptions === "negotiable"}
        onChange={(e) => {
          setPriceOptions(e.target.value);
        }}
      />

      <label>VB</label>
      <input
        type="radio"
        name="priceOptions"
        id="priceOptionGiveAway"
        value="togiveaway"
        checked={priceOptions === "togiveaway"}
        onChange={(e) => {
          setPriceOptions(e.target.value);
        }}
      />

      <label>Zu verschenken</label>
      <label>Bilder:</label>
      <input type="file"
        name="uploadImage"
        id="uploadImage"
        ref={fileInputRef}
        onChange={onFileChange} />

      <label>Kategorie:</label>
      <select
        value={category.value}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        <option value="moebel">Möbel</option>
        <option value="kleidung">Kleidung</option>
        <option value="trainer">Trainer</option>
      </select>

      <label>PLZ/Ort*</label>
      <input
        type="text"
        name="zip"
        id="zip"
        required
        placeholder="PLZ"
        value={zip}
        onChange={(e) => setZip(e.target.value)}
      />

      <input
        type="text"
        name="city"
        id="city"
        required
        placeholder="Ort"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <label>Straße/Nr.*</label>
      <input
        type="text"
        name="street"
        id="street"
        required
        placeholder="Straße/Nr."
        value={street}
        onChange={(e) => setStreet(e.target.value)}
      />

      <label>Name*</label>
      <input
        type="text"
        name="name"
        id="name"
        required
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Telefonnummer</label>
      <input
        type="number"
        name="phone"
        id="phone"
        required
        placeholder="Telefon"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={edit}>Änderungen speichern</button>
    </form >
  );
};


export default EditProduct;
