import "./navbar.scss";
import { Link } from 'react-router-dom';
import profilfoto from "./../images/profilfoto.png";

export default function Navbar(props) {

    return (
        <div className="navbar">
            <div className="navbar_li">
                <Link className="linktohome" to="/">nothingtotrash</Link>
                <ul>
                    <li>
                        {!props.token &&
                            <div>
                                <Link className="navbarlink" to="/marketplace">Marktplatz</Link>
                            </div>
                        }
                        {props.token &&
                            <div>
                                <Link className="navbarlink" to="/userprofil">Marktplatz</Link>
                            </div>
                        }
                    </li>
                    <li><Link className="navbarlink" to="/about_us">Über uns</Link></li>
                </ul>
            </div>

            {!props.token &&
                <div>
                    <button className="navbar_btn_log">
                        <Link to="/login">LogIn</Link>
                    </button>
                    <button className="navbar_btn"><Link to="/register">Registriere Dich</Link></button>
                </div>
            }
            {props.token &&
                <div>
                    <Link className="btn_profilfoto" to="/userprofil"><img className="profilfoto" src={profilfoto} alt="Profilfoto" /></Link>
                </div>
            }
        </div >
    )
}
