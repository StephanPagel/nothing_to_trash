
import "./productCard.scss";
import chair from "../images/marketplace_chair.jpg";
import { apiBaseUrl } from "../api";

export default function ProductCard(props) {
  return (
    <div className="product-card">
      <img
        src={props.filename && `${apiBaseUrl}/${props.filename}`}
        alt="product"
      />
      <h3>{props.price}</h3>
      <h3>{props.title}</h3>
      <h4>{props.descriptionShort}</h4>
      <p>Zustand</p>
      <span>{props.condition}</span>
      <p>Marke</p>
      <p>{props.brand}</p>
      <p>Lieferung</p>
      <p>{props.delivery === "deliveryYes" ? "Ja" : "Nein"}</p>
      <p>Auf Lager</p>
      <span>{props.amount}</span>
      <button>Details ＞</button>
      <button>♡ Auf die Wunschliste</button>

export default function ProductCard() {
  return (
    <div className="product_card">
      <div className="product">
        <img src={chair} alt="product" />
        <div className="product_title">
          <h3>45.00 EUR</h3>
          <h3>Produkt Titel</h3>
          <h4>Produktbeschreibung</h4>
        </div>
        <div className="product_details">
          <tr>
            <td>Zustand</td>
            <td>
              <span>Wie neu</span>
            </td>
          </tr>
          <tr>
            <td>Marke</td>
            <td>Grocy</td>
          </tr>
          <tr>
            <td>Lieferung</td>
            <td>30.06.2070</td>
          </tr>
          <tr>
            <td>Auf Lager</td>
            <td>
              <span>300 Stk</span>
            </td>
          </tr>
          <button>Details ＞</button>
          <button>♡ Auf die Wunschliste</button>
        </div>
      </div>
    </div>
  );
}
