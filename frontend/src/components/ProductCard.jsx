import "./productCard.scss";
import { apiBaseUrl } from "../api";
import { Link } from 'react-router-dom';
import Wishlistbutton from "./Wishlistbutton";

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
            <div className="product">

                {/* <img src={chair} alt="product" /> */}

                <img
                    src={props.filename && `${apiBaseUrl}/${props.filename}`}
                    alt="product"
                />

                <div className="product_title">
                    <h3>{props.price}</h3>
                    <h3>{props.title}</h3>
                    <h4>{props.descriptionShort}</h4>
                </div>
                <table className="product_details">
                    <tbody>
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
                        <button><Link to="/product_details">Details</Link></button>
                        <Wishlistbutton />
                    </tbody>
                </table>
            </div >
        </div >
    );
}
