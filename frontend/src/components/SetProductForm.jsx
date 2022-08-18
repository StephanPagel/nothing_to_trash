import "./setProductForm.scss";
import { useState } from "react";
import { apiBaseUrl } from "../api";

const SetProductForm = () => {
  const [adType, setAdType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const onFileChange = (e) => {
    const productImage = e.target.files[0];
    setImageFile(productImage);
  };

  const submitForm = (e) => {
    e.preventDefault();

    //NICE TO HAVE => Validierungskram
    // const formIsFilled =
    //   username &&
    //   username.length > 0 &&
    //   email &&
    //   email.length > 0 &&
    //   avatar !== null;
    // if (!formIsFilled) {
    //   return setErrorMessage(
    //     "Please fill out the form completely... All the memebers are already waiting for you!"
    //   );
    // }

    const formData = new FormData();

    // Update the formData object
    formData.append("title", title);
    formData.append("description", description);
    formData.append("amount", amount);
    formData.append("price", price);
    formData.append("zip", zip);
    formData.append("city", city);
    formData.append("street", street);
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("imageFile", imageFile, imageFile.name); // Blob = Binary Large Object

    fetch(`${apiBaseUrl}products/addnewProduct`, {
      method: "post",
      body: formData,
    })
      .then((response) => response.json())
      .then(() => {

        setTitle("")
        setDescription("")
        setAmount("")
        setPrice("")
        setZip("")
        setCity("")
        setStreet("")
        setName("")
        setPhone("")
        setImageFile(null)
      });
  };

  return (
    <form encType="multipart/form-data">
      {/* <label>Anzeigentyp:</label>
      <input
        type="radio"
        name="adType"
        id="adTypeOffer"
        value="adTypeOffer"
        onChange={(e) => {
          setAdType(e.target.value);
          console.log(adType);
        }}
      />
      <label>Ich biete</label>
      <input
        type="radio"
        name="typeOfAd"
        id="typeOfAdSearch"
        value="typeOfAdSearch"
        onChange={(e) => {
          setAdType(e.target.value);
          console.log(adType);
        }}
      /> */}
      {/* <Form.Field
        control={Radio}
        label="Ich biete"
        checked={adType === "offer"}
        value="offer"
        onClick={() => setAdType("offer")}
      />
      <Form.Field
        control={Radio}
        label="Ich suche"
        checked={gender === "Female"}
        value="Female"
        onClick={() => setGender("Female")}
      /> */}
      <label>Ich suche</label>
      <label>Lieferung:</label>
      <input type="radio" name="delivery" id="deliveryYes" />
      <label>Ja</label>
      <input type="radio" name="delivery" id="deliveryNo" />
      <label>Nein</label>
      <label>Titel der Anzeige:</label>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Beschreibung:</label>
      <textarea
        name="description"
        id="description"
        cols="50"
        rows="5"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
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
      <input
        type="file"
        name="uploadImage"
        id="uploadImage"
        onChange={onFileChange}
      />
      <label>Kategorie:</label>
      <select>
        <option value="1">Kategorie 1</option>
        <option value="2">Kategorie 2</option>
        <option value="3">Kategorie 3</option>
        <option value="4">Kategorie 4</option>
        <option value="5">Kategorie 5</option>
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
      <button onClick={submitForm}>Produkt einstellen</button>
    </form>
  );
};

export default SetProductForm;
