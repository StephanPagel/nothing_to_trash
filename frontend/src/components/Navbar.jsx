import "./navbar.scss"
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { apiBaseUrl } from "./../api";

export default function Navbar({ errorMessageausLogin, setToken }) {

    const navigate = useNavigate();

    const logout = () => {
        fetch(apiBaseUrl + "users/logout",
            { credentials: "include" })
            .then((res) => {
                console.log(res)
                setToken(null);
                navigate("/");
            });
    };

    return (
        <div className="navbar">
            <div className="navbar_li">
                <p><Link to="/">nothingtotrash</Link></p>
                <ul>
                    <li className="nav"><Link to="/marketplace">Marktplatz</Link></li>
                    <li><Link to="/about_us">Über uns</Link></li>
                </ul>
            </div>
            {errorMessageausLogin && (
                <button className="navbar_btn_log">
                    <Link to="/login">Login</Link>
                </button>


            )}
            {!errorMessageausLogin && (
                <div><button className="navbar_btn_log" onClick={logout}>Logout</button></div>
            )}
            <button className="navbar_btn"><Link to="/register">Registriere Dich</Link></button>
        </div >
    )
}
