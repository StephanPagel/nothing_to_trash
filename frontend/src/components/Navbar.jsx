import "./navbar.scss"
import { Link } from 'react-router-dom'

export default function Navbar() {


    return (
        <div className="navbar">
            <div className="navbar_li">
                <Link className="linktohome" to="/">nothingtotrash</Link>
                <ul>
                    <li><Link className="navbarlink" to="/marketplace">Marktplatz</Link></li>
                    <li><Link className="navbarlink" to="/about_us">Über uns</Link></li>
                </ul>
            </div>
            <button className="navbar_btn_log">
                <Link to="/login">LogIn</Link>
            </button>
            <button className="navbar_btn"><Link to="/register">Registriere Dich</Link></button>
        </div >
    )
}
