import "./productCard.scss"
import chair from '../images/marketplace_chair.jpg'

export default function Product_card() {
    return (
        <div className="product-card">
            <img src={chair} alt="product" />
            <h3>45.00 EUR</h3>
            <h3>Produkt Titel</h3>
            <h4>Kleine Produktbeschreibung</h4>
            <p>Zustand</p>
            <span>Wie neu</span>
            <p>Marke</p>
            <p>Grocery Tarm Fields</p>
            <p>Lieferung</p>
            <p>Jahr</p>
            <p>Auf Lager</p>
            <span>320 Stk</span>
            <button>Details ＞</button>
            <button>♡ Auf die Wunschliste</button>
        </div>
    )
}
