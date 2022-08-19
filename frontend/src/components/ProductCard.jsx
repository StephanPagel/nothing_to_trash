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
    </div>
  );
}
