import "./productCard.scss"
import chair from '../images/marketplace_chair.jpg'

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
                        <td><span>Wie neu</span></td>
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
                        <td><span>300 Stk</span></td>
                    </tr>
                    <button>Details ＞</button>
                    <button>♡ Auf die Wunschliste</button>
                </div>
            </div>
        </div>
    )
}

