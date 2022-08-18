import "./searchbar.scss"
import { AiOutlineSearch } from 'react-icons/ai'

export default function Searchbar() {
    return (
        <div className="searchbar">
            <div>
                <input className="input_search" type="search" placeholder="  Suche nach Produkt, Kategorie... " /><AiOutlineSearch />
            </div>
            <button className="btn_search">Produkt einstellen</button>
        </div>
    )
}
