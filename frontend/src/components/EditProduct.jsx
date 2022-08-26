import "./editProduct.scss";
import { useState, useRef } from "react";
import { apiBaseUrl } from "../api";
import { useNavigate } from "react-router-dom"

const EditProduct = ({ productId, productDetails, setProductDetails, setAllProducts, allProducts }) => {

  console.log("product:", productDetails)

  const [adType2, setAdType2] = useState(productDetails.adType);
  const [delivery2, setDelivery2] = useState(productDetails.delivery);
  const [title2, setTitle2] = useState(productDetails.title);
  const [condition2, setCondition2] = useState(productDetails.condition);
  const [brand2, setBrand2] = useState(productDetails.brand);
  const [descriptionShort2, setDescriptionShort2] = useState(productDetails.descriptionShort);
  const [descriptionLong2, setDescriptionLong2] = useState(productDetails.descriptionLong);
  const [amount2, setAmount2] = useState(productDetails.amount);
  const [price2, setPrice2] = useState(productDetails.price);
  const [priceOptions2, setPriceOptions2] = useState(productDetails.priceOptions);
  const [category2, setCategory2] = useState(productDetails.category);
  const [zip2, setZip2] = useState(productDetails.zip);
  const [city2, setCity2] = useState(productDetails.city);
  const [street2, setStreet2] = useState(productDetails.street);
  const [name2, setName2] = useState(productDetails.name);
  const [phone2, setPhone2] = useState(productDetails.phone);
  const [imageFile2, setImageFile2] = useState(null);

  const fileInputRef = useRef();
  const navigate = useNavigate();

  const onFileChange = (e) => {
    const productImage = e.target.files[0];
    setImageFile2(productImage);
  };
  const edit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    // // Update the formData object
    formData.append("adType", adType2);
    formData.append("delivery", delivery2);
    formData.append("title", title2);
    formData.append("condition", condition2);
    formData.append("brand", brand2);
    formData.append("descriptionShort", descriptionShort2);
    formData.append("descriptionLong", descriptionLong2);
    formData.append("amount", amount2);
    formData.append("price", price2);
    formData.append("priceOptions", priceOptions2);
    formData.append("category", category2);
    formData.append("zip", zip2);
    formData.append("city", city2);
    formData.append("street", street2);
    formData.append("name", name2);
    formData.append("phone", phone2);
    if (imageFile2) {
      formData.append("imageFile", imageFile2, imageFile2.name);
    }

    fetch(`${apiBaseUrl}products/edit/${productId}`, {
      method: "PUT",
      body: formData
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setProductDetails(data)
        setAllProducts(allProducts.map((product) => {
          if (product._id === productId) {
            return data
          }
          else {
            return product
          }
        }))
      });

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
            value={title2}
            onChange={(e) => setTitle2(e.target.value)}
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
            value={brand2}
            onChange={(e) => setBrand2(e.target.value)}
          />
        </div>
        <div className="div9">
          <label>Zustand:</label>
        </div>
        <div className="div10">
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
            value={descriptionShort2}
            onChange={(e) => setDescriptionShort2(e.target.value)}
          ></input>
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
            value={descriptionLong2}
            onChange={(e) => setDescriptionLong2(e.target.value)}

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
            value={amount2}
            onChange={(e) => setAmount2(e.target.value)}
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
            value={category2}
            onChange={(e) => {
              setCategory2(e.target.value);
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
            placeholder="PLZ"
            value={zip2}
            onChange={(e) => setZip2(e.target.value)}
          />

          <input
            className="input3"
            type="text"
            name="city"
            id="city"
            placeholder="Ort"
            value={city2}
            onChange={(e) => setCity2(e.target.value)}
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
            placeholder="Straße/Nr."
            value={street2}
            onChange={(e) => setStreet2(e.target.value)}
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
            placeholder="Name"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
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
            placeholder="Telefon"
            value={phone2}
            onChange={(e) => setPhone2(e.target.value)}
          />
        </div>
      </div >
      <div>
        <button className="btn-submitProduct" onClick={edit}>Änderungen speichern</button>
      </div>
    </form >
  );
};

export default EditProduct;
