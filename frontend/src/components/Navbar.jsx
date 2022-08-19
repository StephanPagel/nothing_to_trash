import "./navbar.scss"
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar_li">
                <p><Link to="/">nothingtotrash</Link></p>
                <ul>
                    <li className="nav"><Link to="/marketplace">Marktplatz</Link></li>
                    <li><Link to="/about_us">Über uns</Link></li>
                </ul>
            </div>
            <button className="navbar_btn_log"><Link to="/login">Login</Link></button>
            <button className="navbar_btn"><Link to="/login">Registriere Dich</Link></button>
        </div>
    )
}
