import "./productCard.scss";
import { Link } from "react-router-dom";
import { apiBaseUrl } from "../api";

export default function ProductCard(props) {
  return (
    <div className="product_card">
      <div className="product">
                <img
                    src={props.filename && `${apiBaseUrl}/${props.filename}`}
                    alt="product"
                />
                
        <div className="product_title">
          <h3>{props.price}</h3>
          <h3>{props.title}</h3>
          <h4>{props.descriptionShort}</h4>
        </div>
        <div className="product_details">
          <tr>
            <td>Zustand</td>
            <td>
              <span>{props.condition}</span>
            </td>
          </tr>
          <tr>
            <td>Marke</td>
            <td>{props.brand}</td>
          </tr>
          <tr>
            <td>Lieferung</td>
            <td>{props.delivery === "deliveryYes" ? "Ja" : "Nein"}</td>
          </tr>
          <tr>
            <td>Auf Lager</td>
            <td>
              <span>{props.amount}</span>
            </td>
          </tr>
          <Link to={`/product_details/${props.id}`}>
            <button>Details ＞</button>
          </Link>
          <button>♡ Auf die Wunschliste</button>
        </div>
      </div>
    </div>
  );
}
