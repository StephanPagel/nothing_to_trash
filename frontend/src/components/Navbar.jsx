import "./navbar.scss"
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navbar">
            <p>nothingtotrash</p>
            <div className="navbar_li">
                <ul>
                    <li><Link className="marketplace" to="/marketplace">Marktplatz</Link></li>
                    <li><Link className="about_us" to="/about_us">Über uns</Link></li>
                </ul>
            </div>
            <button className="navbar_btn_log">Login</button>
            <button className="navbar_btn">Register</button>
        </div>
    )
}
