import "./editProduct.scss";
import { useState, useRef } from "react";
import { apiBaseUrl } from "../api";
import {useNavigate} from "react-router-dom"

const EditProduct = ({ productId }) => {

  const [adType2, setAdType2] = useState("");
  const [delivery2, setDelivery2] = useState("");
  const [title2, setTitle2] = useState("");
  const [condition2, setCondition2] = useState("");
  const [brand2, setBrand2] = useState("");
  const [descriptionShort2, setDescriptionShort2] = useState("");
  const [descriptionLong2, setDescriptionLong2] = useState("");
  const [amount2, setAmount2] = useState("");
  const [price2, setPrice2] = useState("");
  const [priceOptions2, setPriceOptions2] = useState("");
  const [category2, setCategory2] = useState("");
  const [zip2, setZip2] = useState("");
  const [city2, setCity2] = useState("");
  const [street2, setStreet2] = useState("");
  const [name2, setName2] = useState("");
  const [phone2, setPhone2] = useState("");
  const [imageFile2, setImageFile2] = useState(null);

  const fileInputRef = useRef();
  const navigate = useNavigate();

  const onFileChange = (e) => {
    const productImage = e.target.files[0];
    setImageFile2(productImage);
  };


  // const formData = new FormData();

  // // Update the formData object
  // formData.append("adType", adType);
  // formData.append("delivery", delivery);
  // formData.append("title", title);
  // formData.append("condition", condition);
  // formData.append("brand", brand);
  // formData.append("descriptionShort", descriptionShort);
  // formData.append("descriptionLong", descriptionLong);
  // formData.append("amount", amount);
  // formData.append("price", price);
  // formData.append("priceOptions", priceOptions);
  // formData.append("category", category);
  // formData.append("zip", zip);
  // formData.append("city", city);
  // formData.append("street", street);
  // formData.append("name", name);
  // formData.append("phone", phone);
  // formData.append("imageFile", imageFile, imageFile.name);

  const edit = () => {
    fetch(`${apiBaseUrl}products/edit/${productId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        adType: adType2,
        delivery: delivery2,
        title: title2,
        condition: condition2,
        brand: brand2,
        descriptionShort: descriptionShort2,
        descriptionLong: descriptionLong2,
        amount: amount2,
        price: price2,
        priceOptions: priceOptions2,
        category: category2,
        zip: zip2,
        city: city2,
        street: street2,
        name: name2,
        phone: phone2,
        imageFile: imageFile2,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAdType2(data.adType2);
        setDelivery2(data.delivery2);
        setTitle2(data.title2);
        setCondition2(data.condition2);
        setBrand2(data.brand2);
        setDescriptionShort2(data.descriptionShort2);
        setDescriptionLong2(data.descriptionLong2);
        setAmount2(data.amount2);
        setPrice2(data.price2);
        setPriceOptions2(data.priceOptions2);
        setCategory2(data.category2);
        setZip2(data.zip2);
        setCity2(data.city2);
        setStreet2(data.street2);
        setName2(data.name2);
        setPhone2(data.phone2);
        setImageFile2(data.imageFile2);
      });
  };

  return (
    <form className="form_setP" encType="multipart/form-data">
      <label>Anzeigentyp:</label>
      <input
        type="radio"
        name="adType"
        id="adTypeOffer"
        value="adTypeOffer"
        checked={adType2 === "adTypeOffer"}
        onChange={(e) => {
          setAdType2(e.target.value);
          console.log(adType2);
        }}
      />

      <label>Ich biete</label>
      <input
        type="radio"
        name="adType"
        id="adTypeSearch"
        value="adTypeSearch"
        checked={adType2 === "adTypeSearch"}
        onChange={(e) => {
          setAdType2(e.target.value);
        }}
      />

      <label>Ich suche</label>
      <label>Lieferung:</label>
      <input
        type="radio"
        name="delivery"
        id="deliveryYes"
        value="deliveryYes"
        checked={delivery2 === "deliveryYes"}
        onChange={(e) => {
          setDelivery2(e.target.value);
          console.log(delivery2);
        }}
      />

      <label>Ja</label>
      <input
        type="radio"
        name="delivery"
        id="deliveryNo"
        value="deliveryNo"
        checked={delivery2 === "deliveryNo"}
        onChange={(e) => {
          setDelivery2(e.target.value);
        }}
      />

      <label>Nein</label>
      <label>Titel der Anzeige:</label>
      <input
        type="text"
        name="title"
        id="title"
        value={title2}
        onChange={(e) => setTitle2(e.target.value)}
      />

      <label>Marke:</label>
      <input
        type="text"
        name="brand"
        id="brand"
        value={brand2}
        onChange={(e) => setBrand2(e.target.value)}
      />

      <label>Zustand:</label>
      <input
        type="radio"
        name="condition"
        id="Wie neu"
        value="Wie neu"
        checked={condition2 === "Wie neu"}
        onChange={(e) => {
          setCondition2(e.target.value);
          console.log(condition2);
        }}
      />

      <label>Wie neu</label>
      <input
        type="radio"
        name="condition"
        id="Gut"
        value="Gut"
        checked={condition2 === "Gut"}
        onChange={(e) => {
          setCondition2(e.target.value);
          console.log(condition2);
        }}
      />

      <label>Gut</label>
      <input
        type="radio"
        name="condition"
        id="Deutliche Gebrauchsspuren"
        value="Deutliche Gebrauchsspuren"
        checked={condition2 === "Deutliche Gebrauchsspuren"}
        onChange={(e) => {
          setCondition2(e.target.value);
          console.log(condition2);
        }}
      />

      <label>Deutliche Gebrauchsspuren</label>
      <input
        type="radio"
        name="condition"
        id="Defekt"
        value="Defekt"
        checked={condition2 === "Defekt"}
        onChange={(e) => {
          setCondition2(e.target.value);
          console.log(condition2);
        }}
      />

      <label>Defekt</label>
      <label>Beschreibung kurz:</label>
      <input
        type="text"
        name="descriptionShort"
        id="descriptionShort"
        value={descriptionShort2}
        onChange={(e) => setDescriptionShort2(e.target.value)}
      ></input>
      
      <label>Beschreibung lang:</label>

      <textarea
        name="descriptionLong"
        id="descriptionLong"
        cols="50"
        rows="5"
        value={descriptionLong2}
        onChange={(e) => setDescriptionLong2(e.target.value)}

      ></textarea>

      <label>Anzahl:</label>
      <input
        type="number"
        name="amount"
        id="amount"
        value={amount2}
        onChange={(e) => setAmount2(e.target.value)}
      />

      <label>Preis:</label>
      <input
        type="number"
        name="price"
        id="price"
        value={price2}
        onChange={(e) => setPrice2(e.target.value)}
      />

      <label>EUR</label>
      <input
        type="radio"
        name="priceOptions"
        id="priceOptionFixed"
        value="fixed"
        checked={priceOptions2 === "fixed"}
        onChange={(e) => {
          setPriceOptions2(e.target.value);
        }}
      />

      <label>Festpreis</label>
      <input
        type="radio"
        name="priceOptions"
        id="priceOptionNegotiable"
        value="negotiable"
        checked={priceOptions2 === "negotiable"}
        onChange={(e) => {
          setPriceOptions2(e.target.value);
        }}
      />

      <label>VB</label>
      <input
        type="radio"
        name="priceOptions"
        id="priceOptionGiveAway"
        value="togiveaway"
        checked={priceOptions2 === "togiveaway"}
        onChange={(e) => {
          setPriceOptions2(e.target.value);
        }}
      />

      <label>Zu verschenken</label>
      <label>Bilder:</label>
      <input
        type="file"
        name="uploadImage"
        id="uploadImage"
        ref={fileInputRef}
        onChange={onFileChange}
      />

      <label>Kategorie:</label>
      <select
        value={category2.value}
        onChange={(e) => {
          setCategory2(e.target.value);
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
        placeholder="PLZ"
        value={zip2}
        onChange={(e) => setZip2(e.target.value)}
      />

      <input
        type="text"
        name="city"
        id="city"
        placeholder="Ort"
        value={city2}
        onChange={(e) => setCity2(e.target.value)}
      />

      <label>Straße/Nr.*</label>
      <input
        type="text"
        name="street"
        id="street"
        placeholder="Straße/Nr."
        value={street2}
        onChange={(e) => setStreet2(e.target.value)}
      />

      <label>Name*</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
      />
      <label>Telefonnummer</label>
      <input
        type="number"
        name="phone"
        id="phone"
        placeholder="Telefon"
        value={phone2}
        onChange={(e) => setPhone2(e.target.value)}
      />
      <button onClick={edit}>Änderungen speichern</button>
    </form>
  );
};

export default EditProduct;
