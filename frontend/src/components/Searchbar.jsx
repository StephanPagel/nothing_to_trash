import "./searchbar.scss"
import { Link } from 'react-router-dom'

export default function Searchbar() {
    return (
        <div className="searchbar">
            <div className="searchbar_box">
                <input className="input_search" type="search" placeholder=" Suche nach Produkt, Kategorie..." />
                <a className="search_btn" href="#"></a>
                <i className="fa_searchbar"></i>
            </div>
            <button className="btn_search"><Link to="/set_product">Produkt einstellen</Link></button>
        </div>
    )
}
