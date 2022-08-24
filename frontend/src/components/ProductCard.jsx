import "./productCard.scss";
import { Link } from "react-router-dom";
import { apiBaseUrl } from "../api";

export default function ProductCard(props) {



    // conditionSwitch(props.condition) {
    //   switch(props.condition){
    //                 case "conditionAsNew":
    //                   return "Wie neu"
    //                 break;
    //                 case "conditionGood":
    //                   return "Gut"
    //                 break;
    //                 case "conditionClearlyUsed":
    //                   return "Deutliche Gebrauchsspuren"
    //                 break;
    //                 case "conditionDefect":
    //                   return "Defekt"
    //                 break;
    //                 default: 
    //                 return "Kein Zustand ausgewählt"
    //                 }
    // }

    return (
        <div className="product_card">
            <div className="productCard">
                <img src={props.filename && `${apiBaseUrl}/${props.filename}`} alt="product" />
                <div className="productCard_title">
                    <h3>{props.price}</h3>
                    <h3>{props.title}</h3>
                    <h4>{props.descriptionShort}</h4>
                    <div className="productCard_details">
                        <h5>Zustand</h5>
                        <p><span>{props.condition}</span></p>
                        <h5>Marke</h5>
                        <p>{props.brand}</p>
                        <h5>Lieferung</h5>
                        <p>{props.delivery === "deliveryYes" ? "Ja" : "Nein"}</p>
                        <h5>Auf Lager</h5>
                        <p><span>{props.amount}</span></p>
                    </div>
                </div>
                <div className="productCard_buttons">
                    <Link className="btn_lila" to={`/product_details/${props.id}`}>Details</Link>
                    <button className="btn_grey">♡ Auf die Wunschliste</button>
                </div>
            </div >
        </div >
    );
}
