import "./searchbar.scss"
import {AiOutlineSearch} from 'react-icons/ai'

export default function Searchbar() {
    return (
        <div className="searchbar">
            <AiOutlineSearch />
            <input type="search" placeholder="Suche nach Produkt, Kategorie..." />
            <button>Produkt einstellen</button>
        </div>
    )
}
