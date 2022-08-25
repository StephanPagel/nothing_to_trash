import "./setProductForm.css";
import { useState, useRef } from "react";
import { apiBaseUrl } from "../api";
import { useNavigate } from "react-router-dom";

const SetProductForm = ({ token, setAllProducts, allproducts }) => {
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
  const navigate = useNavigate();

  const onFileChange = (e) => {
    const productImage = e.target.files[0];
    setImageFile(productImage);
  };

  const submitForm = (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Update the formData object
    formData.append("adType", adType);
    formData.append("delivery", delivery);
    formData.append("title", title);
    formData.append("condition", condition);
    formData.append("brand", brand);
    formData.append("descriptionShort", descriptionShort);
    formData.append("descriptionLong", descriptionLong);
    formData.append("amount", amount);
    formData.append("price", price);
    formData.append("priceOptions", priceOptions);
    formData.append("category", category);
    formData.append("zip", zip);
    formData.append("city", city);
    formData.append("street", street);
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("imageFile", imageFile, imageFile.name); // Blob = Binary Large Object

    fetch(`${apiBaseUrl}products/addnewProduct`, {
      headers: {
        token: `JWT ${token}`,
      },
      method: "post",
      body: formData,
      // credentials: true
    })
      .then((response) => response.json())
      .then((newProduct) => {
        console.log(newProduct)
        navigate("/marketplace")
      }
      );
  };

  return (
    <form className="form_setP" encType="multipart/form-data">
      <div className="formContainer">
        <div className="div1">
          <label>Anzeigentyp:</label>
        </div>
        <div className="div2">
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
        </div>
        <div className="div3">
          <label>Lieferung:</label>
        </div>
        <div className="div4">
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
        </div>
        <div className="div5">
          <label>Titel der Anzeige:</label>
        </div>
        <div className="div6">
          <input
            className="input1"
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="div7">
          <label>Marke:</label>
        </div>
        <div className="div8">
          <input
            className="input1"
            type="text"
            name="brand"
            id="brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
        <div className="div9">
          <label>Zustand:</label>
        </div>
        <div className="div10">
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
        </div>
        <div className="div11">
          <label>Beschreibung kurz:</label>
        </div>
        <div className="div12">
          <input
            className="input1"
            type="text"
            name="descriptionShort"
            id="descriptionShort"
            value={descriptionShort}
            onChange={(e) => setDescriptionShort(e.target.value)}
          />
        </div>
        <div className="div13">
          <label>Beschreibung lang:</label>
        </div>
        <div className="div14">
          <textarea
            name="descriptionLong"
            id="descriptionLong"
            cols="50"
            rows="5"
            value={descriptionLong}
            onChange={(e) => setDescriptionLong(e.target.value)}
          ></textarea>
        </div>
        <div className="div15">
          <label>Anzahl:</label>
        </div>
        <div className="div16">
          <input
            className="input2"
            type="number"
            name="amount"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="div17">
          <label>Preis:</label>
        </div>
        <div className="div18">
          <input
            className="input2"
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
        </div>
        <div className="div19">
          <label>Bilder:</label>
        </div>
        <div className="div20">
          <input
            type="file"
            name="uploadImage"
            id="uploadImage"
            ref={fileInputRef}
            onChange={onFileChange}
          />
        </div>
        <div className="div21">
          <label>Kategorie:</label>
        </div>
        <div className="div22">
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
        </div>
        <div className="div23">
          <label>PLZ/Ort*</label>
        </div>
        <div className="div24">
          <input
            className="input2"
            type="text"
            name="zip"
            id="zip"
            required
            placeholder="PLZ"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
          <input
            className="input3"
            type="text"
            name="city"
            id="city"
            required
            placeholder="Ort"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="div25">
          <label>Straße/Nr.*</label>
        </div>
        <div className="div26">
          <input
            className="input1"
            type="text"
            name="street"
            id="street"
            required
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </div>
        <div className="div27">
          <label>Name*</label>
        </div>
        <div className="div28">
          <input
            className="input1"
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="div27">
          <label>Telefonnummer</label>
        </div>
        <div className="div28">
          <input
            className="input1"
            type="number"
            name="phone"
            id="phone"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      <div>
        <button className="btn-submitProduct" onClick={submitForm}>
          Produkt einstellen
        </button>
      </div>
    </form>
  );
};

export default SetProductForm;
